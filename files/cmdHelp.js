module.exports = (message, msgSplit, client, config, Discord, connection) => {

    if (msgSplit[0].toLowerCase() != config.prefix + "help") return;

    let embed = new Discord.MessageEmbed()
        .setColor("#57b8e2")
        .setTitle(message.author.username + " - Help")
        .setDescription("**Commandes du joueur :**\n" +
            "`+inventory`, `+mine`, `+craft`"
        );

    message.channel.send(embed);
}