# This is a sample Python script.

# Press Maj+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')


# See PyCharm help at https://www.jetbrains.com/help/pycharm/

class CarProtocole:

    def __init__(self):
        self.context = partiallyOnCar()

    def tournerClefDeContactNiveau1(self):
        pass

    def tournerClefDeContactPourDemarrage(self):
        pass

    def couperLeMoteur(self):
        pass

    def retirerClef(self):
        pass

    def allumerLaRadio(self):
        pass

    def avancer(self):
        pass

    def reculer(self):
        pass

    def allumerClim(self):
        pass

    def couperClim(self):
        pass

    def ouvrirLesFenetres(self):
        pass


class Car(CarProtocole):

    def __init__(self, State):
        self.currentState = State
        self.currentState.context = self
        pass

    def tournerClefDeContactNiveau1(self):
        print("tournerClefDeContactNiveau1 from Car")
        self.currentState.tournerClefDeContactNiveau1()

    def tournerClefDeContactPourDemarrage(self):
        print("tournerClefDeContactPourDemarrage from Car")
        self.currentState.tournerClefDeContactPourDemarrage()


    def couperLeMoteur(self):
        print("couperLeMoteur from Car")
        self.currentState.couperLeMoteur()


    def retirerClef(self):
        print("retirerClef from Car")
        self.currentState.retirerClef()


    def allumerLaRadio(self):
        print("allumerLaRadio from Car")
        self.currentState.allumerLaRadio()


    def avancer(self):
        print("avancer from Car")
        self.currentState.avancer()


    def reculer(self):
        print("reculer from Car")
        self.currentState.reculer()


    def allumerClim(self):
        print("allumerClim from Car")
        self.currentState.allumerClim()


    def couperClim(self):
        print("couperClim from Car")
        self.currentState.couperClim()


    def ouvrirLesFenetres(self):
        print("ouvrirLesFenetres from Car")
        self.currentState.ouvrirLesFenetres()


    def updateState(self, newState):
        print("updateState from "+str(self.currentState) + " to " + str(newState))
        self.currentState = newState
        self.currentState.context = self



class CarSquelette:

    def __init__(self):
        pass

    def tournerClefDeContactNiveau1(self):
        print("tournerClefDeContactNiveau1 from CarSquelette")

    def tournerClefDeContactPourDemarrage(self):
        print("tournerClefDeContactPourDemarrage from CarSquelette")

    def couperLeMoteur(self):
        print("couperLeMoteur from CarSquelette")

    def retirerClef(self):
        print("retirerClef from CarSquelette")

    def allumerLaRadio(self):
        print("allumerLaRadio from CarSquelette")

    def avancer(self):
        print("avancer from CarSquelette")

    def reculer(self):
        print("reculer from CarSquelette")

    def allumerClim(self):
        print("allumerClim from CarSquelette")

    def couperClim(self):
        print("couperClim from CarSquelette")

    def ouvrirLesFenetres(self):
        print("ouvrirLesFenetres from CarSquelette")


class sleppingCar(CarProtocole):

    def __init__(self):
        pass

    def tournerClefDeContactNiveau1(self):
        print("tournerClefDeContactNiveau1 from sleppingCar")

    def tournerClefDeContactPourDemarrage(self):
        print("tournerClefDeContactPourDemarrage from sleppingCar")

    def couperLeMoteur(self):
        print("couperLeMoteur from sleppingCar")

    def retirerClef(self):
        print("retirerClef from sleppingCar")

    def allumerLaRadio(self):
        print("allumerLaRadio from sleppingCar")

    def avancer(self):
        print("avancer from sleppingCar")

    def reculer(self):
        print("reculer from sleppingCar")

    def allumerClim(self):
        print("allumerClim from sleppingCar")

    def couperClim(self):
        print("couperClim from sleppingCar")

    def ouvrirLesFenetres(self):
        print("ouvrirLesFenetres from sleppingCar")


class fullyOnCar(CarProtocole):

    def __init__(self):

        pass

    def tournerClefDeContactNiveau1(self):
        print("tournerClefDeContactNiveau1 from fullyOnCar")

    def tournerClefDeContactPourDemarrage(self):
        print("tournerClefDeContactPourDemarrage from fullyOnCar")

    def couperLeMoteur(self):
        print("couperLeMoteur from fullyOnCar")

    def retirerClef(self):
        print("retirerClef from fullyOnCar")
        self.context.updateState(partiallyOnCar())

    def allumerLaRadio(self):
        print("allumerLaRadio from fullyOnCar")

    def avancer(self):
        print("avancer from fullyOnCar")

    def reculer(self):
        print("reculer from fullyOnCar")

    def allumerClim(self):
        print("allumerClim from fullyOnCar")

    def couperClim(self):
        print("couperClim from fullyOnCar")

    def ouvrirLesFenetres(self):
        print("ouvrirLesFenetres from fullyOnCar")


class partiallyOnCar(CarProtocole):

    def __init__(self):
        pass

    def tournerClefDeContactNiveau1(self):
        print("tournerClefDeContactNiveau1 from partiallyOnCar")

    def tournerClefDeContactPourDemarrage(self):
        print("tournerClefDeContactPourDemarrage from partiallyOnCar")

    def couperLeMoteur(self):
        print("couperLeMoteur from partiallyOnCar")

    def retirerClef(self):
        print("retirerClef from partiallyOnCar")

    def allumerLaRadio(self):
        print("allumerLaRadio from partiallyOnCar")

    def avancer(self):
        print("avancer from partiallyOnCar")

    def reculer(self):
        print("reculer from partiallyOnCar")

    def allumerClim(self):
        print("allumerClim from partiallyOnCar")

    def couperClim(self):
        print("couperClim from partiallyOnCar")

    def ouvrirLesFenetres(self):
        print("ouvrirLesFenetres from partiallyOnCar")


Titine = Car(fullyOnCar())
Titine.avancer()
Titine.reculer()
Titine.retirerClef()
Titine.reculer()
