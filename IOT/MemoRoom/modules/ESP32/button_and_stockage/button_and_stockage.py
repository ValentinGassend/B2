from btn.btn import button
from KeepMind.fileManager import keepMinder
from time import sleep, sleep_ms, time

myKeepMinder = keepMinder("hasard.txt")
myButton = button(23)
while True:
    if myButton.status():
        actualData = myKeepMinder.read()
        if actualData:
          int(actualData)
          newData = int(actualData) + 1
          print(newData)
          myKeepMinder.write(newData)
        print("true")