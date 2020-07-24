module.exports = (message, msgSplit, client, config, Discord, connection) => {

    if (msgSplit[0].toLowerCase() != config.prefix + "axe") return;

    if (message.channel.id !== "736145399496179772") {
        message.channel.send("Il faut faire la commande dans le channel forêt !");
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
