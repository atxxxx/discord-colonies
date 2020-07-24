module.exports = (message, msgSplit, client, config, Discord, connection) => {

    connection.query("SELECT * FROM inventory WHERE Member_ID=?", [message.author.id], (error, result) => {

        if (error) {

            console.log("Erreur MySQL - createInventory.js - \"SELECT * FROM inventory WHERE Member_ID=?\" !");
            return;
        }

        // On créé l'inventaire si il n'en a pas
        if (result.length < 1) {

            connection.query("INSERT INTO inventory (Member_ID, Diamond, Gold, Iron, Coal, Sword, Chestplate, Pickaxe) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [message.author.id, "0", "0", "0", "0", "Bois", "Cuir", "Bois"], (error, result) => {

                if (error) {

                    console.log("Erreur MySQL - createInventory.js - \"INSERT INTO inventory (Member_ID, Diamond, Gold, Iron, Coal, Sword, Chestplate, Pickaxe) VALUES (?, ?, ?, ?, ?, ?, ?, ?)\" !");
                    return;
                }

                console.log(message.author.username + " n'avait pas d'inventaire. Celui-ci à été créé !");
            });
        }
    });
}