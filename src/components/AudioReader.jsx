import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Volume2, ChevronDown, Sliders, AlignLeft, Sparkles } from 'lucide-react';

const stripMarkdown = (markdown) => {
  if (!markdown) return "";
  let text = markdown;

  // 1. Remove code blocks
  text = text.replace(/```[\s\S]*?```/g, "");

  // 2. Remove inline code
  text = text.replace(/`([^`]+)`/g, "$1");

  // 3. Remove headers
  text = text.replace(/^#+\s+(.*)$/gm, "$1");

  // 4. Remove bold/italics
  text = text.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, "$1");

  // 5. Remove links
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // 6. Remove HTML tags
  text = text.replace(/<[^>]*>/g, "");

  // 7. Remove tables
  text = text.replace(/^\|.*\|$/gm, "");

  // 8. Clean up extra spaces/newlines
  text = text.replace(/\n+/g, " ");
  text = text.replace(/\s+/g, " ");

  return text.trim();
};

const getChunks = (text) => {
  const cleaned = stripMarkdown(text);
  if (!cleaned) return [];

  // Split by sentence delimiters (. ? !) followed by whitespace, maintaining the punctuation
  const sentences = cleaned.split(/(?<=[.?!])\s+/);
  const chunks = [];
  let currentChunk = "";

  for (const sentence of sentences) {
    if ((currentChunk + sentence).length > 200) {
      if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
      }
      currentChunk = sentence;
    } else {
      currentChunk += (currentChunk ? " " : "") + sentence;
    }
  }
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
};

const sortVoices = (voiceList) => {
  return [...voiceList].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    
    // 1. Prioritize natural / neural voices
    const isNaturalA = nameA.includes('natural') || nameA.includes('neural');
    const isNaturalB = nameB.includes('natural') || nameB.includes('neural');
    if (isNaturalA && !isNaturalB) return -1;
    if (!isNaturalA && isNaturalB) return 1;
    
    // 2. Prioritize standard high-quality systems (Google, Microsoft, Siri)
    const isHighQualityA = nameA.includes('google') || nameA.includes('microsoft') || nameA.includes('siri');
    const isHighQualityB = nameB.includes('google') || nameB.includes('microsoft') || nameB.includes('siri');
    if (isHighQualityA && !isHighQualityB) return -1;
    if (!isHighQualityA && isHighQualityB) return 1;
    
    return 0;
  });
};

const AudioReader = ({ content, title, subject }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(1.0);
  const [voices, setVoices] = useState([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState('');
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);

  const chunks = React.useMemo(() => getChunks(content), [content]);

  // Use refs to communicate latest states to speech synthesis callbacks
  const rateRef = useRef(rate);
  const voiceRef = useRef(null);
  const playingRef = useRef(isPlaying);
  const pausedRef = useRef(isPaused);
  const currentChunkIndexRef = useRef(currentChunkIndex);
  const silentAudioRef = useRef(null);
  const lyricsContainerRef = useRef(null);

  // References for Media Session action handlers to prevent stale closure states
  const playPauseRef = useRef(null);
  const stopRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    rateRef.current = rate;
  }, [rate]);

  useEffect(() => {
    playingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    currentChunkIndexRef.current = currentChunkIndex;
  }, [currentChunkIndex]);

  // Scroll active lyrics sentence into center of view (Spotify style)
  useEffect(() => {
    if (showLyrics && lyricsContainerRef.current) {
      const activeEl = lyricsContainerRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentChunkIndex, showLyrics]);

  // Initialize loop silent audio wakelock to maintain audio focus in PWA background
  useEffect(() => {
    const base = import.meta.env.BASE_URL || '/';
    const audio = new Audio(`${base}assets/silence.wav`);
    audio.loop = true;
    silentAudioRef.current = audio;

    return () => {
      if (silentAudioRef.current) {
        silentAudioRef.current.pause();
      }
    };
  }, []);

  // Sync Media Session metadata
  useEffect(() => {
    if ('mediaSession' in navigator && title && subject) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: title,
        artist: '2AM Notes',
        album: subject,
        artwork: [
          { src: 'icon.svg', sizes: '512x512', type: 'image/svg+xml' }
        ]
      });
    }
  }, [title, subject]);

  // Sync Media Session playback state
  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = isPlaying ? (isPaused ? 'paused' : 'playing') : 'none';
    }
  }, [isPlaying, isPaused]);

  // Load and sort browser voices
  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      const englishVoices = allVoices.filter(v => v.lang.toLowerCase().startsWith('en'));
      const list = englishVoices.length > 0 ? englishVoices : allVoices;
      
      // Sort voices to move high-quality natural/neural/Google/Microsoft/Siri voices to the top
      const sorted = sortVoices(list);
      setVoices(sorted);
      
      if (sorted.length > 0 && !selectedVoiceName) {
        const defaultVoice = sorted.find(v => v.default) || sorted[0];
        setSelectedVoiceName(defaultVoice.name);
        voiceRef.current = defaultVoice;
      }
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      window.speechSynthesis.cancel();
    };
  }, []);

  // Queue all remaining utterances in C++ SpeechSynthesis queue. 
  // This native batch queue continues executing even if browser JS execution gets suspended when locking phone.
  const speakAll = (startIndex) => {
    window.speechSynthesis.cancel();

    if (startIndex >= chunks.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentChunkIndex(0);
      currentChunkIndexRef.current = 0;
      if (silentAudioRef.current) {
        silentAudioRef.current.pause();
      }
      return;
    }

    if (silentAudioRef.current) {
      silentAudioRef.current.play().catch(err => console.log("Silent audio play error:", err));
    }

    for (let i = startIndex; i < chunks.length; i++) {
      const utterance = new SpeechSynthesisUtterance(chunks[i]);
      utterance.rate = rateRef.current;
      
      if (voiceRef.current) {
        utterance.voice = voiceRef.current;
      }

      utterance.onstart = () => {
        setCurrentChunkIndex(i);
        currentChunkIndexRef.current = i;
      };

      if (i === chunks.length - 1) {
        utterance.onend = () => {
          // Playback finished completely
          setIsPlaying(false);
          setIsPaused(false);
          setCurrentChunkIndex(0);
          currentChunkIndexRef.current = 0;
          if (silentAudioRef.current) {
            silentAudioRef.current.pause();
          }
        };
      }

      utterance.onerror = (e) => {
        if (e.error !== 'interrupted') {
          console.error("Speech synthesis error on utterance:", i, e);
        }
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const handlePlayPause = () => {
    if (chunks.length === 0) return;

    if (isPlaying) {
      if (isPaused) {
        setIsPaused(false);
        pausedRef.current = false;
        speakAll(currentChunkIndex);
      } else {
        setIsPaused(true);
        pausedRef.current = true;
        if (silentAudioRef.current) {
          silentAudioRef.current.pause();
        }
        window.speechSynthesis.cancel();
      }
    } else {
      setIsPlaying(true);
      setIsPaused(false);
      playingRef.current = true;
      pausedRef.current = false;
      speakAll(currentChunkIndex);
    }
  };

  const handleStop = () => {
    setIsPlaying(false);
    setIsPaused(false);
    playingRef.current = false;
    pausedRef.current = false;
    setCurrentChunkIndex(0);
    currentChunkIndexRef.current = 0;
    if (silentAudioRef.current) {
      silentAudioRef.current.pause();
    }
    window.speechSynthesis.cancel();
  };

  const handleRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    setRate(newRate);
    rateRef.current = newRate;

    if (isPlaying && !isPaused) {
      speakAll(currentChunkIndexRef.current);
    }
  };

  const handleVoiceChange = (e) => {
    const voiceName = e.target.value;
    setSelectedVoiceName(voiceName);
    const voiceObj = voices.find(v => v.name === voiceName);
    voiceRef.current = voiceObj || null;

    if (isPlaying && !isPaused) {
      speakAll(currentChunkIndexRef.current);
    }
  };

  const handleJumpToChunk = (index) => {
    setCurrentChunkIndex(index);
    currentChunkIndexRef.current = index;
    if (isPlaying && !isPaused) {
      speakAll(index);
    }
  };

  // Sync action trigger refs
  useEffect(() => {
    playPauseRef.current = handlePlayPause;
    stopRef.current = handleStop;
  }, [currentChunkIndex, isPlaying, isPaused, rate, selectedVoiceName, voices, chunks]);

  useEffect(() => {
    nextRef.current = () => {
      const nextIdx = currentChunkIndexRef.current + 1;
      if (nextIdx < chunks.length) {
        handleJumpToChunk(nextIdx);
      }
    };
    prevRef.current = () => {
      const prevIdx = currentChunkIndexRef.current - 1;
      if (prevIdx >= 0) {
        handleJumpToChunk(prevIdx);
      }
    };
  }, [chunks]);

  // Hook up Media Session action event handlers
  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => {
        if (playPauseRef.current) playPauseRef.current();
      });
      navigator.mediaSession.setActionHandler('pause', () => {
        if (playPauseRef.current) playPauseRef.current();
      });
      navigator.mediaSession.setActionHandler('stop', () => {
        if (stopRef.current) stopRef.current();
      });
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        if (prevRef.current) prevRef.current();
      });
      navigator.mediaSession.setActionHandler('nexttrack', () => {
        if (nextRef.current) nextRef.current();
      });
    }

    return () => {
      if ('mediaSession' in navigator) {
        navigator.mediaSession.setActionHandler('play', null);
        navigator.mediaSession.setActionHandler('pause', null);
        navigator.mediaSession.setActionHandler('stop', null);
        navigator.mediaSession.setActionHandler('previoustrack', null);
        navigator.mediaSession.setActionHandler('nexttrack', null);
      }
    };
  }, []);

  const speedOptions = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.5, 3.0];

  if (chunks.length === 0) return null;

  return (
    <div className="mb-8 p-4 rounded-2xl border bg-card/30 backdrop-blur-md shadow-sm relative overflow-hidden transition-theme">
      <style>{`
        @keyframes wave-pulse {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1.0); }
        }
        .animate-wave-1 { animation: wave-pulse 1s ease-in-out infinite; transform-origin: bottom; }
        .animate-wave-2 { animation: wave-pulse 1.2s ease-in-out infinite 0.2s; transform-origin: bottom; }
        .animate-wave-3 { animation: wave-pulse 0.8s ease-in-out infinite 0.4s; transform-origin: bottom; }
        .animate-wave-4 { animation: wave-pulse 1.1s ease-in-out infinite 0.1s; transform-origin: bottom; }
        .lyrics-scrollbar::-webkit-scrollbar { width: 4px; }
        .lyrics-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .lyrics-scrollbar::-webkit-scrollbar-thumb { background: hsl(var(--border)); border-radius: 9999px; }
      `}</style>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayPause}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90 shadow-sm transition-all active:scale-95 cursor-pointer"
            title={isPlaying && !isPaused ? "Pause" : "Play"}
          >
            {isPlaying && !isPaused ? <Pause size={18} /> : <Play size={18} />}
          </button>
          
          <button
            onClick={handleStop}
            disabled={!isPlaying}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground hover:bg-muted transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            title="Stop"
          >
            <Square size={16} />
          </button>

          <div className="flex items-center gap-2 text-sm ml-2">
            <Volume2 size={16} className={isPlaying && !isPaused ? "text-primary animate-pulse" : "text-muted-foreground"} />
            <span className="font-bold text-xs uppercase tracking-wider text-muted-foreground">
              {isPlaying ? (isPaused ? "PAUSED" : "READING") : "LISTEN NOTE"}
            </span>
          </div>

          {isPlaying && !isPaused && (
            <div className="flex items-end gap-0.5 h-4 w-6 px-1">
              <div className="w-0.5 h-full bg-primary rounded-full animate-wave-1"></div>
              <div className="w-0.5 h-full bg-primary rounded-full animate-wave-2"></div>
              <div className="w-0.5 h-full bg-primary rounded-full animate-wave-3"></div>
              <div className="w-0.5 h-full bg-primary rounded-full animate-wave-4"></div>
            </div>
          )}
        </div>

        {/* Speed Controls, Voice Changer & Lyrics Toggles */}
        <div className="flex items-center justify-end gap-2.5 flex-wrap">
          {/* Follow Along Toggle */}
          <button
            onClick={() => setShowLyrics(!showLyrics)}
            className={`p-2 border rounded-xl flex items-center gap-1.5 text-xs font-bold bg-background/50 hover:bg-muted transition-all cursor-pointer ${showLyrics ? 'border-primary/50 text-primary bg-primary/5' : 'text-muted-foreground'}`}
          >
            <AlignLeft size={14} />
            <span>Follow Along</span>
          </button>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-2 border rounded-xl flex items-center gap-1.5 text-xs font-bold bg-background/50 hover:bg-muted transition-all cursor-pointer ${showSettings ? 'border-primary/50 text-primary bg-primary/5' : 'text-muted-foreground'}`}
          >
            <Sliders size={14} />
            <span>Voice Options</span>
            <ChevronDown size={14} className={`transition-transform duration-200 ${showSettings ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Voice Settings Panel */}
      {showSettings && (
        <div className="mt-4 pt-4 border-t grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
              Reading Speed
            </label>
            <div className="relative">
              <select
                value={rate}
                onChange={handleRateChange}
                className="w-full text-xs font-medium border bg-background rounded-xl p-2.5 outline-none appearance-none focus:border-primary/50"
              >
                {speedOptions.map(option => (
                  <option key={option} value={option}>
                    {option === 1.0 ? "Normal (1.0x)" : `${option}x`}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3.5 text-muted-foreground/60 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block flex items-center gap-1">
              Voice Changer
              <Sparkles size={10} className="text-yellow-500 animate-pulse" />
            </label>
            <div className="relative">
              <select
                value={selectedVoiceName}
                onChange={handleVoiceChange}
                className="w-full text-xs font-medium border bg-background rounded-xl p-2.5 outline-none appearance-none focus:border-primary/50"
              >
                {voices.map(voice => {
                  const isPremium = voice.name.toLowerCase().includes('natural') || 
                                    voice.name.toLowerCase().includes('neural') ||
                                    voice.name.toLowerCase().includes('siri') ||
                                    voice.name.toLowerCase().includes('google') ||
                                    voice.name.toLowerCase().includes('microsoft');
                  return (
                    <option key={voice.name} value={voice.name}>
                      {isPremium ? "⭐ " : ""}{voice.name} ({voice.lang})
                    </option>
                  );
                })}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3.5 text-muted-foreground/60 pointer-events-none" />
            </div>
          </div>
        </div>
      )}

      {/* Spotify-style Lyrics Viewport */}
      {showLyrics && (
        <div className="mt-4 pt-4 border-t flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest px-1">
            <span>FOLLOW ALONG SYNC (SPOTIFY STYLE)</span>
            <span>TAP ANY LINE TO JUMP</span>
          </div>
          
          <div 
            ref={lyricsContainerRef}
            className="max-h-56 overflow-y-auto space-y-4 py-20 px-4 rounded-xl bg-background/40 border border-border/60 lyrics-scrollbar relative"
          >
            {chunks.map((chunk, idx) => {
              const isActive = idx === currentChunkIndex;
              return (
                <p
                  key={idx}
                  data-active={isActive}
                  onClick={() => handleJumpToChunk(idx)}
                  className={`text-sm font-semibold transition-all duration-300 cursor-pointer hover:text-foreground/90 py-1.5 ${isActive ? 'text-primary text-base scale-[1.03] font-black pl-3 border-l-2 border-primary' : 'text-muted-foreground/45'}`}
                >
                  {chunk}
                </p>
              );
            })}
          </div>
        </div>
      )}

      {/* Playback Progress Indicator (Shown only when not in lyrics mode, to keep UI clean) */}
      {isPlaying && !showLyrics && (
        <div className="mt-3 pt-3 border-t flex flex-col gap-1.5 animate-in fade-in duration-300">
          <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            <span>Reading progress</span>
            <span>{currentChunkIndex + 1} / {chunks.length} sentences</span>
          </div>
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentChunkIndex + 1) / chunks.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-muted-foreground/80 italic line-clamp-2 mt-1">
            "{chunks[currentChunkIndex]}"
          </p>
        </div>
      )}
    </div>
  );
};

export default AudioReader;
