'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <PresentationComponent />
    </main>
  )
}

// Array of sentences to display
const sentences = [
  "When you involve Christ in every part of your life there will be no room for darkness or doubt.",
  "Sometimes we may lose our way, and we just have to try to get back on the path.",
  "Times can be rough but he will help us through it no matter what.",
  "A life without Christ is terrible and engulfing, but with Christ it is sure and bright.",
  "Without Christ we can be left in the dark and be confused.",
  "With light we will feel safe and loved, but with darkness we would feel horrible and miserable.",
  "With Christ's light we can feel the darkness instantly flee and be replaced with love.",
  "Even in the dark, I can call out to Him and know He is there.",
  "We can feel trapped in the darkness, but a little bit of light can pierce through that and truly change our experience.",
  "Christ is always there even when it's dark.",
  // Add more sentences as needed
]

// Array of music files
const musicFiles = [
  "all_for_me_2025.mp3",
  "Follow.mp3",
  "He_Still_Chose_Me.mp3",
  "Look_Unto_Christ.mp3",
  "over_mine_2024.mp3",
  "possible_with_him.mp3",
]

function PresentationComponent() {
  const [index, setIndex] = useState(-1)
  const [started, setStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentDelay, setCurrentDelay] = useState(3000) // Initial delay in ms
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentSong, setCurrentSong] = useState("")
  const [shuffledPlaylist, setShuffledPlaylist] = useState<string[]>([])
  const [songIndex, setSongIndex] = useState(0)
  
  // Log component renders to track state updates
  console.log("PresentationComponent rendering", {
    index,
    started,
    isPaused,
    currentDelay,
    timerActive: timerRef.current !== null
  })
  
  // Configuration for dynamic timing
  const baseDelay = 1500 // Minimum delay in milliseconds
  const charFactor = 50 // Milliseconds per character
  const maxDelay = 8000 // Maximum delay in milliseconds
  
  // Function to calculate delay based on text length - wrapped in useCallback
  const calculateDelay = useCallback((text: string) => {
    // Calculate delay based on character count
    const charCount = text.length
    let delay = baseDelay + (charCount * charFactor)
    
    // Cap at maximum delay
    delay = Math.min(delay, maxDelay)
    
    console.log(`Sentence length: ${charCount} characters`)
    console.log(`Calculated delay: ${(delay/1000).toFixed(1)} seconds`)
    
    return delay
  }, [baseDelay, charFactor, maxDelay]);
  
  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: string[]) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]] // Swap elements
    }
    return newArray
  }
  
  // Function to create a new shuffled playlist
  const createShuffledPlaylist = () => {
    if (musicFiles.length > 0) {
      const shuffled = shuffleArray(musicFiles)
      setShuffledPlaylist(shuffled)
      setSongIndex(0)
      return shuffled[0]
    }
    return ""
  }
  
  // Function to play the next song in the playlist
  const playNextSong = () => {
    let nextIndex = songIndex + 1
    
    // If we've played all songs, create a new shuffled playlist
    if (nextIndex >= shuffledPlaylist.length) {
      nextIndex = 0
      setShuffledPlaylist(shuffleArray(musicFiles))
    }
    
    setSongIndex(nextIndex)
    setCurrentSong(shuffledPlaylist[nextIndex])
  }
  
  // Function to advance to the next sentence - wrapped in useCallback to prevent recreation on every render
  const nextSentence = useCallback(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    
    // Get the current index and calculate the next index
    const currentIdx = index
    const nextIdx = (currentIdx + 1) % sentences.length
    
    console.log(`Current index: ${currentIdx}, Next index: ${nextIdx}`)
    console.log(`isPaused state when calculating next sentence: ${isPaused}`)
    
    // Update the index state
    setIndex(nextIdx)
    
    // Calculate delay for the next sentence
    const delay = calculateDelay(sentences[nextIdx])
    setCurrentDelay(delay)
    
    // Log when a new sentence is displayed
    console.log(`Displaying sentence ${nextIdx + 1}: "${sentences[nextIdx]}"`)
    console.log(`Will advance to next sentence in ${(delay/1000).toFixed(1)} seconds`)
    
    // We no longer set the timer here - it's handled by the useEffect below
  }, [index, isPaused, calculateDelay]);
  
  // Function to toggle pause state - wrapped in useCallback to prevent recreation on every render
  const togglePause = useCallback(() => {
    console.log("togglePause called, current isPaused:", isPaused)
    
    // Simply toggle the isPaused state
    // The useEffect will handle clearing or setting the timer based on the new state
    setIsPaused(prev => {
      const newPauseState = !prev
      console.log(`Changing pause state from ${prev} to ${newPauseState}`)
      return newPauseState
    })
  }, [isPaused]);
  
  // Start the presentation
  const startPresentation = () => {
    console.log("startPresentation called")
    
    // Initialize shuffled playlist and set first song
    const firstSong = createShuffledPlaylist()
    setCurrentSong(firstSong)
    console.log("Set first song:", firstSong)
    
    // Start showing sentences
    setStarted(true)
    console.log("Set started to true")
    
    // Set the initial index to -1 so that nextSentence will advance to index 0
    setIndex(-1)
    console.log("Set initial index to -1")
    
    // Call nextSentence to start the rotation
    console.log("Calling nextSentence to start rotation")
    nextSentence()
    
    console.log("Presentation started")
  }
  
  // Timer effect to handle automatic sentence rotation
  useEffect(() => {
    console.log("Timer effect running with dependencies:", { index, isPaused, started, currentDelay })
    
    // Only set up timer if presentation has started and is not paused
    if (started && !isPaused) {
      console.log(`Setting up timer for index ${index} with delay ${currentDelay}ms`)
      
      // Set timer for next sentence
      timerRef.current = setTimeout(() => {
        console.log("Timer fired, advancing to next sentence")
        console.log(`Timer callback - current index: ${index}, isPaused: ${isPaused}`)
        nextSentence()
      }, currentDelay)
      
      // Cleanup function to clear the timer
      return () => {
        console.log("Cleaning up timer in effect")
        if (timerRef.current) {
          clearTimeout(timerRef.current)
          timerRef.current = null
        }
      }
    }
  }, [index, isPaused, started, currentDelay, nextSentence])
  
  // Handle keyboard controls
  useEffect(() => {
    console.log("Keyboard controls useEffect running with dependencies:", { started, index, isPaused })
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!started) return
      
      if (e.code === "Space" || e.code === "ArrowRight") {
        e.preventDefault()
        console.log("Manual advance triggered by keyboard")
        // No need to clear the timer here as the useEffect cleanup will handle it
        nextSentence()
      } else if (e.code === "KeyP") {
        e.preventDefault()
        console.log("Pause toggle triggered by keyboard")
        togglePause()
      }
    }
    
    console.log("Adding keyboard event listener")
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      console.log("Removing keyboard event listener")
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [started, index, isPaused, nextSentence, togglePause])
  
  // Handle audio playback
  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.addEventListener('ended', playNextSong)
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', playNextSong)
        }
      }
    }
  }, [currentSong, songIndex])
  
  // Fade out controls after a delay when presentation starts
  useEffect(() => {
    let fadeTimeout: NodeJS.Timeout | null = null
    
    if (started) {
      fadeTimeout = setTimeout(() => {
        const controlsElement = document.getElementById('controls')
        if (controlsElement) controlsElement.classList.add('fade-out')
      }, 2000)
    }
    
    return () => {
      if (fadeTimeout) clearTimeout(fadeTimeout)
    }
  }, [started])
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative">
      {/* Controls */}
      <div id="controls" className="controls" aria-label="Presentation controls" role="region">
        <p>Automatically advances every <span id="timer-value">{(currentDelay / 1000).toFixed(1)}</span> seconds</p>
        <p>
          Manual controls:
          <span className="kbd" aria-label="Space key">Space</span> or
          <span className="kbd" aria-label="Right arrow key">→</span> to advance
          <span className="kbd" aria-label="P key">P</span> to pause/resume
        </p>
        <div className="progress-indicator" aria-live="polite">
          {started && index >= 0 ? `${index + 1} of ${sentences.length}${isPaused ? ' (Paused)' : ''}` : ''}
        </div>
      </div>
      
      {/* Audio Player */}
      <audio 
        ref={audioRef}
        controls 
        className="audio-player"
        src={currentSong ? `/audio/${currentSong}` : undefined}
        autoPlay={started}
      >
        Your browser does not support the audio element.
      </audio>
      
      {/* Start Button or Sentence Display */}
      {!started ? (
        <button 
          className="start-button"
          onClick={startPresentation}
        >
          Start Presentation
        </button>
      ) : (
        <div
          className="sentence-container"
          onClick={() => {
            if (!isPaused) {
              console.log("Manual advance triggered by click")
              // No need to clear the timer here as the useEffect cleanup will handle it
              nextSentence()
            }
          }}
        >
          {sentences[index]}
        </div>
      )}
    </div>
  )
}