# door system 
# MicroPython SH1106 OLED driver
#
# Pin Map I2C for ESP8266
#   - 3v - xxxxxx   - Vcc
#   - G  - xxxxxx   - Gnd
#   - D2 - GPIO 5   - SCK / SCL
#   - D1 - GPIO 4   - DIN / SDA
#   - D0 - GPIO 16  - Res (required, unless a Hardware reset circuit is connected)
#   - G  - xxxxxx     CS
#   - G  - xxxxxx     D/C
#
# Pin's for I2C can be set almost arbitrary
#
from RPi.GPIO import Pin, SoftI2C
from mfrc522 import SimpleMFRC522
from time import sleep_ms, sleep


rdr = SimpleMFRC522(5, 17, 16, 4, 18)  # SCK, MOSI, MISO, RST, SDA
print("\n--> Please present a badge on the reader")
led_green = Pin(2, Pin.OUT)
led_blue = Pin(15, Pin.OUT)
led_red = Pin(14, Pin.OUT)


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

    def displayLoading(self, blinkingCount, led, msDelay):
        for i in range(blinkingCount):
            led.value(1)
            sleep_ms(msDelay)
            led.value(0)
            sleep_ms(msDelay)
        pass

    def displayNotPossible(self):
        # clignotte
        for i in range(2):
            led_red.value(1)
            sleep_ms(200)
            led_red.value(0)
            sleep_ms(200)

    def displayValidation(self, ledToOff=None, ledToOn=None, msDelay=1):
        # clignotte
        if ledToOn:
            if ledToOff:
                ledToOff.value(0)
            ledToOn.value(0)
            sleep_ms(msDelay)
            ledToOn.value(1)


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
        (stat, tag_type) = self.rdr.request(self.rdr.REQIDL)
        if stat == self.rdr.OK:
            (stat, raw_uid) = self.rdr.anticoll()
            if stat == self.rdr.OK:
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
        LedManager().displayLoading(3, led_blue, 200)
        LedManager().displayValidation(ledToOff=led_red,ledToOn=led_blue,msDelay=1500)

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

        led_red.value(0)
        led_green.value(1)

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
        led_green.value(0)
        led_red.value(1)
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
        LedManager.displayNotPossible()
        print("Sorry, i can't open the door because she is locked, use Alban Le Boss's badge for open it")

    def lock(self):
        print("Sorry, door is already lock")

    def unlock(self):
        print("As you want boss, i unlock the door ♥")
        led_red.value(0)
        led_blue.value(1)
        sleep_ms(200)
        led_blue.value(0)
        sleep_ms(200)
        led_blue.value(1)
        sleep_ms(200)
        led_blue.value(0)
        sleep_ms(200)
        led_blue.value(1)
        sleep_ms(200)
        led_blue.value(0)
        sleep_ms(200)
        led_blue.value(1)
        sleep_ms(200)
        led_blue.value(0)
        sleep(1.5)
        led_red.value(1)
        self.context.updateState(ClosedDoorController())


Valentin = DoorController(ClosedDoorController(), led_red, led_green, led_blue, rdr)
led_red.value(1)
led_green.value(0)
led_blue.value(0)
while True:
    Valentin.RfidChecker()

    sleep_ms(10)
