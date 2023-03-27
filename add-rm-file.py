import os


def addWantRead(user_name,text):
    pathFile = f"want-read-{user_name}.txt"
    if os.path.isfile(pathFile):
        file = open(pathFile, "r", encoding='utf-8')
        lines = file.readlines()
        for line in lines:
            if text in line:
                  return False
        fileNew = open(pathFile, "a+", encoding='utf-8')
        fileNew.write(f"{text}\n")
    else: 
        file = open(pathFile, "w+", encoding='utf-8')
        file.write(f"{text}\n")


def rmWantRead(user_name,text):
    pathFile = f"want-read-{user_name}.txt"
    if os.path.isfile(pathFile):
        newLines = ""
        file = open(pathFile, "r", encoding='utf-8')
        lines = file.readlines()
        for line in lines:
            if text == line:
                newLines+=f"{line}\n"
        fileNew = open(pathFile, "w+", encoding='utf-8')
        fileNew.write(newLines)
    else: print("File not found!")
       
       
