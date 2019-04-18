import requests
import json
import enum

initialiseUrl = 'http://localhost:3001/init'

myGame = None

Arduino light is red
Arduino sense input from IR reader change light to blue
IR read an OK meaning that the number retrieve is the final playerId
Arduino send the ID to raspberry pi signaling the is about to begin
Arduino change light to yellow
raspberry pi read the player Id and then signal Arduino to start the game (beeping)
Arduino turns light to green
Arduino beeps the random number
Arduinon turns another green or purple meaning user need to enter the number
Arduino 
class GameStatus(enum.Enum):
    registering = 1
    beeping = 2
    insertingNumber = 3
    increasingLvl = 4
    awaiting = 5

class Game():
    def __init__(self):
        self.playerId = None
        self.level = 1
        self.delay = 5000 # the delay between beeps in sec
        self.gameStatus = GameStatus.awaiting
    
    def increaseLevel(self):
        self.delay -= 500 # need to decide how to set the delay
        self.level += 1

    def changeGameStatus(self,status):
        self.gameStatus = status

    def setRegisterStatus(self):
        # set the light to **blue** to tell user to register
        # send to the arduino to blue

    def setPlayer(self, playerId):
        self.playerId = playerId

    def setBeepingStatus(self):
        # set the light to **green** to tell user to register
        # send to the arduino to green

def setup():
    myGame = Game()

result = requests.post(initialiseUrl, json=playerInit)

print(result.text)

result.raise_for_status()

print(result)