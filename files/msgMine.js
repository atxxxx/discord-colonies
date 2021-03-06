const moment = require("moment");

module.exports = (message, msgSplit, client, config, Discord, connection) => {

    if (msgSplit[0].toLowerCase() != config.prefix + "mine") return;

    if (message.channel.id !== "701720240207167520") {

        message.channel.send("Il faut faire la commande dans le channel mine !");
        return;
    }

    if (!client.cooldowns.has("mine")) client.cooldowns.set("mine", new Discord.Collection());
    if (!client.cooldowns.get("mine").has(message.author.id)) {

        client.cooldowns.get("mine").set(message.author.id, message.createdTimestamp);

    } else {

        if ((client.cooldowns.get("mine").get(message.author.id) + (5 * 60 * 1000)) > message.createdTimestamp) {

            if (!message.member.hasPermission("ADMINISTRATOR")) {

                let mins = moment((client.cooldowns.get("mine").get(message.author.id) + (5 * 60 * 1000)) - message.createdTimestamp).format("m");
                let secs = moment((client.cooldowns.get("mine").get(message.author.id) + (5 * 60 * 1000)) - message.createdTimestamp).format("ss");

                message.channel.send(":x: **Il te faut attendre encore " + mins + " minutes et " + secs + " secondes pour pouvoir reminer !**");
                return;
            }

        } else {

            client.cooldowns.get("mine").set(message.author.id, message.createdTimestamp);
        }
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
            // pierre 
            let minpierre = 0;
            let maxpierre = 5;
            let pierreToAdd = Math.random() * (maxpierre - minpierre) + minpierre;
            let pierreuser = result[0].Rock

            connection.query("UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=?, Rock=? WHERE Member_ID=?", [diamonduser + diamondToAdd, golduser + goldToAdd, ironuser + ironToAdd, coaluser + coalToAdd, pierreuser + pierreToAdd, message.author.id], (error, result) => {

                if (error) {

                    console.log("Erreur MySQL - msgMine.js - inventory - \"UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=? WHERE Member_ID=?\" !");
                }

                message.react("✅");
            });
        }

        if (result[0].Pickaxe == "Fer") {

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
            // atitix
            let minatitix = 0;
            let maxatitix = 1;
            let atitixToAdd = Math.random() * (maxatitix - minatitix) + minatitix
            let atitixuser = result[0].Atitix
            // pierre 
            let minpierre = 0;
            let maxpierre = 9;
            let pierreToAdd = Math.random() * (maxpierre - minpierre) + minpierre;
            let pierreuser = result[0].Rock
            // Mythril
            let minmythril = 0;
            let maxmythril = 2;
            let mythrilToAdd = Math.random() * (maxmythril - minmythril) + minmythril;
            let mythriluser = result[0].Mythril


            connection.query("UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=?, Atitix=?, Rock=?, Mythril=? WHERE Member_ID=?", [diamonduser + diamondToAdd, golduser + goldToAdd, ironuser + ironToAdd, coaluser + coalToAdd, atitixuser + atitixToAdd, pierreuser + pierreToAdd, mythriluser + mythrilToAdd, message.author.id], (error, result) => {

                if (error) {

                    console.log("Erreur MySQL - msgMine.js - inventory - IronPickaxe \"UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=?, Atitix=?, Rock=?, Mytrhil=? WHERE Member_ID=?\" !");
                }

                message.react("✅");
            });
        }
        if (result[0].Pickaxe == "Or") {
            // coal
            let mincoal = 5;
            let maxcoal = 20;
            let coalToAdd = Math.random() * (maxcoal - mincoal) + mincoal;
            let coaluser = result[0].Coal
            // diamond
            let mindiamond = 0;
            let maxdiamond = 5;
            let diamondToAdd = Math.random() * (maxdiamond - mindiamond) + mindiamond;
            let diamonduser = result[0].Diamond
            // gold
            let mingold = 0;
            let maxgold = 7;
            let goldToAdd = Math.random() * (maxgold - mingold) + mingold;
            let golduser = result[0].Gold
            // iron
            let miniron = 0;
            let maxiron = 10;
            let ironToAdd = Math.random() * (maxiron - miniron) + miniron;
            let ironuser = result[0].Iron
            // atitix
            let minatitix = 0;
            let maxatitix = 1;
            let atitixToAdd = Math.random() * (maxatitix - minatitix) + minatitix
            let atitixuser = result[0].Atitix
            // pierre 
            let minpierre = 0;
            let maxpierre = 12;
            let pierreToAdd = Math.random() * (maxpierre - minpierre) + minpierre;
            let pierreuser = result[0].Rock
            // Mythril
            let minmythril = 0;
            let maxmythril = 3;
            let mythrilToAdd = Math.random() * (maxmythril - minmythril) + minmythril;
            let mythriluser = result[0].Mythril


            connection.query("UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=?, Atitix=?, Rock=?, Mythril=? WHERE Member_ID=?", [diamonduser + diamondToAdd, golduser + goldToAdd, ironuser + ironToAdd, coaluser + coalToAdd, atitixuser + atitixToAdd, pierreuser + pierreToAdd, mythriluser + mythrilToAdd, message.author.id], (error, result) => {

                if (error) {

                    console.log("Erreur MySQL - msgMine.js - inventory - Goldepickaxe \"UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=?, Atitix=?, Rock=?, Mythril=? WHERE Member_ID=?\" !");
                }

                message.react("✅");

            })
        } if(result[0].Pickaxe == "Mythril") {
            // coal
            let mincoal = 9;
            let maxcoal = 35;
            let coalToAdd = Math.random() * (maxcoal - mincoal) + mincoal;
            let coaluser = result[0].Coal
            // diamond
            let mindiamond = 0;
            let maxdiamond = 7;
            let diamondToAdd = Math.random() * (maxdiamond - mindiamond) + mindiamond;
            let diamonduser = result[0].Diamond
            // gold
            let mingold = 3;
            let maxgold = 10;
            let goldToAdd = Math.random() * (maxgold - mingold) + mingold;
            let golduser = result[0].Gold
            // iron
            let miniron = 4;
            let maxiron = 15;
            let ironToAdd = Math.random() * (maxiron - miniron) + miniron;
            let ironuser = result[0].Iron
            // atitix
            let minatitix = 0;
            let maxatitix = 2;
            let atitixToAdd = Math.random() * (maxatitix - minatitix) + minatitix
            let atitixuser = result[0].Atitix
            // pierre 
            let minpierre = 6;
            let maxpierre = 15;
            let pierreToAdd = Math.random() * (maxpierre - minpierre) + minpierre;
            let pierreuser = result[0].Rock
            // Mythril
            let minmythril = 0;
            let maxmythril = 5;
            let mythrilToAdd = Math.random() * (maxmythril - minmythril) + minmythril;
            let mythriluser = result[0].Mythril
            // Amethyst
            let minamethyst = 0;
            let maxamethyst = 2;
            let amethystToAdd = Math.random() * (maxamethyst - minamethyst) + minamethyst
            let amethystuser = result[0].Amethyst


            connection.query("UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=?, Atitix=?, Rock=?, Mythril=?, Amethyst=? WHERE Member_ID=?", [diamonduser + diamondToAdd, golduser + goldToAdd, ironuser + ironToAdd, coaluser + coalToAdd, atitixuser + atitixToAdd, pierreuser + pierreToAdd, mythriluser + mythrilToAdd, amethystuser + amethystToAdd, message.author.id], (error, result) => {

                if (error) {

                    console.log("Erreur MySQL - msgMine.js - inventory - MythrilPickaxe \"UPDATE inventory SET Diamond=?, Gold=?, Iron=?, Coal=?, Atitix=?, Rock=?, Mythril=?, Amethyst=? WHERE Member_ID=?\" !");
                }

                message.react("✅");

            })
        }
    });
}
