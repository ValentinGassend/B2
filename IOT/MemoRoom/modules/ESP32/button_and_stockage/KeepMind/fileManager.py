import machine, random # pour la génération du nombre aléatoire


class keepMinder:
    def __init__(self,name):
        self.fileName =name  # fichier ouvert en écriture
  # fermeture du fichier
    def read(self):
    
        self.file = open(self.fileName, "r")
        content = self.file.read()
        print("content :")
        print(content)
        self.end()
        return content

    def write(self, data):
        self.file = open(self.fileName, "w")
        print("this data will be input :" + str(data))
        self.file.write(str(data))
        self.end()

    def end(self):
        self.file.close()