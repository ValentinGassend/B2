import subprocess
from camera import *
from time import sleep
import ble as ble




class BleSender(ImageRecognizerDelegate):
    def __init__(self):
        super().__init__()
    def didRecognize(self, ImageRecognizer, detectedLabel):
        ble.send_ping(detectedLabel)
        subprocess.run(["python", "tts.py", detectedLabel],capture_output=True, text=True)
        




myBleSenderSysteme = BleSender()
myCamera = ImageRecognizer(myBleSenderSysteme)

  
CameraStatus = False
while True:

    if CameraStatus:
        print("CamOn")
        myCamera.read()
        label = myCamera.read()
        if label != "background":
            CameraStatus = False


        
    else:
        print("CamOff")
        CameraStatus = True
    sleep(1/10)