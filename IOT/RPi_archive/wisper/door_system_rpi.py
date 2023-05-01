import RPi.GPIO as GPIO
from time import sleep
import mfrc522
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)


rdr = mfrc522.MFRC522()  # SCK, MOSI, MISO, RST, SDA
ledPin_red = 14
ledPin_green = 15
ledPin_blue = 2
GPIO.setup(ledPin_red, GPIO.OUT)
GPIO.setup(ledPin_green, GPIO.OUT)
GPIO.setup(ledPin_blue, GPIO.OUT)



class DoorControllerProtocol:
    def __init__(self):
        pass

    def close(self):
        pass

    def open(self):
        pass

    def lock(self):
        pass

    def unlock(self):
        pass



class LedManager:
    def __init__(self, led=ledPin_red):
        self.led = led

    def displayLoading(self, blinkingCount, led, msDelay):
        for i in range(blinkingCount):
            GPIO.output(led, GPIO.HIGH)
            sleep(msDelay/1000)
            GPIO.output(led, GPIO.LOW)
            sleep(msDelay/1000)
        pass

    def displayNotPossible(self, led = ledPin_red):
        # clignotte
        for i in range(2):
            GPIO.output(led, GPIO.HIGH)
            sleep(0.2)
            GPIO.output(led, GPIO.LOW)
            sleep(0.2)

    def displayValidation(self, ledToOff=None, ledToOn=None, msDelay=1):
        # clignotte
        if ledToOn:
            if ledToOff:
                GPIO.output(ledToOff, GPIO.LOW)
            GPIO.output(ledToOn, GPIO.LOW)
            sleep(msDelay/1000)
            GPIO.output(ledToOn, GPIO.HIGH)

    def LockLoading(self, blinkingCount, led, msDelay):
        for i in range(blinkingCount):
            GPIO.output(led, GPIO.HIGH)
            sleep(msDelay/1000)
            GPIO.output(led, GPIO.LOW)
            sleep(msDelay/1000)
            GPIO.output(led, GPIO.HIGH)
            sleep(msDelay/1000)
            GPIO.output(led, GPIO.LOW)
            sleep(msDelay/1000)
            GPIO.output(led, GPIO.HIGH)
            sleep(msDelay/1000)
            GPIO.output(led, GPIO.LOW)
            sleep(msDelay/1000)
            GPIO.output(led, GPIO.HIGH)
            sleep(msDelay/1000)
            GPIO.output(led, GPIO.LOW)
        pass

class DoorController:
    def __init__(self, State, led_red, led_green, led_blue, rdr):
        self.led_red = led_red
        self.rdr = rdr
        self.led_green = led_green
        self.led_blue = led_blue
        self.currentState = State
        self.currentState.context = self
        pass
    def RfidChecker(self):
        (stat, tag_type) = self.rdr.MFRC522_Request(self.rdr.PICC_REQIDL)
        if stat == self.rdr.MI_OK:
            (stat, raw_uid) = self.rdr.MFRC522_Anticoll()
            if stat == self.rdr.MI_OK:
                print("\nBadge detected!")
                if raw_uid[0] > 200:
                    if not (isinstance(self.currentState, LockedDoorController)):
                        self.lock()
                        sleep(2)
                    else:
                        self.unlock()

                else:
                    self.open()
                    sleep(4)
                    self.close()

    def close(self):
        print("----------------------------------")
        self.currentState.close()

    def open(self):
        print("----------------------------------")
        self.currentState.open()

    def lock(self):
        print("----------------------------------")
        self.currentState.lock()
        LedManager().displayLoading(3, ledPin_blue, 200)
        LedManager().displayValidation(ledToOff=ledPin_red,ledToOn=ledPin_blue,msDelay=1500)

    def unlock(self):
        print("----------------------------------")
        self.currentState.unlock()

    def updateState(self, newState):
        # print("updateState from " + str(self.currentState) + " to " + str(newState))
        self.currentState = newState
        self.currentState.context = self


class DoorControllerSquelette:
    def __init__(self):
        pass

    def close(self):
        print("close from DoorControllerSquelette")

    def open(self):
        print("open from DoorControllerSquelette")

    def lock(self):
        print("lock from DoorControllerSquelette")

    def unlock(self):
        print("unlock from DoorControllerSquelette")


class ClosedDoorController(DoorControllerProtocol):
    def __init__(self):
        pass

    def close(self):
        print("Sorry, door is already close")

    def open(self):
        print("right, i open the door")

        self.context.updateState(OpenedDoorController())

        GPIO.output(ledPin_green, GPIO.HIGH)
        GPIO.output(ledPin_red, GPIO.LOW)

    def lock(self):
        self.context.updateState(LockedDoorController())
        print("Hello boss, door is locked now")

    def unlock(self):
        print("Door is already unlock :)")

class OpenedDoorController(DoorControllerProtocol):
    def __init__(self):
        pass

    def close(self):
        self.context.updateState(ClosedDoorController())
        LedManager().displayValidation(ledPin_green, ledPin_red,500)
        print("Door is closed !")

    def open(self):
        print("Door is already open :)")

    def lock(self):
        print("You have to close the door before locked her")

    def unlock(self):
        print("Door is already unlock :)")


class LockedDoorController(DoorControllerProtocol):
    def __init__(self):
        pass

    def close(self):
        print("Sorry, door is already close")

    def open(self):
        LedManager.displayNotPossible(self)
        print("Sorry, i can't open the door because she is locked, use Alban Le Boss's badge for open it")
        self.context.updateState(LockedDoorController())

    def lock(self):
        print("Sorry, door is already lock")

    def unlock(self):
        LedManager().displayLoading(3, ledPin_blue, 200)
        LedManager().displayValidation(ledPin_blue, ledPin_red,1500)
        print("As you want boss, i unlock the door ♥")
        self.context.updateState(ClosedDoorController())


Valentin = DoorController(ClosedDoorController(), ledPin_red, ledPin_green, ledPin_blue, rdr)
GPIO.output(ledPin_red, GPIO.HIGH)
GPIO.output(ledPin_green, GPIO.LOW)
GPIO.output(ledPin_blue, GPIO.LOW)
while True:
    Valentin.RfidChecker()
    sleep(0.01)