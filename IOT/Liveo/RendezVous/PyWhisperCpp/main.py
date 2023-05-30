def run_assistant():
    # Créez une instance de l'assistant
    assistant = MyAssistant()

    # Démarrez l'assistant
    assistant.start()

    # Attendez un retour
    time.sleep(5)

    # Arrêtez l'assistant
    assistant.close()

    # Attendez 5 secondes
    time.sleep(5)

    # Redémarrez l'assistant
    assistant.start()
