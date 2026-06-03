import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Volume2, ChevronDown, Sliders } from 'lucide-react';

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

const AudioReader = ({ content }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(1.0);
  const [voices, setVoices] = useState([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState('');
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  const chunks = React.useMemo(() => getChunks(content), [content]);

  // Use refs to communicate latest states to speech synthesis callbacks
  const rateRef = useRef(rate);
  const voiceRef = useRef(null);
  const playingRef = useRef(isPlaying);
  const pausedRef = useRef(isPaused);

  useEffect(() => {
    rateRef.current = rate;
  }, [rate]);

  useEffect(() => {
    playingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  // Load browser voices
  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      // Filter for English voices by default, but fallback to all if none exist
      const englishVoices = allVoices.filter(v => v.lang.toLowerCase().startsWith('en'));
      const list = englishVoices.length > 0 ? englishVoices : allVoices;
      setVoices(list);
      
      // Default to standard system voice or first English voice
      if (list.length > 0 && !selectedVoiceName) {
        const defaultVoice = list.find(v => v.default) || list[0];
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

  const speakChunk = (index, chunkList) => {
    if (index >= chunkList.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentChunkIndex(0);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(chunkList[index]);
    utterance.rate = rateRef.current;
    
    if (voiceRef.current) {
      utterance.voice = voiceRef.current;
    }

    utterance.onstart = () => {
      setCurrentChunkIndex(index);
    };

    utterance.onend = () => {
      // Speak next chunk if playing is still active and we are not paused
      if (playingRef.current && !pausedRef.current) {
        speakChunk(index + 1, chunkList);
      }
    };

    utterance.onerror = (e) => {
      // Don't treat manual interrupts as failure
      if (e.error !== 'interrupted') {
        console.error("Speech synthesis error:", e);
        setIsPlaying(false);
        setIsPaused(false);
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePlayPause = () => {
    if (chunks.length === 0) return;

    if (isPlaying) {
      if (isPaused) {
        // Resume
        setIsPaused(false);
        pausedRef.current = false;
        speakChunk(currentChunkIndex, chunks);
      } else {
        // Pause
        setIsPaused(true);
        pausedRef.current = true;
        window.speechSynthesis.cancel();
      }
    } else {
      // Start fresh
      setIsPlaying(true);
      setIsPaused(false);
      playingRef.current = true;
      pausedRef.current = false;
      speakChunk(currentChunkIndex, chunks);
    }
  };

  const handleStop = () => {
    setIsPlaying(false);
    setIsPaused(false);
    playingRef.current = false;
    pausedRef.current = false;
    setCurrentChunkIndex(0);
    window.speechSynthesis.cancel();
  };

  const handleRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    setRate(newRate);
    rateRef.current = newRate;

    if (isPlaying && !isPaused) {
      // Dynamic speed update by restarting current chunk
      speakChunk(currentChunkIndex, chunks);
    }
  };

  const handleVoiceChange = (e) => {
    const voiceName = e.target.value;
    setSelectedVoiceName(voiceName);
    const voiceObj = voices.find(v => v.name === voiceName);
    voiceRef.current = voiceObj || null;

    if (isPlaying && !isPaused) {
      // Dynamic voice changer update by restarting current chunk
      speakChunk(currentChunkIndex, chunks);
    }
  };

  const speedOptions = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.5, 3.0];

  if (chunks.length === 0) return null;

  return (
    <div className="mb-8 p-4 rounded-2xl border bg-card/30 backdrop-blur-md shadow-sm relative overflow-hidden transition-theme">
      {/* Visualizer and inline styles for audio animations */}
      <style>{`
        @keyframes wave-pulse {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1.0); }
        }
        .animate-wave-1 { animation: wave-pulse 1s ease-in-out infinite; transform-origin: bottom; }
        .animate-wave-2 { animation: wave-pulse 1.2s ease-in-out infinite 0.2s; transform-origin: bottom; }
        .animate-wave-3 { animation: wave-pulse 0.8s ease-in-out infinite 0.4s; transform-origin: bottom; }
        .animate-wave-4 { animation: wave-pulse 1.1s ease-in-out infinite 0.1s; transform-origin: bottom; }
      `}</style>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Playback Controls & Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayPause}
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90 shadow-sm transition-all active:scale-95 cursor-pointer`}
            title={isPlaying && !isPaused ? "Pause" : "Play"}
          >
            {isPlaying && !isPaused ? <Pause size={18} /> : <Play size={18} />}
          </button>
          
          <button
            onClick={handleStop}
            disabled={!isPlaying}
            className={`flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground hover:bg-muted transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer`}
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

          {/* Dynamic visualizer bars when audio is playing */}
          {isPlaying && !isPaused && (
            <div className="flex items-end gap-0.5 h-4 w-6 px-1">
              <div className="w-0.5 h-full bg-primary rounded-full animate-wave-1"></div>
              <div className="w-0.5 h-full bg-primary rounded-full animate-wave-2"></div>
              <div className="w-0.5 h-full bg-primary rounded-full animate-wave-3"></div>
              <div className="w-0.5 h-full bg-primary rounded-full animate-wave-4"></div>
            </div>
          )}
        </div>

        {/* Speed Controls & Voice Changer */}
        <div className="flex items-center justify-end gap-3 flex-wrap">
          {/* Settings Toggle (Dropdown view) */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-2 border rounded-xl flex items-center gap-1.5 text-xs font-bold bg-background/50 hover:bg-muted transition-all cursor-pointer ${showSettings ? 'border-primary/50 text-primary' : 'text-muted-foreground'}`}
          >
            <Sliders size={14} />
            <span>Voice Options</span>
            <ChevronDown size={14} className={`transition-transform duration-200 ${showSettings ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="mt-4 pt-4 border-t grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Speed Selector */}
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

          {/* Voice Changer (System voice dropdown list) */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
              Voice Changer
            </label>
            <div className="relative">
              <select
                value={selectedVoiceName}
                onChange={handleVoiceChange}
                className="w-full text-xs font-medium border bg-background rounded-xl p-2.5 outline-none appearance-none focus:border-primary/50"
              >
                {voices.map(voice => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name} ({voice.lang})
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3.5 text-muted-foreground/60 pointer-events-none" />
            </div>
          </div>
        </div>
      )}

      {/* Playback Progress Indicator */}
      {isPlaying && (
        <div className="mt-3 pt-3 border-t flex flex-col gap-1.5 animate-in fade-in duration-300">
          <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            <span>Reading progress</span>
            <span>{currentChunkIndex + 1} / {chunks.length} sentences</span>
          </div>
          {/* Progress bar */}
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentChunkIndex + 1) / chunks.length) * 100}%` }}
            ></div>
          </div>
          {/* Live read out preview text */}
          <p className="text-xs text-muted-foreground/80 italic line-clamp-2 mt-1">
            "{chunks[currentChunkIndex]}"
          </p>
        </div>
      )}
    </div>
  );
};

export default AudioReader;
