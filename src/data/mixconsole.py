#!/usr/bin/python3

console_txt = ""
with open("./preconsole.txt", "r") as file:
    console_txt += file.read()

with open("./hello_app.txt", "r") as file:
    app_cv = file.read().split("\n")
    if app_cv[-1] == "":
        app_cv = app_cv[0:-1]
    
    for sentence in app_cv:
        console_txt+="$$$"+sentence+"\n"

with open("./console.txt", "w") as file:
    file.write(console_txt)
print("The console.txt file has been prepared!")