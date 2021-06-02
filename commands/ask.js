module.exports = {
    name: 'ask',
    description: "Ask Staff",
    execute(message, args, client, Discord) {
        //Channel for support x
        const channel = client.channels.cache.get('831817869175291904')

        //Error if no support specified x
        const query = args.join(' ');
        if (!query) return message.channel.send(new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Wrong Format!**\nSpecify the Query you have\n\nRun **<help ask** for more info on Ask`)
            .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));

        //Embed for Support x
        const reportEmbed = new Discord.MessageEmbed()
            .setTitle('Ask!')
            .addField('User', message.author.toString(), true)
            .addField('Query', query)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        channel.send(reportEmbed);
        //Sends Embed x
        message.channel.send(`Your **Query** has been sent to **<@!409683402418159627>🌻!**`)
    }
}