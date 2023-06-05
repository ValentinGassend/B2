from Led_Strip.led import LedMode
from rpi_ws281x import Color
from Websocket.WebsocketManager import WSClient

# Instanciation de la classe LedMode avec les couleurs des LED en argument
led_mode = LedMode([Color(164, 193, 255, 0)])

# Création de l'objet WSClient
client = WSClient("192.168.1.18", 8082, "LED")
client.connect()

try:
    while True:
        received_message = client.receive_message()
        if received_message:
            print("Message reçu du serveur : " + received_message)
        if received_message == "ID":
            print("Message envoyé au serveur : '" + client.get_id() + "'")
            client.send_message(client.get_id())
        elif received_message.startswith("LED"):
            led_mode.handle_message(received_message)
except KeyboardInterrupt:
    # Fermer la connexion client lorsqu'on appuie sur Ctrl+C
    client.close()
