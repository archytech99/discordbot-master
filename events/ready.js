const config = require("../config")
const log = require('fancy-log')

module.exports = (client, message) => {
    // console.log(`Logged in as ${client.user.tag}!`)
    log.info(`READY: Logged in as ${client.user.tag}!`)
    client.user.setStatus(`Made by ${config.author}`)
    client.user.setPresence({
        game: {
            name: config.bot_prefix+"help",
            type: "LISTENING",
            url : "http://www.youtube.com/url"
        }
    })
  }