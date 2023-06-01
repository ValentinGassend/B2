import json
from datetime import datetime
import locale

locale.setlocale(locale.LC_TIME, "fr_FR.UTF-8")
class Meeting:
    def __init__(self, filename):
        self.filename = filename

    def add(self, new_data):
        with open(self.filename, 'r+') as file:
            file_data = json.load(file)
            new_data["id"] = len(file_data["rendezvous"]) + 1
            file_data["rendezvous"].append(new_data)
            file.seek(0)
            json.dump(file_data, file, indent=4)

    def remove(self, info):
        with open(self.filename, 'r+') as file:
            file_data = json.load(file)
            for item in file_data["rendezvous"]:
                if info in item['titre']:
                    file_data["rendezvous"].remove(item)
                    break
        with open(self.filename, 'w') as f:
            json.dump(file_data, f, indent=2)

    def update(self, updated_data):
        with open(self.filename, 'r+') as file:
            file_data = json.load(file)
            for item in file_data["rendezvous"]:
                if item['id'] == len(file_data["rendezvous"]):
                    item.update(updated_data)
                    break
        with open(self.filename, 'w') as f:
            json.dump(file_data, f, indent=2)


    def check_current_date(self):
        current_date = datetime.now().strftime("%Y-%m-%d")
        current_time = datetime.now().strftime("%H:%M")
        with open(self.filename, 'r') as file:
            file_data = json.load(file)
            rendezvous = file_data["rendezvous"]
            for rdv in rendezvous:
                rappel_date = datetime.datetime.strptime(rdv["rappel"]["date"], "%Y-%m-%d").date()
                rappel_heure = datetime.datetime.strptime(rdv["rappel"]["heure"], "%H:%M").time()
                rdv_date = datetime.datetime.strptime(rdv["date"], "%Y-%m-%d").date()
                rdv_heure = datetime.datetime.strptime(rdv["heure"], "%H:%M").time()
                
                # Vérifier si l'heure est entre l'heure de rappel et l'heure de rendez-vous
                if rappel_heure <= current_time <= rdv_heure and rappel_date == current_date:
                    # # Le rappel est déclenché
                    # print("Il y a un rendez-vous aujourd'hui :")
                    # print("Date : ", rdv["date"])
                    # print("Heure : ", rdv["heure"])
                    # print("Lieu : ", rdv["lieu"])
                    # print("Titre : ", rdv["titre"])
                    # print("Informations supplémentaires : ", rdv["informations_supplementaires"])
                    return True
