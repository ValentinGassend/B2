
class Led:
    def __init__(self,blue,green,red):
        self.blue = blue
        self.green = green
        self.red = red
    def on_blue(self):
        self.blue.on()
        self.green.off()
        self.red.off()
        
    def blue(self):
        self.blue.on()
        self.green.off()
        self.red.off()
    def on_green(self):
        self.blue.off()
        self.green.on()
        self.red.off()
    def red(self):
        self.blue.off()
        self.green.off()
        self.red.on()
    def off(self):
        self.blue.off()
        self.red.off()
        self.green.off()