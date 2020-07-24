module.exports = (message, msgSplit, client, config, Discord, connection) => {

    if (msgSplit[0].toLowerCase() != config.prefix + "inventory") return;

    let target = message.mentions.members.first();

    if(!target){
        
        connection.query("SELECT * FROM inventory WHERE Member_ID=?", [message.author.id], (error, result) => {

            if (error) {

                console.log("Erreur MySQL - inventory - \"SELECT * FROM inventory WHERE Member_ID=?\" !");
                message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                return;
            }
    
            if (result.length < 1) {
    
                message.channel.send("Aucun inventaire défini. Réessayez, il a été créé :)");
                return;
    
            }

            if(result[0].CraftingTable == "Non") {

                let embed = new Discord.MessageEmbed()
                    .setColor("#57b8e2")
                    .setAuthor("Inventaire de " + message.author.tag, message.author.avatarURL({ format: "png" }))
                    .addField("Minerais : ", "<:atitix:736196023701078096> Atitix : " + result[0].Atitix + "\n<:diamant:736131982408417292> Diamants : " + result[0].Diamond + "\n<:or:736132040591671307> Or : " + result[0].Gold + "\n<:fer:736132016356982805> Fer : " + result[0].Iron + "\n<:charbon:736131965064970271> Charbon : " + result[0].Coal)
                    .addField("Matériaux : ", "<:bois:736137396290060368> Bois : " + result[0].Wood + "\nPierre : " + result[0].Rock)
                    .addField("Equipement de combat : ", "<:pe:736131993565266003> Epée : " + result[0].Sword + "\n<:armure:736131950921777185> Armure : " + result[0].Chestplate + "\n<:pioche:736132061315727402> Pioche : " + result[0].Pickaxe)
                    .addField("Economie : ", "Colonies Coins : " + result[0].Colonies_Coins)

            
                message.channel.send(embed)

            }

            if(result[0].CraftingTable == "Oui") {
                let embed = new Discord.MessageEmbed()
                    .setColor("#57b8e2")
                    .setAuthor("Inventaire de " + message.author.tag, message.author.avatarURL({ format: "png" }))
                    .addField("Minerais : ", "<:atitix:736196023701078096> Atitix : " + result[0].Atitix + "\n<:diamant:736131982408417292> Diamants : " + result[0].Diamond + "\n<:or:736132040591671307> Or : " + result[0].Gold + "\n<:fer:736132016356982805> Fer : " + result[0].Iron + "\n<:charbon:736131965064970271> Charbon : " + result[0].Coal)
                    .addField("Matériaux : ", "<:bois:736137396290060368> Bois : " + result[0].Wood + "\nPierre : " + result[0].Rock)
                    .addField("Equipement de combat : ", "<:pe:736131993565266003> Epée : " + result[0].Sword + "\n<:armure:736131950921777185> Armure : " + result[0].Chestplate + "\n<:pioche:736132061315727402> Pioche : " + result[0].Pickaxe)
                    .addField("Outils : ", "<:tabli:736179026879709194> Table de craft")
                    .addField("Economie : ", "Colonies Coins : " + result[0].Colonies_Coins)

            
                message.channel.send(embed)
            }
                

        
        })

    } else {

        connection.query("SELECT * FROM inventory WHERE Member_ID=?", [target.user.id], (error, result) => {

            if (error) {

                console.log("Erreur MySQL - inventory - \"SELECT * FROM inventory WHERE Member_ID=?, ligne 40\" !");
                message.channel.send("**:x: Une erreur est survenue, réessayez plus tard !**");
                return;
            }
    
            if (result.length < 1) {
    
                message.channel.send("Aucun inventaire défini. Réessayez plus tard. :)");
                return;
    
            }

            if(result[0].CraftingTable == "Non") {

                let embed = new Discord.MessageEmbed()
                    .setColor("#57b8e2")
                    .setAuthor("Inventaire de " + target.user.tag, target.user.avatarURL({ format: "png" }))
                    .addField("Minerais : ", "<:atitix:736196023701078096> Atitix : " + result[0].Atitix + "\n<:diamant:736131982408417292> Diamants : " + result[0].Diamond + "\n<:or:736132040591671307> Or : " + result[0].Gold + "\n<:fer:736132016356982805> Fer : " + result[0].Iron + "\n<:charbon:736131965064970271> Charbon : " + result[0].Coal)
                    .addField("Matériaux : ", "<:bois:736137396290060368> Bois : " + result[0].Wood + "\nPierre : " + result[0].Rock)
                    .addField("Equipement de combat : ", "<:pe:736131993565266003> Epée : " + result[0].Sword + "\n<:armure:736131950921777185> Armure : " + result[0].Chestplate + "\n<:pioche:736132061315727402> Pioche : " + result[0].Pickaxe)
                    .addField("Economie : ", "Colonies Coins : " + result[0].Colonies_Coins)

            
                message.channel.send(embed)

            }

            if(result[0].CraftingTable == "Oui") {
                let embed = new Discord.MessageEmbed()
                    .setColor("#57b8e2")
                    .setAuthor("Inventaire de " + target.user.tag, target.user.avatarURL({ format: "png" }))
                    .addField("Minerais : ", "<:atitix:736196023701078096> Atitix : " + result[0].Atitix + "\n<:diamant:736131982408417292> Diamants : " + result[0].Diamond + "\n<:or:736132040591671307> Or : " + result[0].Gold + "\n<:fer:736132016356982805> Fer : " + result[0].Iron + "\n<:charbon:736131965064970271> Charbon : " + result[0].Coal)
                    .addField("Matériaux : ", "<:bois:736137396290060368> Bois : " + result[0].Wood + "\nPierre : " + result[0].Rock)
                    .addField("Equipement de combat : ", "<:pe:736131993565266003> Epée : " + result[0].Sword + "\n<:armure:736131950921777185> Armure : " + result[0].Chestplate + "\n<:pioche:736132061315727402> Pioche : " + result[0].Pickaxe)
                    .addField("Outils : ", "<:tabli:736179026879709194> Table de craft")
                    .addField("Economie : ", "Colonies Coins : " + result[0].Colonies_Coins)

            
                message.channel.send(embed)
            }
            
        })


    }
    


}
