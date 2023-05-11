import subprocess
from time import time
import signal
# from time import sleep


class Whisper:
    def __init__(self):
        self.process = None

    def lunch(self):
        self.process = subprocess.Popen("./stream -m models/ggml-model-whisper-base.bin --step 10000 --length 25000 -t 4 --language fr -ac 512 -l fr -f ../../text_live.txt",
                                        shell=True, cwd=r'/home/valentin/Desktop/MemoRoom/modules/Whisper_and_NLU/whisper_and_controller/whisper.cpp')

    def stop(self):
        print('start the stop')
        self.process.kill()
        self.process.terminate()
        try:
            self.process.send_signal(signal.SIGINT)
        except:
            pass


# MyWhisper = Whisper()
# firstTime = True
# while True:
#     if firstTime:
#         MyWhisper.lunch()
#         # StartedTime = time()
#         firstTime = False
#     # if time()-StartedTime > 10:
#     #     MyWhisper.stop()
