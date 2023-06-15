from datetime import datetime, timedelta
import time
from threading import Thread
from Appointment.appointment_manager import AppointmentManager, Appointment, Reminder
from Websocket.WebsocketManager import WSServer
from RFID.rfid import RfidTrigger
from BLE.ble import BLE, check_BLE_is_ready
from buttonFileCount.btn_file_count import ButtonPressCounter
from WebServer.webserver import WebServer
from WebServer.webclient import WebSocketClient
import multiprocessing
import json
from btn.btn import Btn
from TTS.tts import TTS
from NLU.nlu import Nlu
import threading
# address = '192.168.43.242'
address = '192.168.1.16'
port = 8082
webport = 3000
server = WSServer(address, port)
myWebServeur = WebServer(address, webport)

server_process = multiprocessing.Process(target=myWebServeur.start)
server_process.start()

client = WebSocketClient(f'http://'+address+':'+str(webport)+'/')
client.connect()
# Configuration du gestionnaire de rendez-vous
manager = AppointmentManager(
    '/home/valentin/Desktop/MemoRoom/modules/_Liveo/HUB/appointments.json')

# Configuration de la LED fade (à adapter selon votre utilisation)
led_fade_duration = 1  # Durée de la LED fade en secondes
button_pin = 10
my_btn = Btn(button_pin)
base_time = time.time()  # Remplacez par votre temps de base
next_time = base_time
# Lancement du serveur dans un thread séparé
def run_server():
    server.start()
    try:
        while True:
            server.handle_clients()

            messages = server.get_received_messages()
            for message in messages:
                for client_socket in server.clients:  # Parcours des clients connectés
                    # Utilisation de client_socket
                    server.state.handle_message(
                        server, message, client_socket)
                    hub.handle_message(message)
    except KeyboardInterrupt:
        server.stop()


rfid_trigger = RfidTrigger(numDevice=2)
ble_client = BLE()
button_press_counter = ButtonPressCounter(
    "/home/valentin/Desktop/MemoRoom/modules/_Liveo/HUB/button_press.json")
already_retrieved = False
firstLunch = True
firstLunchDelay = True
Speaker = TTS()

nlu = Nlu()

server_thread = Thread(target=run_server)
server_thread.start()
print("server is ready")
# nlu.fit()
# Classe de base pour les états du hub


class HubState:
    def __init__(self):
        self.message = None
        self.previous_message = None

    def handle_message(self, hub, message):
        if not message == "PING":
            print("Message reçu dans Handle:", message)
        self.message = message

    def get_received_message(self):
        print("message", self.message)
        return self.message

    def handle_rfid_trigger(self, hub):
        pass

    def handle_button_trigger(self, hub):
        pass

    def handle_reminder(self, hub):
        pass

    def handle_self_state(self, hub):
        print("Erreur : Impossible de rester dans l'état actuel")
    
    def send_web_message(self, message):
        if client.isConnected():
            print(message)
            # Vous pouvez placer d'autres actions ici avant d'envoyer un message
            client.send_message(message)


# Implémentation de l'état de veille
class StandbyState(HubState):
    def handle_rfid_trigger(self, hub):
        print(f"Changement d'état : Veille -> Récupération d'information")
        hub.set_state(RecoveryState())

    def handle_button_trigger(self, hub):
        print(f"Changement d'état : Veille -> Déclenchement de bouton")
        hub.set_state(ButtonTriggerState())

    def handle_reminder(self, hub):
        print(f"Changement d'état : Veille -> Mode rappel")
        hub.set_state(ReminderModeState())

    def handle_standby(self, hub):
        print("Erreur : Impossible de rester dans l'état actuel")

    def handle_self_state(self, hub):
        pass

    def send_message_via_websocket(self, hub, message):
        # Code pour envoyer un message via WebSocket
        server.send_to_all_clients(message)


