module.exports = message => {
    const member = message.mentions.members.first()

    if (!member) {
        return message.channel.send(
            "Siapa yang kamu coba tendang? Kamu harus menyebutkan nama user!"
        )
    }

    if (!member.kickable) {
        return message.channel.send("Saya tidak dapat menendang user ini. Maaf!")
    }

    return member
    .kick()
    .then(() => message.channel.send(`${member.user.tag} telah dikeluarkan.`))
    .catch(error => message.channel.send("Maaf, terjadi kesalahan."))
}