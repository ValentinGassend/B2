from esp32_RFID_BLE_sendfile.RFID_and_BLE import RFID_BLE_manager
from led.led import Led
from led.single_led import SingleLed
from KeepMind.fileManager import keepMinder
from btn.btn import button



from machine import Pin
from time import time

MyRFID_BLE_manager = RFID_BLE_manager()
MyFileManager = keepMinder("hasard.txt")
myButton = button(23)
blue = Pin(27, Pin.OUT)
green = Pin(14, Pin.OUT)
red = Pin(26, Pin.OUT)
Myled = Led(blue,green,red)

single_green = Pin(13, Pin.OUT)
MySingleled = SingleLed(single_green)



dataSended = False
DataTimeStarted = False
ledTimerStarter=time()
Myled.off()
MySingleled.off()

while True:    
    is_pushed = myButton.isPushed()
    if not is_pushed:
        if MyRFID_BLE_manager.run():
            if not DataTimeStarted:
                dataSenderStarter = time()
                DataTimeStarted=True
            if not dataSended:
                delay = time() - dataSenderStarter
                if delay > 2:
                    content = MyFileManager.read()
#                     Myled.on_green()
                    MyRFID_BLE_manager.send(content)
                    MyFileManager.reset()
                    dataSended=True
                    ledTimerStarter = time()
                    MyRFID_BLE_manager.disconnected()
        else:
            DataTimeStarted=False
            
            dataSended = False
            
    
    if myButton.status():
#         Myled.off()
        MySingleled.off()
        actualData = MyFileManager.read()
        print(actualData)
        if not actualData or actualData == "":
            newData = 1
        else:
            int(actualData)
            newData = int(actualData) + 1
        MyFileManager.write(newData)
#         Myled.on_green()
        MySingleled.on()
        ledTimerStarter = time()
    else :
#         temps de led active
        if (time()-ledTimerStarter)>1:
#             Myled.off()
            MySingleled.off()

 