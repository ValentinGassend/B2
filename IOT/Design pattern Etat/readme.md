# Regles pour coder le design pattern Etat:


 

* 1) Ne pas penser aux états
* 
* 2) Penser à l'ensemble du systeme
* 
* 3) Implémenter le squelette d'une classe qui représente le systeme
* 
* 4) Définir le protocol/interface que les états du systeme devront respecter
* 
* 5) Copier/Coller l'ensemble des fonctions du systeme dans le protocol/interface
* 
* 6) Ajouter une propriété du type du systeme dans le protocol (cette propriété est le contexte)
* 
* 7) Définir des états conformes au protocol
* 
* 8) Ajouter une propriété "currentState" et une fonction "updateState(newState)" à la classe representant le systeme


 

# Implémenter en python le model suivant:


 

class Car

methodes:

- tournerClefDeContactNiveau1()

- tournerClefDeContactPourDemarrage()

- couperLeMoteur()

- retirerClef()


 

- allumerLaRadio()

- avancer()

- reculer()

- allumerClim()

- couperClim()

- ouvrirLesFenetres()