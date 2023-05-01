from clientWS import *

client = ClientWS("ws://192.168.43.140:80")


def displayMessage(message):
    print(message)

client.addMessageFunction(displayMessage)

client.start()
try:
    while True: 
        if client.isConnected:
            client.sendMessage("blabla")
except:
    pass