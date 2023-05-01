from main_bluetooth import Ble
import bluetooth
from time import time





ble = bluetooth.BLE()
p = Ble(ble,name="MemoRoom")
while True:
    p.on_write(p.on_rx)

        
    
