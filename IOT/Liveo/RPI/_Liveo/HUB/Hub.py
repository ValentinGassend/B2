# Classe de base pour les états du hub
class HubState:
    def handle_message(self, hub):
        pass

    def handle_rfid_trigger(self, hub):
        pass

    def handle_button_trigger(self, hub):
        pass

    def handle_reminder(self, hub):
        pass

# Implémentation de l'état de veille
class StandbyState(HubState):
    def handle_rfid_trigger(self, hub):
        hub.set_state(RecoveryState())

    def handle_button_trigger(self, hub):
        hub.set_state(ButtonTriggerState())

    def handle_reminder(self, hub):
        hub.set_state(ReminderModeState())

    def handle_standby(self, hub):
        print("Erreur : Impossible de rester dans l'état de veille")

# Implémentation de l'état de récupération d'information
class RecoveryState(HubState):
    def handle_button_trigger(self, hub):
        print("Erreur : Impossible de passer en mode déclenchement de bouton en dehors de l'état de veille")

    def handle_reminder(self, hub):
        print("Erreur : Impossible de passer en mode rappel en dehors de l'état de veille")

    def handle_recovery(self, hub):
        print("Erreur : Impossible de rester dans l'état de récupération d'information")

# Implémentation de l'état de déclenchement de bouton
class ButtonTriggerState(HubState):
    def handle_message(self, hub):
        print("Erreur : Impossible de traiter les messages en dehors de l'état de veille")

    def handle_reminder(self, hub):
        print("Erreur : Impossible de passer en mode rappel en dehors de l'état de veille")

    def handle_button_trigger(self, hub):
        print("Erreur : Impossible de rester dans l'état de déclenchement de bouton")

# Implémentation de l'état de mode rappel
class ReminderModeState(HubState):
    def handle_message(self, hub):
        print("Erreur : Impossible de traiter les messages en dehors de l'état de veille")

    def handle_button_trigger(self, hub):
        print("Erreur : Impossible de passer en mode déclenchement de bouton en dehors de l'état de veille")

    def handle_reminder(self, hub):
        print("Erreur : Impossible de rester dans l'état de mode rappel")

# Classe principale du hub
class Hub:
    def __init__(self):
        self.state = StandbyState()

    def set_state(self, state):
        self.state = state

    def handle_message(self):
        self.state.handle_message(self)

    def handle_rfid_trigger(self):
        self.state.handle_rfid_trigger(self)

    def handle_button_trigger(self):
        self.state.handle_button_trigger(self)

    def handle_reminder(self):
        self.state.handle_reminder(self)

    def handle_self_state(self):
        self.state.handle_self_state(self)

# Utilisation du hub
hub = Hub()

# Exemple de scénarios

hub.handle_rfid_trigger()  # Passage à l'état de récupération d'information
hub.handle_button_trigger()  # Affiche l'erreur : Impossible de passer en mode déclenchement de bouton en dehors de l'état de veille
hub.handle_reminder()  # Affiche l'erreur : Impossible de passer en mode rappel en dehors de l'état de veille
hub.handle_self_state()  # Affiche l'erreur : Impossible de rester dans l'état actuel

hub.set_state(StandbyState())  # Retour à l'état de veille

hub.handle_button_trigger()  # Passage à l'état de déclenchement de bouton
hub.handle_rfid_trigger()  # Passage à l'état de récupération d'information
hub.handle_reminder()  # Affiche l'erreur : Impossible de passer en mode rappel en dehors de l'état de veille
hub.handle_self_state()  # Affiche l'erreur : Impossible de rester dans l'état actuel
