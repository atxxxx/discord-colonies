module.exports = (message, msgSplit, client, config, Discord, connection) => {

    if (msgSplit[0].toLowerCase() != config.prefix + "mine") return;

    if (message.channel.id !== "701720240207167520") {
        message.channel.send("Il faut faire la commande dans le channel mine !");
    }

    connection.query("SELECT * FROM inventory WHERE Member_ID=?", [message.author.id], (error, result) => {

        if (error) {

            console.log("Erreur MySQL - msgMine - \"SELECT * FROM inventory WHERE Member_ID=?\" !");
            return;
        }

        if (result[0].Pickaxe == "Bois") {

            // coal
            let mincoal = 1;
            let maxcoal = 10;
            let coalToAdd = Math.random() * (maxcoal - mincoal) + mincoal;
            let coaluser = result[0].Coal
            // diamond
            let mindiamond = 0;
            let maxdiamond = 0;
            let diamondToAdd = Math.random() * (maxdiamond - mindiamond) + mindiamond;
            let diamonduser = result[0].Diamond
            // gold
            let mingold = 0;
            let maxgold = 0;
            let goldToAdd = Math.random() * (maxgold - mingold) + mingold;
            let golduser = result[0].Gold
            // iron
            let miniron = 0;
            let maxiron = 6;
            let ironToAdd = Math.random() * (maxiron - miniron) + miniron;
            let ironuser = result[0].Iron

            connection.query("UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=? WHERE Member_ID=?", [diamonduser + diamondToAdd, golduser + goldToAdd, ironuser + ironToAdd, coaluser + coalToAdd, message.author.id], (error, result) => {

                if (error) {

                    console.log("Erreur MySQL - msgMine.js - inventory - \"UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=? WHERE Member_ID=?\" !");
                }

                message.react("✅");
            });
        }

        if(result[0].Pickaxe == "Fer") {

            // coal
            let mincoal = 3;
            let maxcoal = 15;
            let coalToAdd = Math.random() * (maxcoal - mincoal) + mincoal;
            let coaluser = result[0].Coal
            // diamond
            let mindiamond = 0;
            let maxdiamond = 2;
            let diamondToAdd = Math.random() * (maxdiamond - mindiamond) + mindiamond;
            let diamonduser = result[0].Diamond
            // gold
            let mingold = 0;
            let maxgold = 4;
            let goldToAdd = Math.random() * (maxgold - mingold) + mingold;
            let golduser = result[0].Gold
            // iron
            let miniron = 0;
            let maxiron = 6;
            let ironToAdd = Math.random() * (maxiron - miniron) + miniron;
            let ironuser = result[0].Iron

            connection.query("UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=? WHERE Member_ID=?", [diamonduser + diamondToAdd, golduser + goldToAdd, ironuser + ironToAdd, coaluser + coalToAdd, message.author.id], (error, result) => {

                if (error) {

                    console.log("Erreur MySQL - msgMine.js - inventory - IronPickaxe \"UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=? WHERE Member_ID=?\" !");
                }

                message.react("✅");
            });

        }

    });
}