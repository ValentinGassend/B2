


class Rfid_BLE_manager:
    def __init__(self):
        from rfid_and_BLE.BLE_luncher.better_ble import Ble, BLEAlertManager, bleTrouble, checkBLEIsReady
        from rfid_and_BLE.rfid_RPI.better_rfid import Rfid_Trigger, RFIDAlertManager, rfidTrouble, checkRFIDIsReady
        RFIDAlertManager = RFIDAlertManager(rfidTrouble)
        
        self.rfid = Rfid_Trigger(RFIDAlertManager)
        self.myBle = Ble(BLEAlertManager)
        myrfidObj = self.rfid
        print("Testing RFID detection :")
        self.rfidIsReady = checkRFIDIsReady(myrfidObj, 5)
        if not self.rfidIsReady:
            print("RFID IS NOT READY")
        
    def lunch(self):
        self.rfid.read()
        if self.rfid.read() and not self.myBle.lunch():
                print("lunching ble")
                self.myBle.lunch()
        if not self.rfid.read():
             self.myBle.write_data()

    def checkResult(self):
        return self.rfidIsReady






# MyManager = Rfid_BLE_manager()


# __________________________ #
# __________________________ #


# bleAlertManager = BLEAlertManager(bleTrouble)
# myBleObj = Ble(bleAlertManager)


# print("Testing BLE connection:")
# bleIsReady = checkBLEIsReady(myBleObj, 5)


# RFIDAlertManager = RFIDAlertManager(rfidTrouble)
# myrfidObj = Rfid_Trigger(RFIDAlertManager)


# print("Testing RFID detection :")
# rfidIsReady = checkRFIDIsReady(myrfidObj, 5)


# __________________________ #
# __________________________ #


# while True:
#     MyManager.lunch()
# 