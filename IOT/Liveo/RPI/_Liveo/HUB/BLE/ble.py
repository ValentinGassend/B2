import pexpect
import time

class BLE:
    def __init__(self):
        self.child = pexpect.spawn("gatttool -I")
        self.DEVICE = "0C:B8:15:F8:6E:02"  # Replace with your device's MAC address
        self.connected = False
        self.line = ""
        self.btn_value = None
        self.value_Retrived = False

    def connect(self):
        if not self.connected:
            self.child.sendline("connect {}".format(self.DEVICE))
            try:
                self.child.expect("Connection successful", timeout=10)
                self.connected = True
                print("Connexion BLE établie.")
                # Envoi initial du message
                self.send_message("Hello server!")
            except pexpect.exceptions.TIMEOUT:
                print("Échec de la connexion BLE.")

    def disconnect(self):
        if self.connected:
            self.child.sendline("disconnect")
            # self.child.expect("disconnect successfully", timeout=60)
            self.connected = False
            print("BLE est maintenant déconnecté.")

    def send_message(self, message):
        if self.connected:
            encoded_message = message.encode("ascii").hex()
            self.child.sendline("char-write-req 0x0018 {}".format(encoded_message))
            try:
                self.child.expect("Characteristic value was written successfully", timeout=5)
                self.line = self.child.readline().decode()
                if not message =="LED_PONG":
                    print("Message envoyé :", message)
            except pexpect.exceptions.TIMEOUT:
                print("Échec de l'envoi du message.")
                try:
                    self.disconnect()
                except:
                    pass
                self.connect()
                if self.connected:
                    self.send_message(message)
        else:
            print("Pas de connexion BLE établie. Tentative de connexion...")
            self.connect()
            if self.connected:
                encoded_message = message.encode("ascii").hex()
                self.child.sendline("char-write-req 0x0018 {}".format(encoded_message))
                try:
                    self.child.expect("Characteristic value was written successfully", timeout=5)
                    self.line = self.child.readline().decode()
                    if not message =="LED_PONG":
                        print("Message envoyé :", message)
                except pexpect.exceptions.TIMEOUT:
                    print("Échec de l'envoi du message.")
                    try:
                        self.disconnect()
                    except:
                        pass

    def receive_message(self):
        if self.connected:
            try:
                self.line = self.child.readline().decode()
            except:
                print('not able to read lines')
            if "value:" in self.line:
                    hex_data = self.line.split("value: ")[1].strip()
                    byte_array = bytearray.fromhex(hex_data)
                    received_message = byte_array.decode("utf-8")
                    if received_message:
                        self.handle_message(received_message)
            else:
                print("Aucune notification reçue.")
                self.disconnect()
        else:
            print("Pas de connexion BLE établie.")
            self.disconnect()

    def check_connection(self):
        return self.connected
    
    def handle_message(self, content):
        if content == "Hi client!":
            print("Serveur know who i am :)")
            self.send_message("Waiting Data")
        elif content.strip().startswith("pressed_value:"):
            try:
                
                # ATTENTION IL FAUT MODIFIER LA DATA
                # self.btn_value = int(content.split(":")[1].strip())
                self.btn_value = int(1)
                self.value_Retrived = True
                if self.btn_value > 0 :
                    print(f"user trigger btn {self.btn_value} time")
                    self.send_message("delete_data")
                    self.disconnect()
                else: 
                    print("data is empty")
                    self.disconnect()
            except (ValueError, IndexError):
                print("Invalid message format")
        elif content == "No data available" or content == "Data deleted":
            # self.disconnect()
            # print("Disconnected")
            pass

    def check_btn_value(self):
        return self.btn_value
    
    def check_value_retrive(self):
        return self.value_Retrived
    
    def reset_value_retrive(self):
        self.value_Retrived = False
    

class State:
    def check_connection(self, ble):
        raise NotImplementedError()

    def check_acknowledge(self, ble):
        raise NotImplementedError()

    def launch(self, ble):
        raise NotImplementedError()

    def disconnect(self, ble):
        raise NotImplementedError()

    def write_data(self, ble):
        raise NotImplementedError()


class ConnectedState(State):
    def check_connection(self, ble):
        return True

    def check_acknowledge(self, ble):
        pass

    def launch(self, ble):
        print("BLE is already connected")

    def disconnect(self, ble):
        ble.child.sendline("disconnect")
        ble.child.expect("disconnect successfully", timeout=60)
        ble.connected = False
        ble.change_state(DisconnectedState())

    def write_data(self, ble):
        pass


class ConnectingState(State):
    def check_connection(self, ble):
        return False

    def check_acknowledge(self, ble):
        pass

    def launch(self, ble):
        print("BLE is already connecting")

    def disconnect(self, ble):
        ble.child.sendline("disconnect")
        ble.child.expect("disconnect successfully", timeout=60)
        ble.connected = False
        ble.change_state(DisconnectedState())

    def write_data(self, ble):
        pass


class DisconnectedState(State):
    def check_connection(self, ble):
        return False

    def check_acknowledge(self, ble):
        pass

    def launch(self, ble):
        ble.check_connection()
        ble.change_state(ConnectingState())

    def disconnect(self, ble):
        print("BLE is already disconnected")

    def write_data(self, ble):
        pass


def check_BLE_connection(ble_obj, nb_try=3):
    counter = 0
    launched = False
    while True:
        if counter >= nb_try:
            print("Connection Failed")
            return False
        if ble_obj.check_connection():
            print("Connected")
            return True
        counter += 1
        if not launched:
            ble_obj.launch()
            launched = True
        print("Failed, retry ({})".format(counter))


def check_BLE_is_ready(ble_obj, nb_try=3):
    connection_state = check_BLE_connection(ble_obj, nb_try)
    if connection_state:
        ack_state = ble_obj.check_acknowledge()
        return ack_state
    else:
        return False
