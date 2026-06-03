import wave
import struct
from pathlib import Path

# Paths
BASE_DIR = Path(__file__).resolve().parent.parent
OUTPUT_FILE = BASE_DIR / "public" / "assets" / "silence.wav"

def generate_silence():
    print("Generating silent audio file...")
    # 5 seconds of silence at 22050Hz, 16-bit mono
    sample_rate = 22050
    duration = 5
    num_samples = sample_rate * duration
    
    # Ensure output folder exists
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    with wave.open(str(OUTPUT_FILE), 'wb') as wav_file:
        # Channels: 1 (mono), Sample width: 2 bytes (16-bit), Framerate: 22050Hz
        wav_file.setparams((1, 2, sample_rate, num_samples, 'NONE', 'not compressed'))
        
        # Write silent frames (zeros)
        for _ in range(num_samples):
            wav_file.writeframes(struct.pack('h', 0))
            
    print(f"Silent audio file successfully generated at {OUTPUT_FILE}")

if __name__ == '__main__':
    generate_silence()
