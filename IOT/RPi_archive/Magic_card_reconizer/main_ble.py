from time import sleep
import ble as ble


try:
  while True:
    ble.send_ping("Alive")
    sleep(1)
except KeyboardInterrupt:
  print("\n")
  ble.send_ping("I'm leaving")
  print("Bye Bye")
except:
  pass