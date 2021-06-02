module.exports = {
    name: 'serverinfo',
    description: "This is a ServerInfo command!",
    execute(message, Discord) {
        const { guild } = message

        const { name, region, memberCount, owner } = guild

        const embed = new Discord.MessageEmbed()
            .setTitle(`${name}🍬 Info`)
            .setThumbnail('https://i.imgur.com/IFk2Neb.png')
            .addFields(
                {
                    name: 'Region',
                    value: region.charAt(0).toUpperCase() + region.slice(1)
                },
                {
                    name: 'Members',
                    value: memberCount
                },
                {
                    name: 'Owner',
                    value: `<@${owner.user.id}>`
                },
                {
                    name: 'Created On',
                    value: message.guild.createdAt.toDateString()
                },
                {
                    name: 'Emoji Count',
                    value: message.guild.emojis.cache.size
                }
            )
            .setDescription('Run **<help** for Commands List')
            .setFooter('Candy-Bot • Handmade for Candy-Shop', 'https://i.imgur.com/IFk2Neb.png')

        message.channel.send(embed)
    }
}