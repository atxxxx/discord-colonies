module.exports = (client, config, Discord) => {

    client.on("guildMemberAdd", member => {

        let embed = new Discord.MessageEmbed()
            .setColor("#57b8e2")
            .setTitle("Un nouvel arrivant !")
            .setDescription("<@" + member.id + "> a rejoins le serveur !")
            .setFooter("Bienvenue à toi :)");

        client.guilds.cache.get("700020635258191952").channels.cache.get("701695836744056884").send(embed);
    });
}