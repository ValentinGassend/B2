# 1) Faire la classe métier (qui gère la complexité de la tâche)
# 
# 2) Identifier les actions devant être déléguées (ici l'accelero est en haut ou en bas: quoi faire?)
# 
# 3) Créer un protocol/interface/Classe Mere qui impose l'implémentation des actions identifiées précédemment (chacune de ces méthodes a comme premier parametre un parametre du type de la classe métier)
# 
# 4) Créer un objet conforme au delegate créé
# 
# 5) Ajouter une variable 'delegate' dans la classe métier. Cette variable 'delegate' est du type du protocol
# 
# 6) Utiliser les methodes de l'objet 'delegate' dans tous les endroits identifiés au point 2 pour déléguer les actions (passer self/this au premier parametre de cette fonction afin d'identifier l'objet qui emet la délégation du côté de notre délégué)
# 
# 7) Instancier l'objet conforme au delegate et l'affecter à la propriété delegate de notre objet métier


class lecteurRFID:
    def init(self, delegate=Null):
        self.delegate = delegate
    
    def read(self):
        # tout le truc de lecture de badge
        #detection de badge
        
        self.delegate(self, badgeID)
        
        pass
    
    
class lecteurRFIDDelegate:
    
    def badgeIdentifier(self,lecteurRFID:lecteurRFID, badgeID):
        pass
    def Locker (self,lecteurRFID:lecteurRFID):
        pass
    def Unlocker (self,lecteurRFID:lecteurRFID):
        pass
    def MacronExplosion (self,lecteurRFID:lecteurRFID):
        pass
    
    
class DoorLocker:lecteurRFIDDelegate:
    def badgeIdentifier(self,lecteurRFID:lecteurRFID, badgeID):
        switch badgeID:
            case "A":
                self.Locker(lecteurRFID)
                break
            case "B":
                self.Unlocker(lecteurRFID)
                break
            case "C":
                self.MacronExplosion(lecteurRFID)
                break
            default:
                #ne fait rien
                break
   
    def Locker (self,lecteurRFID:lecteurRFID):
        #print("haha your trapped, find the key to exit (there is no key, CHEH)")
    def Unlocker (self,lecteurRFID:lecteurRFID):
        #print("For unlock a door without key you can only be the GOD, then Welcome Alban")
    def MacronExplosion (self,lecteurRFID:lecteurRFID):
        #print("MACRON DESTITUTION, MACRON DECAPITATION, MACRON... ho putain... EXPLOSION, on va lui exploser sa gueule à ce dicatateur !")
        #print("calme toi janine...")
    
    

maPorte = DoorLocker()
monModuleRFID = lecteurRFID(maPorte())
