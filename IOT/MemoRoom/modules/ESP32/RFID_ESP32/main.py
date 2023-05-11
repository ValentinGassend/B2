# MicroPython SH1106 OLED driver
#
# Pin Map I2C for ESP8266
#   - 3v - xxxxxx   - Vcc
#   - G  - xxxxxx   - Gnd
#   - D2 - GPIO 5   - SCK / SCL
#   - D1 - GPIO 4   - DIN / SDA
#   - D0 - GPIO 16  - Res (required, unless a Hardware reset circuit is connected)
#   - G  - xxxxxx     CS
#   - G  - xxxxxx     D/C
#
# Pin's for I2C can be set almost arbitrary
#
from machine import Pin, SoftI2C, ADC
import libs.mfrc522 as mfrc522
from time import sleep_ms, sleep

rdr = mfrc522.MFRC522(5, 17, 16, 4, 18)  # SCK, MOSI, MISO, RST, SDA

asked=False
while True:
    (stat, tag_type) = rdr.request(rdr.REQIDL)
    if stat == rdr.OK:
        asked=False
        (stat, raw_uid) = rdr.anticoll()
        if stat == rdr.OK:
            print("\nBadge détecté !")
            if raw_uid == [163, 230, 27, 172, 242]:
                print("\nBadge reconnu")
            else:
                print("\nBadge non reconnu")
                print("\nVoici l'UID du badge : " + str(raw_uid))
    else:
        if not asked:
            print("\n--> Veuillez présenter un badge sur le lecteur")
            asked = True
