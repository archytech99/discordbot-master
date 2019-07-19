const config = require("../config")

module.exports = (client, message) => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setStatus('Made by archytech99')
    /*List of status':
        online
        away
        dnd
        invisible*/
    /*client.user.setPresence({
        game: {
            name: "Simple companion bot server | prefix "+config.bot_prefix
        }
    })*/
    client.user.setPresence({
        game: {
            name: config.bot_prefix+"help",
            type: "LISTENING",
            url : "http://www.youtube.com/url"
        }
    })
  }