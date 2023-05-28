import subprocess
from time import time
import signal
import os
# from time import sleep


class Whisper:
    def __init__(self):
        self.process = None
        self.pid = None

    def lunch(self):
        self.process = subprocess.Popen("./stream -m models/ggml-tiny.bin --step 0 --length 3000 -t 4 --language fr -vth 0.6",
                                        shell=True, cwd=r'/home/valentin/Desktop/MemoRoom/modules/Whisper_and_NLU/whisper_and_controller/whisper.cpp',start_new_session=True)
        self.pid = self.process.pid
    def stop(self):
        print('\nstart the stop')
        os.killpg(os.getpgid(self.pid), signal.SIGTERM)
        # os.killpg(os.getpid(), signal.SIGTERM)
        self.process.terminate()
        print("stopped")


# MyWhisper = Whisper()
# firstTime = True
# stopped = False
# while True:
#     if firstTime:
#         MyWhisper.lunch()
#         StartedTime = time()
#         firstTime = False
#     if time()-StartedTime > 60:
#         if not stopped:
#             MyWhisper.stop()
#             stopped = True
# #         else:
#             print("stopped")
