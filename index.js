/**
 * Bot Discord Colonies
 * 
 * Author : Bears, Raraph84
 */

console.log("Démarrage du bot...");

// Récupération des fichiers/librairies
const Discord = require("discord.js");
const config = require("./config.json");
const mysql = require("mysql");

// Connection à la base de donnée
const connection = mysql.createConnection({
    host: process.env.BDD_HOST,
    user: process.env.BDD_USER,
    password: process.env.BDD_PASSWORD,
    database: process.env.BDD_NAME
});
console.log("Connection à la base de donnée...");
connection.connect(error => {
    if (error) {
        console.log("Impossible de se connecter à la base de donnée !");
    } else {
        console.log("Connecté à la base de donnée !");
    }
});

// Création/connection du bot
const client = new Discord.Client();
client.login(process.env.TOKEN);
client.cooldowns = new Discord.Collection();

// Quand un message est envoyé
client.on("message", message => {

    if (message.author.bot || !message.guild) return;

    let msgSplit = message.content.split(" ");

    require("./files/cmdClear")(message, msgSplit, client, config, Discord, connection);
    require("./files/cmdCraft")(message, msgSplit, client, config, Discord, connection);
    require("./files/cmdHelp")(message, msgSplit, client, config, Discord, connection);
    require("./files/cmdInventory")(message, msgSplit, client, config, Discord, connection);
    require("./files/cmdVerify")(message, msgSplit, client, config, Discord, connection);
    require("./files/createInventory")(message, msgSplit, client, config, Discord, connection);
    require("./files/msgAxe")(message, msgSplit, client, config, Discord, connection);
    require("./files/msgMine")(message, msgSplit, client, config, Discord, connection);
});

// Quand le bot est connecté
client.on("ready", () => {

    console.log("Bot connecté !");
    client.user.setPresence({ status: "online", activity: { type: "WATCHING", name: "+help | Discord Colonies" } });

    require("./files/autoRole")(client, config, Discord);
    require("./files/msgJoin")(client, config, Discord);
});