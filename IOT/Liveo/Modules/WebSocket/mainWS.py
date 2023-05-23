from ws_connection import ClientClosedError
from ws_server import WebSocketServer, WebSocketClient
from time import sleep

class WSClient(WebSocketClient):
    def __init__(self, conn,receivedCallback):
        super().__init__(conn)
        self.receivedCallback = receivedCallback

    def process(self):
        try:
            msg = self.connection.read()
            if not msg:
                return
            msg = msg.decode("utf-8")
            self.receivedCallback(msg)
        except ClientClosedError:
            self.connection.close()
            
    def sendData(self,dataToSend):
        self.connection.write(dataToSend)


class WSServer(WebSocketServer):
    def __init__(self,connectionCallback,disconnectionCallback,receivedCallback):
        super().__init__("test.html",connectionCallback,disconnectionCallback,2)
        self.isConnected = False
        self.receivedCallback = receivedCallback

    def _make_client(self, conn):
        self.cli = WSClient(conn,self.receivedCallback)
        self.isConnected = True
        return self.cli
    
    def sendDataToClient(self,dataToSend):
        self.cli.sendData(dataToSend)

def connectionCallback():
    print("Connection from callback")

def disconnectionCallback():
    print("Disconnection from callback")
    
def didReceiveCallback(value):
    print("Received from callback")
    print(value)


server = WSServer(connectionCallback,disconnectionCallback,didReceiveCallback)
server.start()
try:
    while True:
        server.process_all()
        print("Hey")
        sleep(0.1)
        if server.isConnected:
            server.sendDataToClient("Hoho")
            
except KeyboardInterrupt:
    pass
server.stop()
