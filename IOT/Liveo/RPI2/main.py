from Led_Strip.led import LedMode
from rpi_ws281x import Color
from Websocket.WebsocketManager import WSClient
import time
# Instanciation de la classe LedMode avec les couleurs des LED en argument
led_mode = LedMode([Color(164, 193, 255, 0)])

# server_address = '192.168.1.16'
server_address = '192.168.43.242'
server_port = 8081
# Création de l'objet WSClient
client = WSClient(server_address, server_port, "LED")
while True:
    try:
        client.connect()
        print("Connected to the WebSocket server.")
        
        while True:
            try:
                if client.is_server_active():
                    received_message = client.receive_message()
                    
                    if received_message:
                        if not received_message == "LED_PONG":
                            print("Message reçu du serveur : " + received_message)
                        if received_message == "ID":
                            print("Message envoyé au serveur : '" + client.get_id() + "'")
                            client.send_message(client.get_id())
                        if received_message == "LED_STATE":
                            print("Message envoyé au serveur : '" + led_mode.get_led_status() + "'")
                            client.send_message(led_mode.get_led_status())
                        
                        if received_message.startswith("LED_"):
                            led_mode.handle_message(received_message)
                    else:
                        pass
            except KeyboardInterrupt:
                # Fermer la connexion client lorsqu'on appuie sur Ctrl+C
                client.close()
                break
            except BrokenPipeError:
                print("La connexion au serveur a été interrompue. Reconnexion...")
                client.close()
                time.sleep(1)
            except ConnectionRefusedError:
                print("La connexion au serveur a été interrompue. Reconnexion...")
                time.sleep(1)
                
        # Retry the connection after the inner loop breaks
        continue
        
    except KeyboardInterrupt:
        break
    except ConnectionRefusedError:
        print("La connexion au serveur a été interrompue. Reconnexion...")
        time.sleep(1)

print("Program terminated.")