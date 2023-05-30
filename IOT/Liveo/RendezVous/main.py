from WebSocket.MyWSClient import WSClient
from PyWhisperCpp.Myassistant import MyAssistant
import keyboard
neverStarted = True
# Adresse IP et port du serveur
server_address = '192.168.1.16'
server_port = 8765

# Création de l'instance du client
client = WSClient(server_address, server_port)
Id = "PC"


def MyCustomFunction(data):
    print(data)
    client.send_message(Id + " Whisper #"+data)
    my_assistant.close()

my_assistant = False
previousResponse = False
while True:
    
    if neverStarted:
        neverStarted = False
        client.connect()
        client.send_message('Connected')
    # Réception de la réponse du serveur
    response = str(client.receive_message())
    
    if not previousResponse == response:
        print("Réponse du serveur : '"+response+"'")
    previousResponse = response
    if response == "ID":
        print("Message envoyé au serveur : '" + Id+"'")
        client.send_message(Id)
    if response == "Whisper":
        my_assistant = MyAssistant(model='tiny', commands_callback=MyCustomFunction,
                                n_threads=3, input_device=0, q_threshold=6)
        my_assistant.start()
    if response =="Whisper data_recieved":
        my_assistant.close()
    if KeyboardInterrupt==True:
        client.close()
        if my_assistant:
            my_assistant.close()
        neverStarted = True
    
        break
    # else:
    #     print("Wasn't the requested response from Server")
    #     print("serveur will shutdown")
    #     client.close()       
    # client.close()


