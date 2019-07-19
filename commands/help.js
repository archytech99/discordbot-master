const {RichEmbed} = require('discord.js')
const config = require("../config")

module.exports = message => {
    const embed = new RichEmbed()

    .setColor('#4ac947')
    .setTitle('Daftar perintah ``archytech``')
    // .setDescription('merupakan discord bot pendamping server yang sangat simple')
    //.addBlankField(0)
    .addField('**'+config.bot_prefix+'help**','menampilkan pesan bantuan',0)
    .addField('**'+config.bot_prefix+'kick**','mengeluarkan member dari server',0)
    .addField('**'+config.bot_prefix+'say**','mengulangi pesan yang diketik',0)
    .setFooter('Created by '+config.author+' using discord.js')

    message.channel.send(embed)
}