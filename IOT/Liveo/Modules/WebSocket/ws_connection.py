import socket
from websocket import WebSocket
import select


class ClientClosedError(Exception):
    pass


class WebSocketConnection:
    def __init__(self, addr, s, close_callback):
        self.client_close = False
        self._need_check = False

        self.address = addr
        self.socket = s
        self.ws = WebSocket(s, True)
        self.poll = select.poll()
        self.close_callback = close_callback

        self.socket.setblocking(False)
        self.poll.register(self.socket, select.POLLIN)

    def read(self):
        poll_events = self.poll.poll(0)

        if not poll_events:
            return

        # Check the flag for connection hung up
        if poll_events[0][1] & select.POLLHUP:
            self.client_close = True

        msg_bytes = None
        try:
            msg_bytes = self.ws.read()
        except OSError:
            self.client_close = True

        # If no bytes => connection closed. See the link below.
        # http://stefan.buettcher.org/cs/conn_closed.html
        if not msg_bytes or self.client_close:
            raise ClientClosedError()

        return msg_bytes

    def write(self, msg):
        try:
            self.ws.write(msg)
        except OSError:
            self.client_close = True

    def is_closed(self):
        return self.socket is None

    def close(self):
        print("Closing connection.")
        self.poll.unregister(self.socket)
        self.socket.close()
        self.socket = None
        self.ws = None
        if self.close_callback:
            self.close_callback(self)