import requests
import json
import enum
import serial

initialiseUrl = 'http://localhost:3001/init'
levelUrl = 'http://localhost:3001/level'
ser = serial.Serial("/dev/ttyACM0", 9600)
    
def sendDataToServer(url, data):
    result = requests.post(url, json=data)

    print(result.text)

    result.raise_for_status()

    print(result)

def readSerialInput():
    Str = ser.readline()
    print(Str[0:2])
    # id of the player
    if Str[0:2] == "@@":
        print('Game Over ' + Str[2:])
        data = { 'level': Str[2:]}
        sendDataToServer(levelUrl ,data)
    elif Str[0] == "@":
        print('Setup ' + Str[1])
        data = { 'id': Str[1]}
        sendDataToServer(initialiseUrl,data)

#readSerialInput("@5")

#readSerialInput("@@3")

while True:
    while ser.in_waiting:
        readSerialInput()
