import { useEffect, useRef, useState, useCallback } from 'react'

const VIDEO_ID   = 'knCGHypL9FI'
const VOL_DEFAULT = 45

function loadYTScript(onReady) {
  if (window.YT?.Player) { onReady(); return }
  const prev = window.onYouTubeIframeAPIReady
  window.onYouTubeIframeAPIReady = () => { if (prev) prev(); onReady() }
  if (!document.getElementById('yt-iframe-api')) {
    const s = document.createElement('script')
    s.id = 'yt-iframe-api'
    s.src = 'https://www.youtube.com/iframe_api'
    s.defer = true
    document.head.appendChild(s)
  }
}

export function useBackgroundMusic() {
  const playerRef   = useRef(null)
  const unlockedRef = useRef(false) // user has interacted at least once
  const [volume, setVolumeState] = useState(VOL_DEFAULT)
  const [muted,  setMuted]       = useState(false)
  const volumeRef = useRef(VOL_DEFAULT)
  const mutedRef  = useRef(false)

  // Keep refs in sync so audio callbacks always see current values
  useEffect(() => { volumeRef.current = volume }, [volume])
  useEffect(() => { mutedRef.current  = muted  }, [muted])

  useEffect(() => {
    const CONTAINER_ID = 'yt-bg-container'
    if (document.getElementById(CONTAINER_ID)) return

    loadYTScript(() => {
      const div = document.createElement('div')
      div.id = CONTAINER_ID
      div.style.cssText = 'position:fixed;width:1px;height:1px;left:-2px;top:-2px;opacity:0;pointer-events:none;'
      document.body.appendChild(div)

      playerRef.current = new window.YT.Player(div, {
        videoId: VIDEO_ID,
        playerVars: { autoplay: 1, loop: 1, playlist: VIDEO_ID, controls: 0, disablekb: 1, fs: 0, rel: 0 },
        events: {
          onReady(e) {
            e.target.mute()
            e.target.playVideo()
            // If user already clicked before the player finished loading, unmute now
            if (unlockedRef.current) {
              e.target.unMute()
              e.target.setVolume(mutedRef.current ? 0 : volumeRef.current)
            }
          },
        },
      })
    })

    // Unlock on first interaction anywhere on the page
    const unlock = () => {
      if (unlockedRef.current) return
      unlockedRef.current = true
      const p = playerRef.current
      if (p?.unMute) {
        p.unMute()
        p.setVolume(mutedRef.current ? 0 : volumeRef.current)
      }
      // Keep listening so future interactions can also trigger if player wasn't ready
    }
    document.addEventListener('click',      unlock)
    document.addEventListener('touchstart', unlock)
    return () => {
      document.removeEventListener('click',      unlock)
      document.removeEventListener('touchstart', unlock)
    }
  }, [])

  const setVolume = useCallback((v) => {
    setVolumeState(v)
    if (playerRef.current?.setVolume && unlockedRef.current && !mutedRef.current) {
      playerRef.current.setVolume(v)
    }
  }, [])

  const toggleMute = useCallback(() => {
    setMuted(prev => {
      const next = !prev
      const p = playerRef.current
      if (p && unlockedRef.current) {
        if (next) { p.mute();   p.setVolume(0) }
        else      { p.unMute(); p.setVolume(volumeRef.current) }
      }
      return next
    })
  }, [])

  return { volume, setVolume, muted, toggleMute }
}
