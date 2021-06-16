module.exports = {
    name: 'helpinfo',
    description: "This is a Help in detail",
    execute(message, args, Discord) {
        if (args[0].toLowerCase() == 'help') {
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setTitle('help Command')
                .setDescription(`Access Command List for Candy-Bot by **)help**\n\nFor more info of a cmd, use **)help <botcmd>** without the '<>'\n\ne.g )help ask, )help serverinfo, )help afk etc.`)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        } else if (args[0].toLowerCase() == 'serverinfo') {
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setTitle('serverinfo Command')
                .setDescription(`Gives Basic information about the server\n\nLike Region, Member Count, Owner etc.\n\nThe command is **)serverinfo**`)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        } else if (args[0].toLowerCase() == 'ask') {
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setTitle('ask Command')
                .setDescription(`Use this to send the Staff your suggestions/questions/bugs/issues/anything related to the Server/Bot. The Staff will attend to it on priority.\n\n The command is **)ask <message>** without the '<>'\n\ne.g )ask Give me a Candy Role!, )ask I can't access xyz channel`)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        } else if (args[0].toLowerCase() == 'afk') {
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setTitle('afk Command')
                .setDescription(`Sets your AFK with a reason (optional). It will trigger when someone tries to ping you while your AFK is active. Currently, this is for Admins only.\n\nThe command is **)afk <reason>** without the '<>'\n\ne.g )afk busy with the cats, )afk i'm partying!`)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        } else if (args[0].toLowerCase() == 'purge') {
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setTitle('purge Command')
                .setDescription(`Purges messages. Pass the number of messages you would like to Purge with the command (1-99). Currently, this is for Admins only.\n\nThe command is **)purge <#messages>** without the '<>'\n\ne.g )purge 5, )purge 20`)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        } else if (args[0].toLowerCase() == 'remind') {
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setTitle('remind Command')
                .setDescription(`Sets a reminder, which is sent to your DM once completed. Currently, this is for Admins only.\n\nThe command is **)remind <time> <reminder>** without the '<>'\n\nValid Units For Time\n•**d**(days)\n•**m**(mins)\n•**h**(hrs)\n•**s**(secs)\n\ne.g )remind 20m play valorant, )remind 1h wish birthday`)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        } else if (args[0].toLowerCase() == 'vote') {
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setTitle('vote Command')
                .setDescription(`Vote for The Candy-Shop at Discord Server List. You can vote every 12 hours.\n\nThe command is **)vote**`)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        } else if (args[0].toLowerCase() == 'weather') {
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setTitle('weather Command')
                .setDescription(`Check the Live Weather for any City.\n\nThe command is **)weather <cityname>** without the '<>'\n\ne.g )weather hyderabad, )weather bangalore\n\nCredits to devfacet for weather command`)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        } else {
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Command Not Found!')
                .setDescription(`Use **(help** to see Commands List\n\nFor more info of a cmd, use **)help <botcmd>** without the '<>'\n\ne.g )help ask, )help serverinfo`)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        }
    }
}