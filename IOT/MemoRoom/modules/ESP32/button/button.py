from machine import Pin
from time import sleep_ms, time


class button:
    def __init__(self, buttonPin):
        self.currentState=False
        self.button = Pin(buttonPin,Pin.IN)
        self.lastState = False
        self.pushType=None
        self.long=False
        self.startedTime=None
        self.lunched=False
    def status(self):
        if self.button.value() == 1:
                self.pressedType()
            
        else:
            self.startedTime=None
            self.long=False
            self.lunched=False
            
        return self.pressedType()

    def pressedType(self):
        if (self.startedTime==None):
            self.startedTime=time()
        else:
            pressedTime = time()-self.startedTime
            if not pressedTime < 2:
                if not self.lunched:
                    print("long")
                    self.lunched = True
                    self.long = True
                else:
                    self.long = False
                
                        
            return self.long
myESP32button = button(23)

while True:
    myESP32button.status()
    sleep_ms(100)