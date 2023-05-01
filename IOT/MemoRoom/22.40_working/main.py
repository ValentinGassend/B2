from main_bluetooth import Ble
import bluetooth
from time import time





while True:
        ble = bluetooth.BLE()
        p = Ble(ble,name="MemoRoom")
        p.on_write(p.on_rx)


        
    