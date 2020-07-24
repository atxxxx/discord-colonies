module.exports = (message, msgSplit, client, config, Discord, connection) => {

    if (msgSplit[0].toLowerCase() != config.prefix + "clear") return;

    let count = msgSplit[1];

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        message.channel.send(":x: **Tu ne peux pas faire ça !**\nIl te faut la permission *Gérer les messages* !");
        return;
    }

    if (!count) {

        message.channel.send(":x: **Veuillez spécifier le nombre de messages à supprimer !**");
        return;
    }

    if (isNaN(count)) {

        message.channel.send(":x: **Veuillez spécifier un nombre valide !**");
        return;
    }

    if (count < 1 || count > 100) {

        message.channel.send(":x: **Veuillez spécifier un chiffre entre 1 et 100 !**");
        return;
    }

    message.delete().then(() => {

        message.channel.bulkDelete(parseInt(count)).then(msgs => {

            message.channel.send("`" + msgs.size + " messages`** ont été supprimés !**").then(msg => {

                setTimeout(() => {

                    if (msg.deleted) return;
                    msg.delete();

                }, 5 * 1000)
            });
        });
    });
}