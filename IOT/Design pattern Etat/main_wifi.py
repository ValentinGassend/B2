from machine import Pin, SoftI2C, ADC

import sh1106
import mfrc522
from time import sleep_ms, sleep

led_green = Pin(2, Pin.OUT)
led_blue = Pin(15, Pin.OUT)
import network


import gc
gc.collect()





ssid = 'Alboss\' student (Valentin)'
password = '123456789'

ap = network.WLAN(network.AP_IF)
ap.active(True)
ap.config(essid=ssid, password=password)

while ap.active() == False:
  pass

print('Connection successful')
print(ap.ifconfig())

import socket

html = """<!DOCTYPE html>
<html>
    <head> <title>ESP8266 Pins</title> </head>
    <body> <h1>ESP8266 Pins</h1>
        <table border="1"> <tr><th>Pin</th><th>Value</th></tr> %s </table>
    </body>
</html>
"""

addr = socket.getaddrinfo('192.168.4.1', 80)[0][-1]
s = socket.socket()
s.bind(('',80))
s.listen(5)
led_red = Pin(14, Pin.OUT)

while True:
    cl, addr = s.accept()
    print('client connected from', addr)
    request = cl.recv(1024)
    if request.decode() == "on":
        led_green.on()
        led_red.off()
    else:
        led_green.off()
        led_red.on()

    cl.close() 
