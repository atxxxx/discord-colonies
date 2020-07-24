module.exports = (client, config, Discord) => {

    client.on("guildMemberAdd", member => {

        member.roles.add("736155290403209336");
    });
}