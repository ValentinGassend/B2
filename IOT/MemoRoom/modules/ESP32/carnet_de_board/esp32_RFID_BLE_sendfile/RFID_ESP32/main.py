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
class RFID :
    def __init__(self,rdr):
        self.rdr = rdr  # SCK, MOSI, MISO, RST, SDA
        self.asked=False
    
    def read(self):
        (stat, tag_type) = self.rdr.request(self.rdr.REQIDL)
        if stat == self.rdr.OK:
            self.asked=False
            (stat, raw_uid) = self.rdr.anticoll()
            if stat == self.rdr.OK:
                print("\nBadge détecté !")
                if raw_uid == [163, 230, 27, 172, 242]:
                    print("\nBadge reconnu")
                    
                    return True
                else:
                    print("\nBadge non reconnu")
                    print("\nVoici l'UID du badge : " + str(raw_uid))
                    return False
        return False