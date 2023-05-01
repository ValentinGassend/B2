1) Faire la classe métier (qui gère la complexité de la tâche)

2) Identifier les actions devant être déléguées (ici l'accelero est en haut ou en bas: quoi faire?)

3) Créer un protocol/interface/Classe Mere qui impose l'implémentation des actions identifiées précédemment (chacune de ces méthodes a comme premier parametre un parametre du type de la classe métier)

4) Créer un objet conforme au delegate créé

5) Ajouter une variable 'delegate' dans la classe métier. Cette variable 'delegate' est du type du protocol

6) Utiliser les methodes de l'objet 'delegate' dans tous les endroits identifiés au point 2 pour déléguer les actions (passer self/this au premier parametre de cette fonction afin d'identifier l'objet qui emet la délégation du côté de notre délégué)

7) Instancier l'objet conforme au delegate et l'affecter à la propriété delegate de notre objet métier