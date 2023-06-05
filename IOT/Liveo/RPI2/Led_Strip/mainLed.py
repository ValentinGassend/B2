from led import LedMode
from rpi_ws281x import Color
# Instanciation de la classe LedMode avec les couleurs des LED en argument
led_mode = LedMode([Color(164, 193, 255, 0)])

# Exemple : Traitement des messages
message = "LED_rappel"
try:
    while True:
        led_mode.handle_message(message)
except KeyboardInterrupt:
    led_mode.handle_message("LED_off")