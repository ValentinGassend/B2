from gtts import gTTS
from pygame import mixer
import subprocess
from pydub import AudioSegment
from pydub.playback import play


class TTS:
    def __init__(self):
        mixer.init()
        subprocess.run("sudo modprobe snd_bcm2835", shell=True)

    def talk(self, content):
        if not isinstance(content, str):
            content = str(content)

        # Création de l'objet gTTS avec la langue française et le texte à synthétiser
        tts = gTTS(text=content, lang='fr')

        # Sauvegarde du texte synthétisé dans un fichier audio
        audio_file = "output.mp3"
        tts.save(audio_file)

        # Chargement du fichier audio avec pydub
        audio = AudioSegment.from_file(audio_file, format="mp3")

        # Ajustement de la vitesse de lecture
        audio = audio.speedup(playback_speed=1.15)

        # Lecture de l'audio avec pydub
        play(audio)

    def sound(self, file):
        if not type(file) == type(""):
            file = str(file)
        subprocess.Popen("aplay '"+file+"'", shell=True)

    def kill(self):
        mixer.music.stop()


# mytts = TTS()
# mytts.talk(
#     "J'adore le dévelopement informatique de bas niveau et la programmation orienté objet")

# mytts.talk("coucou les copains")
