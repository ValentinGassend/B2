from rfid_and_BLE.rfid_BLE_manager import Rfid_BLE_manager
from time import sleep
MyManager = Rfid_BLE_manager()
print("remove the card please")
sleep(10)
if MyManager.checkResult():
    print("we can start !")
    while True:
        MyManager.lunch()
    