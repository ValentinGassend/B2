class Decrypt:


    def __init__(self,encodedString, itemSeparator="#",idSeparator=":",rectValueSeparator=","):
        self.encodedString = encodedString
        self.itemSeparator=itemSeparator
        self.idSeparator=idSeparator
        self.rectValueSeparator=rectValueSeparator


    def decode(self):
        self.myArrayOfPad = self.encodedString.split(self.itemSeparator)
        for i in range(self.myArrayOfPad.__len__()):
            self.myArrayOfPad[i]=self.myArrayOfPad[i].split(self.idSeparator)
            for v in range(self.myArrayOfPad[i].__len__()):
                self.myArrayOfPad[i][v]=self.myArrayOfPad[i][v].split(self.rectValueSeparator) 
            # graphics.rect(myArrayOfPad[i][v][0],myArrayOfPad[i][v][1],myArrayOfPad[i][v][2],myArrayOfPad[i][v][3], 1)
            # rect = [self.myArrayOfPad[i][v][0],self.myArrayOfPad[i][v][1],self.myArrayOfPad[i][v][2],self.myArrayOfPad[i][v][3],1]
        print(self.myArrayOfPad)

    def print(self,item):
        print(item)
            


class encrypt:
    def __init__(self,listenValue,id="0010",separator=":"):
        self.listenValue = listenValue
        self.id = id
        self.separator = separator
        self.encodedString = ""
    
    def encode(self):
        self.encodedString = self.id+self.separator+self.listenValue
        self.print(self.encodedString)

    def print (self,item):
        print(item)
