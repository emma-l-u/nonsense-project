import { useEffect, useRef } from 'react'

// YouTube video ID extracted from the provided URL
const VIDEO_ID = 'knCGHypL9FI'
const VOL      = 45   // constant volume — soundscapes layer on top, music never fades

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

export function useBackgroundMusic() {
  const playerRef   = useRef(null)
  const unlockedRef = useRef(false)  // true after first user interaction

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
      playerRef.current.setVolume(VOL)
    }
    document.addEventListener('click',      unlock, { once: true })
    document.addEventListener('touchstart', unlock, { once: true })

    return () => {
      document.removeEventListener('click',      unlock)
      document.removeEventListener('touchstart', unlock)
    }
  }, [])

}
