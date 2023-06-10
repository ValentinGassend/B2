from datetime import datetime, timedelta
import time
from threading import Thread
from Appointment.appointment_manager import AppointmentManager, Appointment, Reminder
from Websocket.WebsocketManager import WSServer

# Configuration du serveur WebSocket
address = '192.168.1.16'
port = 8082
server = WSServer(address, port)

# Configuration du gestionnaire de rendez-vous
manager = AppointmentManager('/home/valentin/Desktop/MemoRoom/modules/_Liveo/HUB/appointments.json')

# Configuration de la LED fade (à adapter selon votre utilisation)
led_fade_duration = 1  # Durée de la LED fade en secondes

base_time = time.time()  # Remplacez par votre temps de base
next_time = base_time

def run_server():
    server.start()
    try:
        while True:
            server.handle_clients()

            messages = server.get_received_messages()
            for message in messages:
                for client_socket in server.clients:  # Parcours des clients connectés
                    server.state.handle_message(server, message, client_socket)  # Utilisation de client_socket
    except KeyboardInterrupt:
        server.stop()

# Lancement du serveur dans un thread séparé
server_thread = Thread(target=run_server)
server_thread.start()

while True:
    current_time = datetime.now()  # Obtenir le temps actuel

    if time.time() > next_time:
        # Vérifier s'il y a un rappel à la temporalité actuelle
        current_appointment = manager.check_appointment(current_time)
        if True:
            print(f"Rappel : {current_appointment}")
            # Envoyer LED fade en WebSocket à tous les clients
            if server.get_led_status() == "Off_mode":
                server.send_to_all_clients('LED_fade')
                server.set_led_status('LED_fade')
        else:
            print(f"Aucun rappel prévu")
        
        # Vérifier les 10 prochaines minutes pour les rendez-vous
        for i in range(10):
            target_time = current_time + timedelta(minutes=i)
            appointment_exists = manager.check_appointment(target_time)
            if appointment_exists:
                print(f"Rendez-vous prévu dans les 10 prochaines minutes : {appointment_exists}")
                # Envoyer LED fade en WebSocket à tous les clients
                
                if server.get_led_status() == "Off_mode":
                    server.send_message_to_all('LED_fade')
                    server.set_led_status('LED_fade')
                    break  # Sortir de la boucle dès qu'un rendez-vous est trouvé

        # Mettre à jour le temps de base pour la prochaine itération
        base_time = time.time()

        # Attendre 1 minute avant la prochaine vérification
        next_time = base_time + 60
