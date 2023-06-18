from nlu import Nlu
nlu = Nlu()
nlu.fit()

# Exemple d'utilisation avec un texte
text = "à 21 heures"
parsing = nlu.run(text=text, intent="remind")
print(parsing)
# # Exemple d'utilisation avec un fichier
# file_path = "chemin/vers/le/fichier.txt"
# parsing = nlu.run(file=file_path, intent="choice")
