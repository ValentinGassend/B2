from machine import Pin
from time import sleep


class button:
    def __init__(self, buttonPin):
        self.state=False
        self.button = Pin(buttonPin,Pin.IN)
    def status(self):
        
        if self.button.value() == 1:
            self.state=True
        else:
            self.state=False
        return self.state



myESP32button = button(23)

while True:
    print(myESP32button.status())
    sleep(1)