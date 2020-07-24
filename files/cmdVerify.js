module.exports = (message, msgSplit, client, config, Discord, connection) => {

    if (msgSplit[0].toLowerCase() != config.prefix + "verify") return;

    if (message.channel.id != "736155260493758574") return;

    message.member.roles.remove("736155290403209336");
    message.member.roles.add("701459895765172255");
}
