import bluetooth
import random
import struct
import time
from ble_advertising import advertising_payload
from ble_simple_peripheral import *
import mpu6050
from micropython import const
from machine import I2C
from machine import Pin
import math
ble = bluetooth.BLE()
p = BLESimplePeripheral(ble,name="Val_joue")
def on_rx(v):
    print("RX", v)
p.on_write(on_rx)
# p.is_connected()
# p.send(data)
i2c = I2C(scl=Pin(23), sda=Pin(22))     #initializing the I2C method for ESP32
#i2c = I2C(scl=Pin(5), sda=Pin(4))       #initializing the I2C method for ESP8266
mpu = mpu6050.accel(i2c)

def shaking():
    values = mpu.get_acc_values()
    sumOfValues = 0
    for i in range(0,len(values)):
        sumOfValues += math.fabs(values[i])
    return sumOfValues >= 45000
i = 0
def zoning(x,y,z, xTarget,yTarget,zTarget, tolerance = 2000):
    minX = xTarget - tolerance
    maxX = xTarget + tolerance
    minY = yTarget - tolerance
    maxY = yTarget + tolerance
    minZ = zTarget - tolerance
    maxZ = zTarget + tolerance
    if minX <= x <= maxX and minY <= y <= maxY and minZ <= z <= maxZ:
        return True
    else:
        return False
        
while True:
   
    values = mpu.get_acc_values()
    # pos init 2000 -2000 14800
    # finale 3600 -2000 -17600
    
    if zoning(values[0],0,0,15500,0,0):
        if p.is_connected():
            print("Envoi BLE")
            p.send("Pos Droite")
        else:
            print("Pos init mais pas de BLE")
    elif zoning(values[0],0,0,-15500,0,0):
        if p.is_connected():
            print("Envoi BLE")
            p.send("Pos Gauche")
        else:
            print("Pos Finale mais pas de BLE")
    elif shaking():
        if p.is_connected():
            print("Envoi BLE")
            p.send("Secoué")
        else:
            print("Secoué mais pas de BLE")
    time.sleep_ms(100)