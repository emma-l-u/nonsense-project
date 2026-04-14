import { useEffect, useRef } from 'react'
import { createSoundscape } from '../audio/soundscapes'

// Fades in a generative ambient soundscape when a route is active,
// and fades it out when the route is cleared or the character changes.
export function useSoundscape(route, selectedCharacter) {
  const ctxRef   = useRef(null)
  const scapeRef = useRef(null)
  const keyRef   = useRef(null) // 'character' while playing, null when silent

  useEffect(() => {
    // Derive a single key: null = no route, otherwise the character's id
    const newKey = route ? selectedCharacter : null

    if (newKey === keyRef.current) return // nothing to change
    keyRef.current = newKey

    // Stop the current soundscape (fades out internally)
    if (scapeRef.current) {
      scapeRef.current.stop()
      scapeRef.current = null
    }

    if (!newKey) return // route was cleared — done

    // Create or resume the AudioContext (requires a prior user gesture,
    // which is guaranteed here since the user just set a route)
    if (!ctxRef.current || ctxRef.current.state === 'closed') {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    ctxRef.current.resume()

    const scape = createSoundscape(ctxRef.current, newKey)
    if (!scape) return
    scape.start()
    scapeRef.current = scape
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!route, selectedCharacter])

  // Full teardown on unmount
  useEffect(() => {
    return () => {
      if (scapeRef.current) { scapeRef.current.stop(); scapeRef.current = null }
      setTimeout(() => {
        if (ctxRef.current) { ctxRef.current.close(); ctxRef.current = null }
      }, 2500) // wait for fade-out to finish
    }
  }, [])
}