class TestState(HubState):
    def __init__(self):
        self.message = None
        self.led = False
        self.pc = False
        self.previous_message = None

    def handle_rfid_trigger(self, hub):
        pass

    def handle_button_trigger(self, hub):
        pass

    def handle_reminder(self, hub):
        pass

    def handle_standby(self, hub):
        hub.set_state(StandbyState())

    def handle_self_state(self, hub):
        pass

    def communicate_via_websocket(self, hub, expected_message=None):
        # Code pour communiquer via WebSocket
        received_message = None

        def wait_for_message():
            nonlocal received_message
            received_message = hub.get_received_message()

            # Vérifier si un message est déjà disponible
        wait_thread = threading.Thread(target=wait_for_message)
        wait_thread.start()
        wait_thread.join(timeout=0)  # Ne pas attendre le thread

        return received_message

    def send_message_via_websocket(self, hub, message):
        # Code pour envoyer un message via WebSocket
        server.send_to_all_clients(message)

    def websocket_connexion(self, hub):
        hub.send_message_via_websocket('ID')
        received_message = self.get_received_message()
        print("message: " + received_message)
        if received_message == "LED" and not self.led:
            self.led = True
            print("LED is connected !")
        if received_message == "PC" and not self.pc:
            self.pc = True
            print("Whisper support is connected !")
        if self.pc and self.led:
            return True
        elif self.pc:
            print("Whisper support is connected ! Led remain")
            return False
        elif self.led:
            print("LED is connected ! Whisper support remain")
            return False
        else:
            print(
                "You have to connect your leds and your Whisper support ! See you in 1s :)")
            return False


# Implémentation de l'état de récupération d'information
class RecoveryState(HubState):
    def __init__(self):
        self.message = None
        self.bluetooth_connected = False
        self.previous_message = None

    def handle_rfid_trigger(self, hub):
        print("Erreur : Impossible de rester dans l'état actuel")

    def handle_button_trigger(self, hub):
        pass

    def handle_reminder(self, hub):
        pass

    def handle_standby(self, hub):
        hub.set_state(StandbyState())

    def handle_self_state(self, hub):
        pass

    def launch_bluetooth(self, hub):
        # Code pour lancer le Bluetooth
        # ble_client.connect()
        self.bluetooth_connected = ble_client.is_connected()
        while not self.bluetooth_connected:
            ble_client.connect()
            self.bluetooth_connected = ble_client.is_connected()

    def communicate_with_ble(self, hub):
        if self.bluetooth_connected:
            # Code pour communiquer avec le BLE
            ble_client.connect()
            while True:
                received_message = ble_client.receive_message()
                # Code pour vérifier si une valeur est récupérée du BLE
                if received_message:
                    if ble_client.handle_message(received_message):
                        ble_client.disconnect()
                        print(ble_client.get_btn_value())
                        return ble_client.get_btn_value()

    def communicate_via_websocket(self, hub, expected_message=None):
        # Code pour communiquer via WebSocket
        received_message = None

        def wait_for_message():
            nonlocal received_message
            server.handle_clients()

            received_message = hub.get_received_message()
        # Attendre la réception d'un message
        while received_message is None:
            wait_thread = threading.Thread(target=wait_for_message)
            wait_thread.start()
            wait_thread.join()

        return received_message

    def send_message_via_websocket(self, hub, message):
        # Code pour envoyer un message via WebSocket
        server.send_to_all_clients(message)

    def update_json(self, hub, data):
        # Code pour ajouter, modifier ou mettre à jour des informations dans un JSON
        # Utilisez la bibliothèque JSON pour effectuer les opérations sur le JSON
        pass

    def add_appointment(self, hub, data, intent):
        if intent == "rdv":
            json_data = {
                "id": 0,
                "date": "",
                "heure": "",
                "lieu": "",
                "titre": "",
                "informations_supplementaires": "",
                "rappel": {
                        "date": "",
                        "heure": ""
                }
            }
            for slot in data['slots']:
                if slot['slotName'] == 'date':
                    date_value = slot['value']['value']
                    date_parsed = datetime.strptime(
                        date_value, "%Y-%m-%d %H:%M:%S %z")
                    json_data['date'] = date_parsed.strftime(
                        "%Y-%m-%d")
                elif slot['slotName'] == 'heure':
                    heure_value = slot['value']['value']
                    heure_parsed = datetime.strptime(
                        heure_value, "%Y-%m-%d %H:%M:%S %z")
                    json_data['heure'] = heure_parsed.strftime(
                        "%H:%M")
                elif slot['slotName'] == 'lieu':
                    json_data['lieu'] = slot['value']['value']
                elif slot['slotName'] == 'type_rendez_vous':
                    json_data['titre'] = slot['value']['value']
                elif slot['slotName'] == 'informations_supplementaires':
                    json_data['informations_supplementaires'] = slot['value']['value']
            json_data['id'] = -1
            print(json_data)
            manager.add_appointment(json_data)
            return json_data
        pass

    def update_appointment_reminder(self, hub, data, intent):
        if intent == "remind":
            json_data_remind = {
                "id": 0,
                "date": "",
                "heure": "",
                "lieu": "",
                "titre": "",
                "informations_supplementaires": "",
                "rappel": {
                        "date": "",
                        "heure": ""
                }
            }

            for slot in data['slots']:
                if slot['slotName'] == 'date':
                    date_value = slot['value']['value']
                    date_parsed = datetime.strptime(
                        date_value, "%Y-%m-%d %H:%M:%S %z")
                    json_data_remind["rappel"]["date"] = date_parsed.strftime(
                        "%Y-%m-%d")
                elif slot['slotName'] == 'time':
                    heure_value = slot['value']['value']
                    heure_parsed = datetime.strptime(
                        heure_value, "%Y-%m-%d %H:%M:%S %z")
                    json_data_remind["rappel"]["heure"] = heure_parsed.strftime(
                        "%H:%M")
            json_data_remind['id'] = -1
            print(json_data_remind)
            manager.update_appointment_reminder(
                json_data_remind['id'], json_data_remind["rappel"])
            return json_data_remind
        pass

    def launch_tts(self, hub, file):
        # Lancement du TTS en mode lecture de fichier audio
        Speaker.sound(file)

    def speak_text(self, hub, text):
        # Lancement du TTS en mode lecture de texte
        Speaker.talk(text)

    def run_nlu(self, hub, text, intent):
        if intent == "rdv":
            nlu_rdv = nlu.run(text=text, intent=intent)
            intent_name = nlu_rdv['intent']['intentName']
            if intent_name == None:
                return intent_name
            else:
                return nlu_rdv
        elif intent == "bool":
            nlu_bool = nlu.run(text=text, intent=intent)
            intent_name = nlu_bool['intent']['intentName']
            if intent_name == None or intent_name == "negation":
                return False
            else:
                return True
        elif intent == "remind":
            nlu_remind = nlu.run(text=text, intent=intent)
            intent_name = nlu_remind['intent']['intentName']
            if intent_name == None:
                return intent_name
            else:
                return nlu_remind


