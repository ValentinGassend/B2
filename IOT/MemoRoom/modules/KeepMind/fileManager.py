import machine, random # pour la génération du nombre aléatoire


file = open ("hasard.txt", "a")  # fichier ouvert en écriture
file.write(str(random.randint(0, 100000)))  # on ajoute un nombre aléatoire
file.write('\n')   # on passe à la ligne suivante
file.close()   # fermeture du fichier

file = open ("hasard.txt", "r")  # fichier ouvert en lecture
print("Contenu du fichier: ")
print(file.read())    # afichage du contenu du fichier
file.close()   # fermeture du fichier