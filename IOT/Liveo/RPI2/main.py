import time
from Websocket.WebsocketManager import WSClient
from Led_Strip.led import LedMode

# Adresse et port du serveur WebSocket
# server_address = '192.168.1.16'
server_address = '192.168.43.242'
server_port = 8082

# Création d'une instance du client WebSocket
websocket_client = WSClient(server_address, server_port, "LED")
LedManager = LedMode()

# Fonction pour la reconnexion automatique
def reconnect():
    print("Tentative de reconnexion...")
    websocket_client.connect()
    print("Reconnecté avec succès !")

# Connexion initiale au serveur WebSocket
# websocket_client.connect()

# Fonction pour établir la connexion au serveur WebSocket
def connect_to_server():
    try:
        websocket_client.connect()
        print('Connexion au serveur WebSocket établie')
    except ConnectionRefusedError:
        print('La connexion au serveur WebSocket a été refusée. Tentative de reconnexion...')
        time.sleep(5)  # Attendre 5 secondes avant de réessayer
        connect_to_server()

# Connexion initiale au serveur WebSocket
connect_to_server()

# Boucle principale du client
while True:
    try:
        # Réception de la réponse du serveur WebSocket
        response = websocket_client.receive_message()
        print('Mode de LED actuel :', response)

        if response is None:
            # Si le serveur renvoie None, tenter de se reconnecter
            reconnect()
        else:
            if not response == "LED_static":
                LedManager.handle_message(response)
            else:
                LedManager.handle_message(response, 2)

    except ConnectionRefusedError or OSError:
        print('La connexion au serveur WebSocket a été perdue. Tentative de reconnexion...')
        time.sleep(5)  # Attendre 5 secondes avant de réessayer
        connect_to_server()

    # Pause entre chaque vérification du mode de LED
    # time.sleep(1)

# Fermeture de la connexion au serveur WebSocket
websocket_client.close()
