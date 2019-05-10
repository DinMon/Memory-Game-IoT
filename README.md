# Memory-Game-IoT
A game where user guesses number of beeps using Arduino and Raspbery Pi

The Raspberry Pi 3 will be running an Express server and the python to send data to nodejs code. The python script will be responsible in retrieving data from arduino using serial port and posting it to the webserver using HTTP post. On message received from python code, the web server will act according, i.e if user id is sent, the web server will initialise the game as in-play mode which trigger the web page to change showing the player and the level. At the arduino level, a sketch is implemented which sense IR input to gather the level of the player or the guess number after a random buzzer beep is played. After each guess number, the number is evaluated with the correct answer, if it matches users proceed to next level after obtaining 3 correct answer. However, if a wrong answer is inserted, the level is sent directly through serial port to the Raspberry Pi 3 which then save to a database and displayed on the web page.

## Running Raspberry Pi Webserver
1. First `cd` into the root directory and run `PORT=3001 npm start`. This will start the Express server that will be used by the react app. Note: PORT 3001 is used to avoid both react and express server running on the same PORT 3000.
2. Next `cd` in the `client` directory where the react app is found. Run `npm start` and that should start the react app.

**Issues: If you find any issues try to run those commands**
* Delete the node_modules which call all the package dependencies by running `rm -rf node_modules`.
* Then, install all the dependencies again by running `npm install`.

## Client 1: Reading Serial Input and publishing to server

1. `cd` to the directory where the python code is, and run `python ` and the name of the file. **Note:** Ensure that the port set within the python script matches the serial port name from where the Raspberry Pi 3 is reading.

The link of the Memory Game Project working is below:
https://www.youtube.com/watch?v=SwQMaHdNNCM
