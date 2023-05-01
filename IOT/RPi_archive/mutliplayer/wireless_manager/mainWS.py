from time import sleep
from machine import Pin, SoftI2C
import bluetooth
from wireless_manager import *
import sh1106

#screen
i2c = SoftI2C(scl=Pin(5), sda=Pin(4), freq=400000)
display = sh1106.SH1106_I2C(128, 64, i2c, Pin(16), 0x3c)

#leds
ledB = Pin(26, Pin.OUT)
ledB.off()

ledV = Pin(33, Pin.OUT)
ledV.off()

ledR = Pin(25, Pin.OUT)
ledR.off()

class BLECallback(CommunicationCallback):

    def __init__(self,bleName="MemoRoom"):
        self.bleName = bleName

    def connectionCallback(self):
        print("Connected")

    def disconnectionCallback(self):
        print("Disconnected")

    def didReceiveCallback(self,value):
        print(f"Receive value : {value}")

class WebsocketCallback(CommunicationCallback):

    def __init__(self):
        pass

    def connectionCallback(self):
        print("Connected")

    def disconnectionCallback(self):
        print("Disconnected")

    def didReceiveCallback(self,value):
        print(f"Receive value : {value}")
        display.fill(0)
        display.text(value, 0, 0, 1)
        display.show()
        if(value == "good"):
            ledV.on()
        if(value == "bad"):
            ledR.on()
        if(value == "reset"):
            ledV.off()
            ledR.off()

wirelessManager = WirelessManager(BLECallback(bleName="Mathis"),WebsocketCallback())

try:
    while True:
        ledB.on()
        wirelessManager.process()   
        sleep_ms(10)
except KeyboardInterrupt:
    server.stop()
    ledB.off()
    display.fill(0)
    display.show()
