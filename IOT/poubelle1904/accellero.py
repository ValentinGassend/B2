from machine import I2C
from machine import Pin
from machine import sleep
import mpu6050
import math
i2c = I2C(scl=Pin(22), sda=Pin(23))     #initializing the I2C method for ESP32
#i2c = I2C(scl=Pin(5), sda=Pin(4))       #initializing the I2C method for ESP8266
mpu= mpu6050.accel(i2c)
while True:
    values = mpu.get_acc_values()
    sumOfValues = 0
    for i in range(0,len(values)):
        sumOfValues += math.fabs(values[i])
    print(sumOfValues)
#  print(mpu.get_acc_values())
#  print(mpu.get_gyro_values())
    sleep(500)
