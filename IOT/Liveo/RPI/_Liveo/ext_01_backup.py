from TTS.tts import TTS
# import subprocess
myTTS = TTS()
# from LED_Strip.led import LedMode
# from rpi_ws281x import Color
# red = Color(255,0,0,1)
# blue = Color(164,193,255,0)
# green = Color(102,255,102,255)
# purple = Color(153,51,255,100)
# Ledmanager = LedMode([blue])

# Ledmanager.ledOff()
myTTS.sound("Hub/TTS/Digital-bell.wav")
# while True:
#     # Ledmanager.fade()
#     pass
# myTTS.talk("Je récapitule, vous avez un rendez-vous chez votre médecin traitant le mardi 16 juin à 10:30 et vous ne devez pas oublié votre carte vitale. Je veillerais à vous le rappeler 30 minutes avant, soit à 10 heure.")
# myTTS.talk("Je veillerais à vous le rappeler 30 minutes avant, soit à 10 heure. Est-ce que ces informations sont correctes ?")