# Implémentation de l'état de déclenchement de bouton
class ButtonTriggerState(HubState):
    def handle_message(self, hub, message, client_socket, tts, nlu, appointment):
        print("Erreur : Impossible de traiter les messages en dehors de l'état de veille")

    def handle_reminder(self, hub):
        print("Erreur : Impossible de passer en mode rappel en dehors de l'état de veille")

    def handle_standby(self, hub):
        hub.set_state(StandbyState())

    def handle_button_trigger(self, hub):
        print("Erreur : Impossible de rester dans l'état de déclenchement de bouton")

    def launch_tts(self, hub, file):
        # Lancement du TTS en mode lecture de fichier audio
        Speaker.sound(file)

    def speak_text(self, hub, text):
        # Lancement du TTS en mode lecture de texte
        Speaker.talk(text)


# Implémentation de l'état de mode rappel
class ReminderModeState(HubState):
    def handle_message(self, hub, message, client_socket, tts, nlu, appointment):
        print("Erreur : Impossible de traiter les messages en dehors de l'état de veille")

    def handle_button_trigger(self, hub):
        print("Erreur : Impossible de passer en mode déclenchement de bouton en dehors de l'état de veille")

    def handle_standby(self, hub):
        hub.set_state(StandbyState())

    def handle_reminder(self, hub):
        print("Erreur : Impossible de rester dans l'état de mode rappel")

    def launch_tts(self, hub, file):
        # Lancement du TTS en mode lecture de fichier audio
        Speaker.sound(file)


