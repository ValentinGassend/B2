from machine import Pin
from time import time


class button:
    def __init__(self, buttonPin):
        self.currentState=False
        self.button = Pin(buttonPin,Pin.IN)
        self.lastState = False
        self.pushType=None
        self.long=False
        self.startedTime=None
        self.lunched=False
        self.enable = True
    def status(self):
        if self.button.value() == 0:
            self.pressedType()
            if self.pressedType() and self.enable:
                self.enable = False 
                return self.pressedType()
        else:
            self.startedTime=None
            self.long=False
            self.lunched=False
            self.enable = True 


    def pressedType(self):
        if self.startedTime==None:
            self.startedTime=time()
        else:
            pressedTime = time()-self.startedTime
            if not pressedTime < 2:
                if not self.lunched:
                    self.long = True
                    self.lunched = True
            return self.long
        
        
    def isPushed(self):
        if self.button.value() == 0:
            return True
        else:
            return False