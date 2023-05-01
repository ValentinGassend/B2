class wearableSquelette:
    def __init__(self):
        pass

    def lunchTimer(self):
        pass

    def takeRdv(self):
        pass

    def activeBLE(self):
        pass

    def removeBLE(self):
        pass


class wearableProtocol:
    def __init__(self, State, ble, btn):
        self.ble = ble
        self.btn = btn
        self.currentState = State
        self.currentState.context = self
        pass

    def btnReader(self):
        pass

    def lunchTimer(self):
        pass

    def takeRdv(self):
        pass

    def activeBLE(self):
        pass

    def removeBLE(self):
        pass

    def updateState(self, newState):
        self.currentState = newState
        self.currentState.context = self

class bleBtnNo(wearableProtocol):
    def btnReader(self):
        pass
    pass

class bleBtnTriggered(wearableProtocol):
    pass

class bleIsOn(wearableProtocol):
    pass