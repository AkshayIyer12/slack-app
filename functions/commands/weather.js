const lib = require('lib')({token: process.env.STDLIB_TOKEN})
/**
* /weather
*
*   Basic "Weather" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @param {object} data The hard-coded json data
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, data = {
  "coord": {
    "lon": 77.6,
    "lat": 12.98
  },
  "weather": [{
    "id": 300,
    "main": "Drizzle",
    "description": "light intensity drizzle",
    "icon": "09n"
  }],
  "base": "stations",
  "main": {
    "temp": 295.15,
    "pressure": 1011,
    "humidity": 100,
    "temp_min": 295.15,
    "temp_max": 295.15
  },
  "visibility": 5000,
  "wind": {
    "speed": 2.6,
    "deg": 80
  },
  "clouds": {
    "all": 75
  },
  "dt": 1504990800,
  "sys": {
    "type": 1,
    "id": 7823,
    "message": 0.2198,
    "country": "IN",
    "sunrise": 1504917521,
    "sunset": 1504961664
  },
  id: 1277333,
  name: "Bangalore",
  "cod": 200
}, callback) => {
  callback(null, {
    response_type: 'in_channel',
    text: `Hello, <@${user}>...\nYou said: ${data.name}`
  })
}
