module.exports = {
    name: 'welcome',
    description: "This is a Welcome command!",
    execute(guildMember, Discord) {
        let welcomeChannel = guildMember.guild.channels.cache.get('830060094150279182');

        welcomeChannel.send(`Welcome <@${guildMember.user.id}>,`);

        const guild = guildMember.guild;

        const embed = new Discord.MessageEmbed()
            .setColor('#ff3366')
            .setTitle('Welcome to The Candy-Shop!')
            .setThumbnail('https://i.imgur.com/bejS9du.gif')
            .setDescription(`You're our ${guild.memberCount}th Snacc! Have a sweet time here xx`)

        welcomeChannel.send(embed);
    }
}