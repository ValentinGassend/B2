import bluetooth
import random
import struct
import time
from esp32_RFID_BLE_sendfile.BLE_ESP32.ble_advertising import advertising_payload
from esp32_RFID_BLE_sendfile.BLE_ESP32.ble_simple_peripheral import *
from micropython import const

class Ble(BLESimplePeripheral):
    def on_rx(self,v):
        print("RX", v)

# p.is_connected()
# p.send(data)