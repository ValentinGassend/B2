
from machine import Pin
from ws_server import WSServer
from time import sleep, sleep_ms
import bluetooth
import random
import struct
from micropython import const
from wireless_manager import *
r = Pin(17, Pin.OUT)
g = Pin(16, Pin.OUT)
b = Pin(18, Pin.OUT)
class BLECallback(CommunicationCallback):
    
    def __init__(self,name="Default"):
        self.name = name
        pass
    
    def connectionCallback(self):
        print("Connected")
    
    def disconnectionCallback(self):
        print("Disconnected")
    
    def didReceiveCallback(self, value):
        value = value.decode('utf-8')
        print("Value recieved "+value)
        if value == "background\n" :
            r.off()
            b.on()
        else :
            b.off()
            r.on()

    
class WebsocketCallback(CommunicationCallback):
    
    def __init__(self):
        pass
    
    def connectionCallback(self):
        print("Connection from callback")
    
    def disconnectionCallback(self):
        print("Disconnection from callback")
    
    def didReceiveCallback(self,value):
        print("Received from callback")
        print(value)

wirelessManager = WirelessManager(BLECallback(), WebsocketCallback())
try:
    while True:
        wirelessManager.process()
#         print("Hey")
        sleep_ms(100)
        #wirelessManager.sendDataToBLE("Hoho")
        wirelessManager.sendDataToWs("Hihi")
#             
except KeyboardInterrupt:
    pass


