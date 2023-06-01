from Websocket.WSClient import WSClient
from Led_Strip.led import LedMode

from rpi_ws281x import Color
server_address = '192.168.1.16'
server_port = 8082
client = WSClient(server_address, server_port)
Id = "LED"



firstTime = True
neverStarted = True
red = Color(255, 0, 0, 1)
blue = Color(164, 193, 255, 0)
green = Color(102, 255, 102, 255)
purple = Color(153, 51, 255, 100)
Ledmanager = LedMode([blue])
Ledmanager.ledOff()


previousResponse = False
while True:
    
    if neverStarted:
        try:
            neverStarted = False
            client.connect()
        except:
            neverStarted = True
    else :
            # client.send_message('Connected')
        # Réception de la réponse du serveur
        response = str(client.receive_message())
        
        if not previousResponse == response:
            print("Réponse du serveur : '"+response+"'")
        previousResponse = response
        if response == "ID":
            print("Message envoyé au serveur : '" + Id+"'")
            client.send_message(Id)
        if response == "LED_off":
            Ledmanager.ledOff()
        if response == "LED_rappel":
            Ledmanager.fade()
        if response == "LED_static":
            Ledmanager.static(delay_ms=1)
