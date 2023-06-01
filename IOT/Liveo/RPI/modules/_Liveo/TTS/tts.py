from gtts import gTTS
from pygame import mixer


class TTS:
    def __init__(self):
        mixer.init()

    def talk(self, content):
        if not isinstance(content, str):
            content = str(content)

        tts = gTTS(content, lang='fr')
        audio_file = "output.mp3"
        tts.save(audio_file)

        mixer.music.load(audio_file)
        mixer.music.play()

    def sound(self, file):
        # Playback of audio files is not implemented in this version
        raise NotImplementedError(
            "The 'sound' function is not implemented with the gTTS library.")

    def kill(self):
        mixer.music.stop()


# Create an instance of the TTS class
tts = TTS()

# Use the talk() method to convert text to speech
text = "Bonjour, comment ça va ?"
tts.talk(text)

# Wait for the speech to finish
while mixer.music.get_busy():
    pass

# Clean up resources
tts.kill()
