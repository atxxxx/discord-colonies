module.exports = (message, msgSplit, client, config, Discord, connection) => {

    if (msgSplit[0].toLowerCase() != config.prefix + "craft") return;

    if (!msgSplit[1]) {
        let embed = new Discord.MessageEmbed()
            .setColor("#57b8e2")
            .setAuthor("Craft de " + message.author.tag, message.author.avatarURL({ format: "png" }))
            .setDescription("Liste des items à craft : \n`table`, `pioche`")

        message.channel.send("Merci de préciser un objet à crafter")
        message.channel.send(embed)
        return;
    }

    if (msgSplit[1] == "table") {

        connection.query("SELECT * FROM inventory WHERE Member_ID=?", [message.author.id], (error, result) => {

            if (error) {

                console.log("Erreur MySQL - cmdCraft.js - inventory - \"SELECT * FROM inventory WHERE Member_ID=?\" !");
                message.channel.send("Une erreur est survenue.");
                return;
            }

            let wooduser = result[0].Wood

            if (result[0].CraftingTable == "Non") {

                if (result[0].Wood >= "2") {

                    connection.query("UPDATE inventory SET Wood=? WHERE Member_ID=?", [wooduser - 2, message.author.id], (error, result) => {

                        if (error) {

                            console.log("Erreur MySQL - cmdCraft - \"SELECT * FROM inventory WHERE Member_ID=?\" !");
                            message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                            return;
                        }

                        message.channel.send("*Crafting en cours...*")

                        connection.query("UPDATE inventory SET CraftingTable=? WHERE Member_ID=?", ["Oui", message.author.id], (error, result) => {

                            if (error) {

                                console.log("Erreur MySQL - cmdCraft - \"UPDATE inventory SET CraftingTable=? WHERE Member_ID=?\" !");
                                message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                                return;
                            }

                            message.channel.send("**Table de craft craftée !**")
                        })
                    })

                } else {

                    message.channel.send("Vous n'avez pas assez de bois !")
                    return;
                }

            } else {

                message.channel.send("Vous avez déjà une table de craft !")
                return;
            }
        })
    }

    // Craft des pioches
    if (msgSplit[1] == "pioche") {

        connection.query("SELECT * FROM inventory WHERE Member_ID=?", [message.author.id], (error, result) => {

            if (error) {

                console.log("Erreur MySQL - cmdCraft - \"SELECT * FROM inventory WHERE Member_ID=?, ligne 83\" !");
                message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                return;
            }

            // Si il a une table de craft
            if (result[0].CraftingTable == "Non") {

                message.channel.send("Tu dois avoir une table de craft !");
                return;
            }

            // Si il a une pioche en bois
            if (result[0].Pickaxe == "Bois") {
                message.channel.send("La pioche coûte 15 de fer !")

                // Si il a assez de fer
                if (result[0].Iron >= "15") {

                    let ironuser = result[0].Iron

                    connection.query("UPDATE inventory SET Iron=? WHERE Member_ID=?", [ironuser - 15, message.author.id], (error, result) => {

                        if (error) {

                            console.log("Erreur MySQL - cmdCraft - \"UPDATE inventory SET Pickaxe=? WHERE Member_ID=?, ligne 106\" !");
                            message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                            return;
                        }

                        message.channel.send("*Crafting en cours...*")

                        connection.query("UPDATE inventory SET Pickaxe=? WHERE Member_ID=?", ["Fer", message.author.id], (error, result) => {

                            if (error) {

                                console.log("Erreur MySQL - cmdCraft - \"UPDATE inventory SET CraftingTable=? WHERE Member_ID=?\" !");
                                message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                                return;
                            }

                            message.channel.send("**Pioche en fer craftée !**")


                        })
                    })
                } else {
                    message.channel.send("Tu n'a pas assez de fer !");
                    return;
                }
            }

            if(result[0].Pickaxe == "Fer") {
                message.channel.send("La pioche coûte 25 d'or !");
                if(result[0].Gold >= "25") {
                    let golduser = result[0].Gold
                    connection.query("UPDATE inventory SET Gold=? WHERE Member_ID=?", [golduser - 25, message.author.id], (error, result) => {

                        if (error) {

                            console.log("Erreur MySQL - cmdCraft - \"UPDATE inventory SET Gold=? WHERE Member_ID=?, ligne 132\" !");
                            message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                            return;
                        }

                        message.channel.send("*Crafting en cours...*")

                        connection.query("UPDATE inventory SET Pickaxe=? WHERE Member_ID=?", ["Or", message.author.id], (error, result) => {

                            if (error) {

                                console.log("Erreur MySQL - cmdCraft - \"UPDATE inventory SET Pickaxe=? WHERE Member_ID=?, ligne 143\" !");
                                message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                                return;
                            }

                            message.channel.send("**Pioche en or craftée !**")


                        })

                    })
                }
            }
            if(result[0].Pickaxe == "Or") {
                message.channel.send("Il te faut 50 mythril et 25 d'or pour crafter une pioche en mytrhil !")
                if(result[0].Mythril >= "50" && result[0].Gold >= "25") {
                    let golduser = result[0].Gold
                    let mythriluser = result[0].Mythril

                    connection.query("UPDATE inventory SET Mythril=? WHERE Member_ID=?", [mythriluser - 50, message.author.id], (error, result) => {

                        if (error) {

                            console.log("Erreur MySQL - cmdCraft - \"UPDATE inventory SET Gold=? WHERE Member_ID=?, ligne 132\" !");
                            message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                            return;
                        }

                        connection.query("UPDATE inventory SET Gold=? WHERE Member_ID=?", [golduser - 25, message.author.id], (error, result) => {

                            if (error) {
    
                                console.log("Erreur MySQL - cmdCraft - \"UPDATE inventory SET Gold=? WHERE Member_ID=?, ligne 132\" !");
                                message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                                return;
                            }


                            message.channel.send("*Crafting en cours...*")

                            connection.query("UPDATE inventory SET Pickaxe=? WHERE Member_ID=?", ["Mythril", message.author.id], (error, result) => {

                                if (error) {
    
                                    console.log("Erreur MySQL - cmdCraft - \"UPDATE inventory SET Pickaxe=? WHERE Member_ID=?, ligne 189\" !");
                                    message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                                    return;
                                }
    
                                message.channel.send("**Pioche en mythril craftée !**")
    
    
                            })


                        })
                    })
                }
            }
        })
    }
}
