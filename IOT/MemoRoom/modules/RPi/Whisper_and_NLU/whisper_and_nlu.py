import subprocess
from whisper_and_controller.whisper_main import Whisper
from NLU.nlu import Nlu
from time import time, sleep


class Manager_NLU_Whisper:

    def __init__(self):
        self.startTime = time()
        self.transcription = Whisper()
        print("whisper started")
        self.traductor = Nlu()
        # self.traductor.fit()
        print("NLU fit ended")
        self.traducted = False
        self.priseRDV = False
        self.text = ""
        self.file = 'Whisper_and_NLU/text_live.txt'
        print("init")


# with open('./TTS_and_Whisper/text_live.txt') as f:
#                 lines = f.readlines()
#                 print(lines)
#                 for line in lines:
#                     text = text + line
#                 print(text)

    def start_recording(self):
        # supposé marche si j'arrive a shutdown le terminal
        self.transcription.lunch()
        #
        #
        # Subtitution :
        # f = open(self.file, "w+")
        # f.write(
        #     # "Je souhaite prendre un rendez-vous chez le médecin pour le 20 juin à 15h"
        #     # "programme moi un diner pour demain 14h30."
        #     # "Je veux prendre un rendez-vous d'affaires avec le responsable des ventes le 28 juin à 14h00 au bureau de l'entreprise."
        #     "Je voudrais prendre un rendez-vous médical avec le Dr. Martin le 4 juillet prochain."
        # )
        # f.close()

    def stop_recording(self):
        # supposé marche si j'arrive a shutdown le terminal
        self.transcription.stop()
        
        pass

    def start_understanding(self):
        self.actualTime = time()
        if (self.actualTime-self.startTime > 30):
            if not self.traducted:
                # self.transcription.stop()
                data = self.traductor.run(self.file)
                self.traducted = True
        else:
            if data:
                pass


newStartTime = None
stopped = False
neverplayed = True
myTest = Manager_NLU_Whisper()

while True:
    actualTime = time()
    if neverplayed:
        
        myTest.start_recording()

        startTime = time()
        neverplayed = False
        print("end of first loop")
    else:
        if (actualTime-startTime > 60):
            if not stopped:
                myTest.stop_recording()
                newStartTime = time()
                stopped = True
            if (time()-newStartTime > 10):
                myTest.start_understanding()
