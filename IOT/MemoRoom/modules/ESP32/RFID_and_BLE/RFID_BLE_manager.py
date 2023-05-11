# myESP32button = button(23)
# while True:
#     myESP32button.status()
#     sleep_ms(100)



# ble = bluetooth.BLE()
# p = Ble(ble,name="MemoRoom")
# while True:
#     p.on_write(p.on_rx)

from RFID_ESP32.main import RFID
import RFID_ESP32.libs.mfrc522 as mfrc522
from BLE_ESP32.main_bluetooth import Ble
import bluetooth
from machine import Pin
from led.led import Led
from time import time, sleep
rdr = mfrc522.MFRC522(5, 17, 16, 4, 18)
MyRfid = RFID(rdr)
ble = bluetooth.BLE()

ble_started = False
blue = Pin(27, Pin.OUT)
green = Pin(14, Pin.OUT)
red = Pin(26, Pin.OUT)
Myled = Led(blue,green,red)
p = None
while True:
    if p:
        if p.is_connected():
            Myled.on_green()
        else:
            Myled.on_blue()
        
    else:
        Myled.off()

    if MyRfid.read():
        
        if not ble_started:
            p = Ble(ble,name="MemoRoom")
            ble_started = True
        else:
            pass
    else:
        pass
#     p.on_write(p.on_rx)
            
        