from machine import Pin
from time import sleep_ms, time


class button:
    def __init__(self, buttonPin):
        self.currentState=False
        self.button = Pin(buttonPin,Pin.IN)
        self.lastState = False
        self.pushType=None
        self.bleUnlocked=False
        self.startedTime=None
        self.lunched=False
    def status(self):
        
        if self.button.value() == 1:
                self.pressedType()
            
        else:
            self.startedTime=None
            self.bleUnlocked=False
            self.lunched=False
            
        return self.pressedType()

    def pressedType(self):
        if (self.startedTime==None):
            self.startedTime=time()
        else:
            pressedTime = time()-self.startedTime
            if pressedTime < 2:
                self.pushType="short"
                self.bleUnlocked=False
            else:
                if not self.lunched:
                    self.bleUnlocked=True
                    self.lunched = True
                else:
                    self.bleUnlocked = False
                
                        
            return self.bleUnlocked
          