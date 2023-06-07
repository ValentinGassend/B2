import time
from pressFileManager.fileManager import ButtonPressCounter
from appointment.appointment import AppointmentManager
import json

base_time = time.time()  # Remplacez par votre temps de base

manager = AppointmentManager('appointments.json')

while True:
    current_time = time.time()  # Calcul du temps actuel
    localtime = time.localtime(current_time)  # Convertir le temps actuel en une structure de temps locale

    # Extraire les éléments de la date de la structure de temps locale
    year = localtime[0]
    month = localtime[1]
    day = localtime[2]
    hour = localtime[3]
    minute = localtime[4]
    second = localtime[5]

    # Vérifier s'il y a un rendez-vous à l'heure actuelle
    target_date = f"{year:04d}-{month:02d}-{day:02d} {hour:02d}:{minute:02d}"
    appointment_exists = manager.check_appointment(target_date)

    if appointment_exists:
        print(f"Un rendez-vous est prévu à la date {target_date}")
    else:
        print(f"Aucun rendez-vous n'est prévu à la date {target_date}")

    # Attendre jusqu'à la prochaine minute pile
    next_time = base_time + 60  # Ajouter 60 secondes pour la prochaine minute

    while time.time() < next_time:
        pass

    # Mettre à jour le temps de base pour la prochaine itération
    base_time = next_time
