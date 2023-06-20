import socketio
import time


class WebSocketClient:
    def __init__(self, server_address):
        self.server_address = server_address
        self.sio = socketio.Client()
        self.connected = False

        @self.sio.event
        def connect():
            self.connected = True
            # Envoyer le message lorsque la connexion est établie
            self.send_message('Init')

        @self.sio.event
        def disconnect():
            self.connected = False
            self.reconnect()

    def connect(self):
        self.sio.connect(self.server_address)

    def isConnected(self):
        return self.connected

    def disconnect(self):
        self.sio.disconnect()

    def send_message(self, message):
        self.sio.emit('message', message)

    def reconnect(self):
        while not self.connected:
            print("Trying to reconnect...")
            self.connect()
            time.sleep(1)  # Attendre 1 seconde avant de réessayer la connexion


# client = WebSocketClient('http://192.168.1.16:3000/')
# client.connect()
# while True:
#     if client.isConnected():
#         # Vous pouvez placer d'autres actions ici avant d'envoyer un message
#         client.send_message("This is my data")
#         # client.disconnect()
#     # Vous pouvez ajouter une pause ou un délai ici si nécessaire
