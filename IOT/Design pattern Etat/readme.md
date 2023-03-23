# Regles pour coder le design pattern Etat:


 

- 1 - Ne pas penser aux états <br/><br/>

- 2 - Penser à l'ensemble du systeme<br/><br/>

- 3 - Implémenter le squelette d'une classe qui représente le systeme<br/><br/>

- 4 - Définir le protocol/interface que les états du systeme devront respecter<br/><br/>

- 5 - Copier/Coller l'ensemble des fonctions du systeme dans le protocol/interface<br/><br/>

- 6 - Ajouter une propriété du type du systeme dans le protocol (cette propriété est le contexte)<br/><br/>

- 7 - Définir des états conformes au protocol<br/><br/>

- 8 - Ajouter une propriété "currentState" et une fonction "updateState(newState)" à la classe representant le systeme<br/><br/>


**Note :**
- Une fonction n'execute que sa fonctionnalité.<br/><br/>
- Dissocier les actions dans des classe différentes.<br/><br/>
- Separer les classes dans des fichiers différentes.<br/><br/>
- Savoir jauger le niveau de détail des fonctions.<br/><br/>



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