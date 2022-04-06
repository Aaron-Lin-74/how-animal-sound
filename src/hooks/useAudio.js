import { useState, useEffect } from 'react'

const useAudio = (url) => {
  const [sound] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    setPlaying(!playing)
  }

  const stopPlaying = () => {
    setPlaying(false)
  }

  useEffect(() => {
    if (playing) {
      sound.play()
    } else {
      sound.pause()
    }
  }, [playing, sound])

  useEffect(() => {
    sound.addEventListener('ended', stopPlaying)
    return sound.removeEventListener('ended', stopPlaying)
  }, [sound])

  return { playing, toggle, stopPlaying }
}

export default useAudio
