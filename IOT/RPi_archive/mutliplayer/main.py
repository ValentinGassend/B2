# from joystick import joystick



# myjoystick = joystick(12,14,27)

# myjoystick.x()

from crypto import *
from wireless_manager.wireless_manager import *

# RECEPTION DE LA CHAINE DE CARACTERE
entryString = "1000:10,11,20,21#0100:11,12,21,22#0010:12,13,22,23#0001:13,14,23,24"

# décode de la chaine de caractère (dans crypto.py)
decodedString = Decrypt(entryString)

decodedString.decode()

# lecture d'une valeur envoyé par Joytick
listenedValue = "P"


# encode de la chaine de caractère (dans crypto.py)
sendedString = encrypt(listenedValue)

sendedString.encode()


myCustomCommunication = CommunicationCallback()
myServer = WirelessManager(None,myCustomCommunication)