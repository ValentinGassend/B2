from machine import Pin

# 1) Ne pas penser aux états

# 2) Penser à l'ensemble du systeme

# 3) Implémenter le squelette d'une classe qui représente le systeme

# 4) Définir le protocol/interface que les états du systeme devront respecter

#5) Copier/Coller l'ensemble des fonctions du systeme dans le protocol/interface

# 6) Ajouter une propriété du type du systeme dans le protocol (cette propriété est le contexte)

# 7) Définir des états conformes au protocol

# 8) Ajouter une propriété "currentState" et une fonction "updateState(newState)" à la classe representant le systeme



class RgbLedSquelette:
    def __init__(self):
        pass
    def cardReconized(self):
        pass
    def cardUnreconized(self):
        pass



class RgbLedProtocol:
    def __init__(self):
        pass
    def cardReconized(self, g, r, b):
        pass
    def cardUnreconized(self):
        pass


class EnabledRbgLed(RgbLedProtocol):
    def __init__(self, g, r, b, value):
        self.value = value
        #todo : switch des détéctions de couleur → management RBG
        pass
    def cardReconized(self, g, r, b, value):
        self.value = bytes(value).decode('UTF-8')
        g.off()
        r.off()
        b.off()
        if self.value == "background\n":
            return
        if self.value == "hydre\n":
            g.on()
    def cardUnreconized(self):
        self.context.updateState(DisabledRbgLed())

class DisabledRbgLed(RgbLedProtocol):
    def __init__(self):
        pass
    def cardReconized(self, g, r, b, value):
        self.context.updateState(EnabledRbgLed(g, r, b, value))
    def cardUnreconized(self):
        pass



class RbgLedManager:
    def __init__(self, State):
        self.g = Pin(17, Pin.OUT)
        self.r = Pin(16, Pin.OUT)
        self.b = Pin(18, Pin.OUT)
        self.currentState = State
        self.currentState.context = self
        
        
    def cardReconized(self, value):
        self.currentState.cardReconized(self.g,self.r,self.b, value)
        
    def cardUnreconized(self):
        self.r.off()
        self.g.off()
        self.b.off()
        self.currentState.cardUnreconized()
        
    def updateState(self, newState):
        self.currentState = newState
        self.currentState.context = self
        
        
        
led = RbgLedManager(DisabledRbgLed())

Pin(17, Pin.OUT).off()
Pin(16, Pin.OUT).off()
Pin(18, Pin.OUT).off()