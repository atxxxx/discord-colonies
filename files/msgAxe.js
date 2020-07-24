const moment = require("moment");

module.exports = (message, msgSplit, client, config, Discord, connection) => {

    if (msgSplit[0].toLowerCase() != config.prefix + "axe") return;

    if (message.channel.id !== "736145399496179772") {

        message.channel.send("Il faut faire la commande dans le channel forêt !");
        return;
    }

    if (!client.cooldowns.has("axe")) client.cooldowns.set("axe", new Discord.Collection());
    if (!client.cooldowns.get("axe").has(message.author.id)) {

        client.cooldowns.get("axe").set(message.author.id, message.createdTimestamp);

    } else {

        if ((client.cooldowns.get("axe").get(message.author.id) + (5 * 60 * 1000)) > message.createdTimestamp) {

            if (!message.member.hasPermission("ADMINISTRATOR")) {

                let mins = moment((client.cooldowns.get("axe").get(message.author.id) + (5 * 60 * 1000)) - message.createdTimestamp).format("mm");
                let secs = moment((client.cooldowns.get("axe").get(message.author.id) + (5 * 60 * 1000)) - message.createdTimestamp).format("ss");

                message.channel.send(":x: **Il te faut attendre encore " + mins + " minute et " + secs + " secondes pour pouvoir recouper couper du bois !**");
                return;
            }

        } else {

            client.cooldowns.get("axe").set(message.author.id, message.createdTimestamp);
        }
    }

    connection.query("SELECT * FROM inventory WHERE Member_ID=?", [message.author.id], (error, result) => {

        if (error) {

            console.log("Erreur MySQL - msgMine - \"SELECT * FROM inventory WHERE Member_ID=?\" !");
            return;
        }

        if (result[0].Axe == "Bois") {

            let woodToAdd = 5
            let wooduser = result[0].Wood

            connection.query("UPDATE inventory SET Wood=? WHERE Member_ID=?", [wooduser + 2, message.author.id], (error, result) => {

                if (error) {

                    console.log("Erreur MySQL - msgAxe.js - inventory - \"UPDATE inventory SET Wood=? WHERE Member_ID=?\" !");
                }

                message.react("✅");
            });
        }
    });
}