class WhisperState(HubState):
    def handle_rfid_trigger(self, hub):
        pass

    def handle_button_trigger(self, hub):
        pass

    def handle_reminder(self, hub):
        pass

    def handle_standby(self, hub):
        hub.set_state(StandbyState())

    def handle_self_state(self, hub):
        pass


# Classe principale du hub
class Hub:
    def __init__(self):
        self.message = None
        self.previous_message = None
        self.state = TestState()

    def set_state(self, state):
        print(
            f"Changement d'état : {self.state.__class__.__name__} -> {state.__class__.__name__}")
        self.state = state

    def get_state(self):
        return self.state

    def handle_message(self, message):
        self.state.handle_message(self, message)

    def get_received_message(self):
        return self.state.get_received_message()

    def handle_rfid_trigger(self):
        self.state.handle_rfid_trigger(self)

    def handle_button_trigger(self):
        self.state.handle_button_trigger(self)

    def handle_reminder(self):
        self.state.handle_reminder(self)

    def handle_standby(self):
        self.state.handle_standby(self)

    def handle_self_state(self):
        self.state.handle_self_state(self)

    def send_web_message(self, message):
        self.state.send_web_message(message)

    def websocket_connexion(self):
        return self.state.websocket_connexion(self)

    def communicate_with_ble(self):
        return self.state.communicate_with_ble(self)

    def launch_bluetooth(self):
        self.state.launch_bluetooth(self)

    def communicate_via_websocket(self, expected_message, messages):
        self.state.communicate_via_websocket(
            self, expected_message=expected_message)
        # Effectuer des opérations avec le WebSocket

    def send_message_via_websocket(self, message):
        self.state.send_message_via_websocket(self, message)

    def launch_tts(self, file):
        self.state.launch_tts(self, file)

    def speak_text(self, text):
        self.state.speak_text(self, text)

    def run_nlu(self, text, intent):
        return self.state.run_nlu(self, text, intent)

    def add_appointment(self, data, intent):
        return self.state.add_appointment(self, data, intent)

    def update_appointment_reminder(self, data, intent):
        return self.state.update_appointment_reminder(self, data, intent)


# Utilisation du hub
hub = Hub()
# server.handle_clients()
# # Exemple de scénarios
# while not hub.websocket_connexion():
#     pass


hub.handle_standby()
# Durée en secondes pour les 8 minutes
duration = 8 * 60
# Temps de départ

