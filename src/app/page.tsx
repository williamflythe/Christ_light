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
  "With Christ’s light we can feel the darkness instantly flee and be replaced with love.",
  "Even in the dark, I can call out to Him and know He is there.",
  "We can feel trapped in the darkness, but a little bit of light can pierce through that and truly change our experience.",
  "Christ is always there even when it’s dark.",
  "Even when the lights go out in my life, I can trust that Jesus Christ will always be there for me.",
  "You don’t realize how much the Spirit’s presence affects you until it’s entirely gone.",
  "The world would be much worse without Christ’s light.",
  "Darkness must depart when the light of Christ is present.",
  "Sometimes we take the light Christ offers for granted.",
  "God plays such an important role in our lives and we must always cherish our relationship with Him because He loves us so much.",
  "He helped me guide the way to the light when I felt down.",
  "Even when I cannot see Christ, He is always with me. Jesus will be with me in my darkest times.",
  "He is my light.",
  "He can help guide you.",
  "The darkness only wins when you don’t feel light.",
  "For those who look for darkness in the light will be lost. For those who look for light in the darkness will be found. As long as we shed light, we can help the lost.",
  "If Jesus=true, then Satan=false.",
  "Christ is like the light that allows us to see.",
  "Christ always wins!",
  "Sometimes it feels like the light leaves completely, but it doesn’t. You still have the capability to turn on those lights.",
  "As soon as the light comes, the darkness is gone.",
  "Light can’t be overpowered by darkness, it can only leave and come back again.",
  "In the world there is darkness. Each person holds a bit of it, but as we open our hearts to the Lord, the darkness has to surrender.",
  "Without Christ we cannot see what we need spiritually and we are left without guidance as our human eyes are not enough to pierce the dark. Christ is the light that makes it so that we can see.",
  "Darkness will always come for us, and we need to stay close to the Lord and His light will come.",
  "Christ is always with us even in darkness and we can reach out and connect with Him.",
  "He can light the path on our spiritual and physical journey and He guides on this path.",
  "He is the light. He lights up our way in the consuming abyss of darkness that we live in. If we can invite the Saviour into our lives, He can light that place we are in up. We can be free from the darkness.",
  "He is the light of the world so we can see.",
  "Jesus Christ's light is truth and power. If I want to find truth, I need to draw closer to His light.",
  "He is in all of it. Responsible for all of it.",
  "Christ made the universe. He made it where it’s all in perfect balance of each other. We marvel that the stars hold light, that the air we breathe is balanced.",
  "Light is bright and warm just like Christ.",
  "There is always light.",
  "We cannot see without Christ. He is the light that lets us see truth.",
  "When you witness the stars and sun and moon and Earth and every beautiful part of this world, you witness the light and power of Jesus Christ.",
  "The ability to make darkness go away and make us able to see. He is the light and the way!",
  "Christ is the light that keeps us on the path.",
  "He is all powerful and is a flashlight to us.",
  "Christ is everywhere around us just like light is.",
  "Jesus Christ IS the LIGHT. Light is a manifestation of His majesty and power.",
  "Jesus is your light, hold it close.",
  "Jesus is the light. His light will guide you down the covenant path.",
  "Christ is everywhere.",
  "All the light that we witness comes from Him. It is holy and pure and encompasses all. His light represents strength and truth.",
  "He is like the sun, full of power and shines brightly in any place.",
  "He is the brightest light that will shine. He knows what choices are right = light, and what are wrong = dark.",
  "He can guide us because He knows where we are going even if we don’t, and if we stray He can guide us back to the path.",
  "He has control over all light and He is light.",
  "He has the power to shine His greatness on us whether we choose to be with Him or not.",
  "Christ is all the light, His light touches and glorifies all things.",
  "Christ’s relationship to light is like a lot of analogies go, His presence sends darkness (sin) retreating.",
  "Christ is the way like light helps us to find our way.",
  "Christ is the light, the light represents Him.",
  "He is the light of the world.",
  "He is light, He giveth light to the world.",
  "He is the truth and the light that chaseth away all darkness.",
  "He is all light and shares it with everyone.",
  "God governs everything in this earth.",
  "He guides me when I am trying to understand something that He wants me to learn, helps me be better.",
  "The light of Christ allows me to overcome the darkness and sin in my life. It provides me with peace, comfort, and greatness. He is the Comforter after all! You can have his saving light, too!",
  "The same light that is in Christ is in me. I have the same potential to become like Christ.",
  "I am happy.",
  "It helps us when it gets dark.",
  "Christ’s light affects me by showing me what to do and what not to do. He light also guides me in the right direction.",
  "I can’t even understand without God.",
  "It lets me know what to do and what not to do.",
  "We are all divine heirs and heiresses to the kingdom of God. As part of that divinity, the light of Christ lies in us and one day will allow us to become so much greater than we could ever understand in this life as we take our place in our Father’s kingdom.",
  "Christ’s light affects me by giving peace and comfort.",
  "It increases our abilities. And spreads to others.",
  "A drop can cause a ripple A ripple can cause a tidal wave. Every act of kindness we show, every bit of light and joy we share causes a ripple.",
  "It brightens and broadens my planes of knowledge.",
  "It makes me happier, more focused, smarter, and stronger. We then use our light to give others the same light.",
  "He offers it freely!",
  "It shows me the way, and I can also spread it to others.",
  "We need God’s light to have our own, and we need God to function.",
  "The light of Christ teaches and guides.",
  "The light of Christ helps you to become like Him. And it can help and guide you.",
  "His light gives us TRUTH, and allows us to LIVE. Allows us to be “in” Him.",
  "His light makes me happier and holier. Overall it makes me a better man.",
  "His light comforts us and guides us down the path of righteousness.",
  "Christ’s light helps me to know Him and to comprehend God.",
  "Christ's light brings me warmth and peace. He’s epic. It is through Him that I am who I am.",
  "It is through Him that I am who I am.",
  "Christ’s light affects me by showing me the way and doing His will as it becomes my will.",
  "It grants understanding of His love and presence with me which empower faith and courage throughout life.",
  "Darkness knows nothing except leading us away from God. Coming unto the light will help us to understand God’s will for us.",
  "By giving comfort and His light whenever I need and removing all darkness by just being beside me.",
  "Here’s what I think, when you’re all alone in a dark room what will overpower/shine in the dark, the light! And that helps me keep going.",
  "It helps us identify truth, know right from wrong, and understand God.",
  "Helps me make better decisions in life.",
  "Helps me to lift others and choose the right.",
  "Shows me the right thing to do.",
  "Eventually we will all meet God and the faithful will be full of joy.",
  "It helps me understand God’s plan for me more fully.",
  "It allows us to have peace of mind and clarity in our thoughts and actions.",
  "It makes you happy. He wants to help you see!",
  "His light spreads to us so we can spread it to others.",
  "Gives us power to get through times of need.",
  "Teaches infinitely and brings knowledge.",
  "It gives life to all things and if truth is life then light is life.",
  "It heals your soul And allows you to help heal others.",
  "He can bring you peace.",
  "Light “fills the immensity of space.” It never takes away, only adds to the brilliance of something. Similarly, when we carry the light of Christ with us, we will only add to the brilliance of this beautiful wild.",
  "Comforts.",
  "Christ’s light is within us all, we just need to let it shine to fulfill our potential.",
  "Christ’s light will guide you down the right path and help remind you to do the right thing.",
  "It gives power to God. He helps us understand things that we couldn’t understand before.",
  "It gives us the ability to overcome our darkest moments. It is a way for us to overpower the grasping hands of the whore of Babylon, even Satan. We can be the masters.",
  "It gives us power to see things that we would not see before. Helps us see through new lenses.",
  "The Power of Christ helps us grow and learn and become a better person.",
  "The light of Christ purifies, allows you to learn.",
  "Light=enlightens us.",
  "Light gives life and fills spaces.",
  "Finds a way out of your struggles.",
  "It gives us a reason to be here, it gives us morals, peace, and joy.",
  "Gives me joy in life.",
  "It gives me hope and something to work toward in my everyday life.",
  "Gives you purpose to do good in your life.",
  "God’s power and light is found in everything surrounding us.",
  "It gives me all things.",
  "It gives us understanding and removes emptiness.",
  "It shines on us and gives us the opportunity to be with him and get rid of the darkness.",
  "Giveth life to all things.",
  "Governs all things.",
  "Enables swift comprehension.",
  "Helps us see our mistakes we make and how we can fix them.",
  "Shows all. Understands all. Powers everything. GIves life and purpose.",
  "It helps people who are spiritually lost or in need of help.",
  "Christ’s light can bring you to understanding. It can bring you peace in your mind.",
  "It helps me overcome the natural man inside me. Brings me true and everlasting joy.",
  "Turn you to Him even in your darkest days.",
  "It can help you find true happiness and love. It can also help you be satisfied.",
  "It can lead me home to Him.",
  "Helps me to feel safe.",
  "Christ’s light can carry me closer to Heavenly Father.",
  "Molds me into something better. He protects me from harm and comforts me through tough times.",
  "Christ’s light can be a flotation device in the sea of darkness. He saves!",
  "He can help me with the dark in me.",
  "It can guide me down the right and righteous path.",
  "His light can make me remember to do the right thing.",
  "He can help me.",
  "It guides me through the darkness.",
  "Christ's light can help me feel alive, dispelling the clouds of darkness and infusing my soul with joy.",
  "It can bring peace, but it can also cast away the lies.",
  "It can bring wisdom, knowledge, and revelation.",
  "Christ’s light can take out the darkness in my life and replace it with good.",
  "It will dispel the darkness of despair.",
  "It can help me learn and know how to serve God better.",
  "Heals me!",
  "Guides me through the tough times.",
  "Shows me the way, what decisions to make.",
  "Helps me to share his light to others.",
  "Keeps me out of the dark and comforts me.",
  "It can bring me great joy as it dispels darkness.",
  "It can save me from the darkness of the adversary.",
  "Christ’s light can make your doubts and fear disappear and be replaced with courage.",
  "Offers clarity and guidance.",
  "Brings joy into my soul.",
  "Shows me a new perspective on life. Can give me a chance to become the best version of myself through Him.",
  "The light of Christ can bring me joy.",
  "Lights up your mind, makes you feel joy.",
  "Light casts away the darkness from inside us.",
  "It can make us believe. When we are in doubt, it can help us exercise the faith we need.",
  "It can light up our mind and bring us joy, true joy, and thankfulness.",
  "Find people who can be your lights. Also know He is your Light. I can take courage in the light knowing that the light of Christ will prevail.",
  "Find people who can bring you solace. And gather the confidence to rebuild and stand up on your own.",
  "It is okay to ask for help and get the support you need.",
  "Reach out, ask for help from those around you. The Lord is watching over you.",
  "Ask for help and He will deliver it unto us and fill us with hope and joy.",
  "When things get difficult, that’s when we should turn to the Lord the most.",
  "Look for Christ’s light. It will help bring us joy and guidance.",
  "Give yourself to Christ and God. The devil cannot cast away Jesus.",
  "Jesus wants me to ask questions, and He wants to bring light to answer my questions.",
  "Patiently do what is right and repent often. Try to stand in holy places and make your mind holy.",
  "I can pray for comfort and that everything will be ok.",
  "Do the small and simple things. Be patient and stay on the Rock of the Redeemer and He will guide you and save you.",
  "Turn towards Christ in prayer, thought, and action. Communicate struggles with divinely appointed leaders with an open heart and mind.",
  "Learning to seek for and heed the Lord’s guidance will bless us with the knowledge of how to continue down his path. Seek comfort in God as well as others. Talk to others and don’t go silent. I can pray for comfort and knowledge of the truth.",
  "Keep fighting. What you can’t see is that your light is faring so much better than the dark is in this fight.",
  "Friends. Friends have helped me overcome layers of darkness. I have filled as much of their lives with gratitude because they helped me in times of darkness. Although that gratitude will never feel enough.",
  "Fall back to the primary answers. These small things can help bring light back. Talk to your bishop and family.",
  "Allow His light to touch me.",
  "Stay close to the Lord and search for His light.",
  "Turn to Christ. That’s gonna look super different for each and every one of us. For me it’s running and playing soccer, listening to good music, and praying.",
  "Trust in Christ.",
  "Ask for help. Ask questions, ask for guidance. If you turn to Christ, He will help you. You must trust Him.",
  "Push forward anyway! Develop your relationship with God by keeping your covenants and asking Him questions! Be PATIENT, and TURN TO CHRIST. And TRUST that His light will reach you.",
  "Pray, read your scriptures and your patriarchal bless, talk with your parents and/or siblings and friends, visit the temple, talk with the bishop, remember seminary, and lessons that you learned.",
  "Pray!",
  "Go to trusted loved ones and if you don’t have one, go to church.",
  "Turn to Jesus who can turn my darkness into light. He can make my sorrows into joy if I am patient.",
  "You can protect yourself from the darkness by making your own spiritual castle! Make your defenses by girding up the armour of God, wielding the scriptures, get reinforcements from family, friends, and Jesus Christ. Be fortified!",
  "I can stop what I’m doing and kneel down and pray for help and for God to strengthen me. I can turn to loved ones and they will help me through whatever I’m going through. I can turn to the scriptures and read a few verses.",
  "You can ask your parents, bishop, or closed loved ones for a blessing if you want/need it.",
  "Pray, read your scriptures, and hang out with good friends.",
  "I can talk about with someone I trust like Heavenly Father.",
  "Just keep swimming. Maybe sing while you’re at it or do something to rejoice and smile.",
  "Sometimes our vision is clouded and we can’t hear Him or feel Him.",
  "Sometimes we have polluted our connection with Christ, and even the smallest degree of clarity helps!",
  "At times, our connection to Christ, the Spirit, etc. can become polluted and out connections can weaken.",
  "If we don’t allow Christ’s light to reach us, we can’t expect it to make an impact on us.",
  "We can find Christ in different areas in the world, and God will always be waiting for you to come back.",
  "We have lots of things that cloud and pollute our views and abilities to see Christ. If we an clear them, we are able to see His majesty.",
  "We can see Him better the closer we are to Him.",
  "Sin is the pollution to Christ.",
  "I want to clear out the things that block me from seeing the hand of Jesus Christ in my life.",
  "God clears things up for us. He allows us to see more than we would normally.",
  "We need faith.",
  "Too often I think we forget what eternity means, that Christ is ALWAYS there. The only thing darkness can take away is sight, but faith without seeing is where we deepen our relationship with Christ.",
  "The world pollutes our view with lights. They attract us away as an example: 1.3 million baby sea turtles are killed each year due to city lights. They follow the brighter lights other than the small glow of the moon. The moon is the still small voice guiding us to Home.",
  "He’s always there, sometimes you just can’t see him.",
  "If mind=clear, prayer=enlightened.",
  "Sometimes we need to leave the dirt to find something clean.",
  "We have to declutter and clean our life and mind to experience the fulness of Christ.",
  "We are all His creations!",
  "Sometimes we are in a position where we are clouded and pollution is stopping us from connecting with God. We need to realize and remove ourselves from that.",
  "We need to surround ourselves with things that don’t pollute our life so we can see the trueness in life.",
  "When we feel surrounded by darkness and temptation we can’t feel Christ as easily, but He’s still there.",
  "Even though we can’t feel Him or see Him, He was always and is always there.",
  "If we let the light of Christ be blocked out, we will miss amazing things.",
  "He will always have a plan for us and watch over us.",
  "Christ is always there for us, but sometimes we prioritize things over Him that block some of His light from reaching us. We must put Christ first to receive the fulness of His light.",
  "False lights in our lives might direct or gaze to “Telestial Glory” while mistakenly blocking the view of “Celestial Majesty”.",
  "We can live with appreciation that no matter where we are on Earth, God and His beautiful galaxies will be there.",
  "The light of Christ is always there. I need to remove the barriers in my life that prevent me from seeing it or feeling it.",
  "Wealth and pride blind you to see the love of Christ.",
  "Christ is always there even when we can’t see Him, and our actions decide if we can feel His light.",
  "Sometimes we don’t always see the light of Christ in our lives, but it is there. Often we have to put ourselves in better places to feel and see the light of Christ.",
  "We may not always see Christ, but if we strive to and put ourselves in the right position, we can feel and see His love more prominently in our lives. He is always there even if it may be hard to see or feel Him.",
  "We cannot always see Christ, but He is there for us.",

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