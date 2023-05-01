import BLE_GATT
from gi.repository import GLib

ubit_address = '0C:B8:15:F8:6E:02'
uart_rx = '6e400002-b5a3-f393-e0a9-e50e24dcca9e'
uart_tx = '6e400003-b5a3-f393-e0a9-e50e24dcca9e'
# uart_rx = '0000aaa2-0000-1000-8000-aabbccddeeff'
# uart_tx = '0000aaa2-0000-1000-8000-aabbccddeeff'


def notify_handler(value):
    print(f"Received: {bytes(value).decode('UTF-8')}")


def send_ping(value):
    print('sending: '+value)
    ubit.char_write(uart_rx, bytes(value, 'utf-8'))
    


ubit = BLE_GATT.Central(ubit_address)
ubit.connect()
value = "value"
ubit.on_value_change(uart_tx, notify_handler)
ubit.char_write(uart_rx, bytes(value, 'utf-8'))
ubit.wait_for_notifications()