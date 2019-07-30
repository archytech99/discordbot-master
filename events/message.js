const help = require('../commands/help')
const kick = require('../commands/kick')
const config = require('../config')

module.exports = (client, message) => {
    if(message.content[0] === config.bot_prefix) {
        const attr = message.content.substring(1).split(' ')
        const cmd = attr[0]
        
        switch(cmd) {
            case 'help': 
                return help(message)
            case 'kick':
                return kick(message)
            case 'say': {
                const args = message.content.substring(message.content.indexOf(' ') + 1, message.content.length)
                message.channel.send(args)
            }
            break;
         }
    } else {
        if (message.isMentioned(client.user)) {
            message.channel.send("Halo, salam kenal. Ketik ``"+config.bot_prefix+"help`` untuk bantuan.")
        }
    }
}
