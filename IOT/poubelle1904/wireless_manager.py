class CommunicationCallback:
    
    def __init__(self):
        pass
    
    def connectionCallback(self):
        print("Connected")
    
    def disconnectionCallback(self):
        print("Disconnected")
    
    def didReceiveCallback(self, value):
        print("Value recieved f{value}")



class WirelessManager:
    
    def __init__(self, bleCallback = None , wsCallback = None):
        self.bleCallback = bleCallback
        self.wsCallback = wsCallback
        if self.bleCallback != None:
            from ble_simple_peripheral import bluetooth, BLESimplePeripheral
            self.ble = bluetooth.BLE()
            self.blePeripheral = BLESimplePeripheral(self.ble,self.bleCallback.name)
            self.blePeripheral.on_write(self.bleCallback.didReceiveCallback)
        if self.wsCallback != None:
            from ws_server import WSServer
            self.server = WSServer(self.wsCallback.connectionCallback,self.wsCallback.disconnectionCallback,self.wsCallback.didReceiveCallback)
            self.server.start()
            
        pass
    
    def isConnected(self):
        if self.bleCallback:
            return self.blePeripheral.is_connected()
        if self.wsCallback:
            return self.server.is_connected()
    
    def sendDataToBLE(self, data):
        if self.bleCallback:
            if self.blePeripheral.is_connected():
                return self.blePeripheral.send(data)
            
    def sendDataToWs(self, data):
        if self.wsCallback:
            if self.server.isConnected:
                return self.server.sendData(data)
            
    def sendDataToAll(self, data):
        if self.bleCallback:
            if self.blePeripheral.is_connected():
                return self.blePeripheral.send(data)
        if self.wsCallback:
            if self.server.isConnected:
                return self.server.sendData(data)
    
    def process(self):
        if self.wsCallback != None:
            self.server.process_all()
