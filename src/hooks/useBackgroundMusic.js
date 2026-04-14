import { useEffect, useRef } from 'react'

// YouTube video ID extracted from the provided URL
const VIDEO_ID    = 'OkN13jPSprk'
const VOL_FULL    = 55   // volume (0-100) when no soundscape is playing
const VOL_BLEND   = 14   // volume when soundscape is active — music recedes
const FADE_STEP   = 1.5  // volume units per tick
const FADE_TICK   = 50   // ms per tick → full fade ≈ 2.7 s

// ── YouTube IFrame API loader (idempotent) ────────────────────────────────────
function loadYTScript(onReady) {
  if (window.YT?.Player) { onReady(); return }
  const prev = window.onYouTubeIframeAPIReady
  window.onYouTubeIframeAPIReady = () => { if (prev) prev(); onReady() }
  if (!document.getElementById('yt-iframe-api')) {
    const s = document.createElement('script')
    s.id  = 'yt-iframe-api'
    s.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(s)
  }
}

export function useBackgroundMusic(soundscapeActive) {
  const playerRef   = useRef(null)
  const unlockedRef = useRef(false)  // true after first user interaction
  const fadeRef     = useRef(null)   // setInterval id for smooth fades
  const targetRef   = useRef(VOL_FULL)

  // ── Initialise player once ─────────────────────────────────────────────────
  useEffect(() => {
    const CONTAINER_ID = 'yt-bg-container'
    if (document.getElementById(CONTAINER_ID)) return  // already mounted

    loadYTScript(() => {
      const div = document.createElement('div')
      div.id = CONTAINER_ID
      div.style.cssText = 'position:fixed;width:1px;height:1px;left:-2px;top:-2px;opacity:0;pointer-events:none;'
      document.body.appendChild(div)

      playerRef.current = new window.YT.Player(div, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1, loop: 1, playlist: VIDEO_ID,
          controls: 0, disablekb: 1, fs: 0, rel: 0,
        },
        events: {
          onReady(e) {
            // Start muted — browser autoplay policy requires user gesture first
            e.target.mute()
            e.target.playVideo()
          },
        },
      })
    })

    // Unlock on first click anywhere (satisfies browser autoplay policy)
    const unlock = () => {
      if (unlockedRef.current || !playerRef.current?.unMute) return
      unlockedRef.current = true
      playerRef.current.unMute()
      playerRef.current.setVolume(targetRef.current)
    }
    document.addEventListener('click',      unlock, { once: true })
    document.addEventListener('touchstart', unlock, { once: true })

    return () => {
      document.removeEventListener('click',      unlock)
      document.removeEventListener('touchstart', unlock)
    }
  }, [])

  // ── Smooth volume fade when soundscape activates / deactivates ─────────────
  useEffect(() => {
    targetRef.current = soundscapeActive ? VOL_BLEND : VOL_FULL

    if (fadeRef.current) clearInterval(fadeRef.current)

    fadeRef.current = setInterval(() => {
      const p = playerRef.current
      if (!p?.getVolume || !unlockedRef.current) return
      const cur    = p.getVolume()
      const target = targetRef.current
      if (cur === target) { clearInterval(fadeRef.current); return }
      const next = cur < target
        ? Math.min(target, cur + FADE_STEP)
        : Math.max(target, cur - FADE_STEP)
      p.setVolume(next)
    }, FADE_TICK)

    return () => clearInterval(fadeRef.current)
  }, [soundscapeActive])
}
