const config = require("../config")

module.exports = (client, message) => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setStatus("Made by "+config.author)
    client.user.setPresence({
        game: {
            name: config.bot_prefix+"help",
            type: "LISTENING",
            url : "http://www.youtube.com/url"
        }
    })
  }