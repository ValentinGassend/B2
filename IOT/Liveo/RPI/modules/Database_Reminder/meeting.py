
import json
class Meeting:
    def __init__(self, filename):
        self.filename = filename
        pass

    def add(self,new_data):
        # Python program to update

        with open(self.filename,'r+') as file:
            # First we load existing data into a dict.
            file_data = json.load(file)
            # Join new_data with file_data inside emp_details
            file_data["rendezvous"].append(new_data)
            # Sets file's current position at offset.
            file.seek(0)
            # convert back to json.
            json.dump(file_data, file, indent = 4)        
        pass

    def remove(self, info):
        with open(self.filename,'r+') as file:
            file_data = json.load(file)
            print(file_data)
            for item in file_data["rendezvous"]:
                # print(item)
                if info in item['titre']:
                    print("présente")
                    print(item["id"])
                    file_data["rendezvous"].pop(item["id"])
            
            
            print(file_data)
        with open(self.filename, 'w') as f:
            f.write(json.dumps(file_data, indent=2))
        pass

        
NLU_output = {"id":3,
        "date":"",
        "heure": "",
        "lieu": "",
        "titre":"Sortie aux parcs",
        "informations_supplementaires":""
        }
myMeetingManager = Meeting('./Database_Reminder/data.json')
myMeetingManager.add(NLU_output)

Titre_to_delete = "Sortie aux parcs"
myMeetingManager.remove(Titre_to_delete)
