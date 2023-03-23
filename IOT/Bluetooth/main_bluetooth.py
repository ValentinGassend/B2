import bluetooth
import random
import struct
import time
from ble_advertising import advertising_payload
from ble_simple_peripheral import *
from micropython import const
ble = bluetooth.BLE()
p = BLESimplePeripheral(ble,name="Alban♥")
def on_rx(v):
    print("RX", v.decode())
p.on_write(on_rx)
# p.is_connected()
# p.send(data)