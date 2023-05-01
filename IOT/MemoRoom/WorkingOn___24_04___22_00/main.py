from button import button
from main_bluetooth import Ble
import bluetooth
from time import time

myESP32button = button(23)




while True:
    if myESP32button.status():
        ble = bluetooth.BLE()
        p = Ble(ble,name="MemoRoom")
        p.on_write(p.on_rx)


        
    