start_time = time.time()  # Remplacez par votre temps de base
next_time = start_time
time.sleep(1)
standbyInit = False
cardReader = True
while True:
    if isinstance(hub.get_state(), StandbyState):
        hub.send_web_message("Default")
        rfid_trigger.read()  # This will run indefinitely
        card_state = rfid_trigger.get_state()

        is_intro_executed = False
        rfid_trigger.read()  # This will run indefinitely
        card_state = rfid_trigger.get_state()
        if not card_state:
            standbyInit = False
            cardReader = True
        if standbyInit:
            cardReader = False
        my_btn.checking_state()
        button_state = my_btn.pressed

        if button_state:
            hub.handle_button_trigger()

        if card_state and cardReader:
            hub.send_web_message("Connecting")
            hub.handle_rfid_trigger()

        current_time = datetime.now()  # Obtenir le temps actuel

        if time.time() > next_time:
            # Vérifier s'il y a un rappel à la temporalité actuelle
            current_appointment = manager.check_appointment(current_time)
            if current_appointment:
                hub.handle_reminder()
            else:
                for i in range(10):
                    target_time = current_time + timedelta(minutes=i)
                    appointment_exists = manager.check_appointment(target_time)
                    if appointment_exists:
                        hub.handle_reminder()
            base_time = time.time()

            # Attendre 1 minute avant la prochaine vérification
            next_time = base_time + 60
    elif isinstance(hub.get_state(), RecoveryState):

        if not is_intro_executed:
            firstpart = True
            secondpart = True
            thirdpart = True
            fourpart = True
            # hub.launch_bluetooth()
            # btn_value = hub.communicate_with_ble()
            
            btn_value = 0
        
        if btn_value is not None and btn_value > 0:
            if not is_intro_executed:
                hub.launch_tts(
                    "/home/valentin/Desktop/MemoRoom/modules/_Liveo/HUB/TTS/Digital-bell.wav")
                hub.speak_text("Bonjour ! Il semblerait que vous ayez pris " +
                               str(btn_value) + " rendez-vous aujourd’hui. Commençons.")
                hub.send_message_via_websocket("Whisper")
                is_intro_executed = True
            received_message = hub.get_received_message()
            while not received_message:
                received_message = hub.get_received_message()

            if received_message.startswith("PC WhisperRdv#"):
                print("###################    Rdv#   #####################")
                value = received_message.split("Rdv#", 1)[1]
                received_message = None

                intent = "rdv"
                nlu_result = hub.run_nlu(
                    text="je souhaite prendez un rendez-vous chez le médecin le 19 mai à 18h", intent=intent)
                if not nlu_result:
                    hub.speak_text("Je n'ai pas bien compris votre réponse")
                    hub.send_message_via_websocket("Whisper_rdv data_notOK")

                elif firstpart:
                    firstpart = False
                    appointment = hub.add_appointment(nlu_result, intent)
                    hub.speak_text("Vous avez un " + appointment['titre'] + " " + appointment['lieu'] +
                                   " à " + appointment['heure'] + " le " + appointment['date'] + ". Est-ce correct ?")
                    hub.send_message_via_websocket("Whisper_rdv data_OK")
            elif received_message.startswith("PC WhisperBool#"):
                print("###################    Bool#   #####################")
                value = received_message.split("Bool#", 1)[1]
                intent = "bool"
                nlu_result = hub.run_nlu(text="oui", intent=intent)
                if not nlu_result:
                    hub.speak_text(
                        "Je n'ai pas bien compris votre réponse, répétez votre rendez-vous s'il vous plaît.")
                    hub.send_message_via_websocket("Whisper_bool data_notOK")
                    received_message = None
                elif secondpart:
                    secondpart = False
                    hub.speak_text(
                        "Très bien, à quelle heure souhaitez-vous avoir un rappel de votre rendez-vous ?")
                    hub.send_message_via_websocket("Whisper_bool data_OK")
                    received_message = None
            elif received_message.startswith("PC WhisperRemind#"):
                print("###################    Remind#   #####################")

                value = received_message.split("Remind#", 1)[1]
                intent = "remind"
                nlu_result = hub.run_nlu(
                    text="Rappelle-moi de fixer un rendez-vous avec mon avocat le 27 juin à 17h", intent=intent)
                if not nlu_result:
                    hub.speak_text(
                        "Je n'ai pas compris votre réponse, pouvez-vous répéter l'heure de votre rappel ?")
                    hub.send_message_via_websocket("Whisper_remind data_notOK")
                    received_message = None
                elif thirdpart:
                    thirdpart = False
                    appointment_reminder = hub.update_appointment_reminder(
                        nlu_result, intent)
                    hub.send_message_via_websocket("Whisper_remind data_OK")
                    hub.speak_text("C'est noté, ravi d'avoir pu vous aider")
                    received_message = None
                    btn_value = btn_value-1

        else:
            standbyInit = True
            hub.handle_standby()
    elif isinstance(hub.get_state(), ButtonTriggerState):
        hub.speak_text("Bonjour, comment puis-je vous aider ?")
        # hub.send_web_message({"title": "Suppressed"})
        pass
    elif isinstance(hub.get_state(), ReminderModeState):
        current_time = time.time()
        if current_time - start_time >= duration:
            hub.launch_tts(
                "/home/valentin/Desktop/MemoRoom/modules/_Liveo/TTS/Echo.wav")
            start_time = time.time()

        my_btn.checking_state()
        button_state = my_btn.pressed
        if button_state:
            hub.launch_tts(
                "/home/valentin/Desktop/MemoRoom/modules/_Liveo/TTS/Digital-bell.wav")
            if appointment_exists:
                pass
            elif current_appointment:
                pass
            pass  # Sortir de la boucle dès qu'un rendez-vous est trouvé
