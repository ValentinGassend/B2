from BLE_luncher.ble import Ble
from rfid_RPI.read import Rfid_Trigger


rfid = Rfid_Trigger()
myBle= Ble()
while True:
    rfid.read()
    if rfid.read():
        # lunch BLE
        myBle.lunch()
        
    