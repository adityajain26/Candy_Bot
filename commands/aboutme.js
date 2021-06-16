module.exports = {
    name: 'aboutme',
    description: "This is a About Me command!",
    execute(message, Discord){
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`About Candy-Bot (Currently in Beta)`)
        .setAuthor('Adi🌻', 'https://i.imgur.com/M9xyTRl.png', 'https://www.linkedin.com/in/aditya-jain26/')
        .setDescription("This bot is developed exclusively for The Candy-Shop, as a present to <@!809454690738765834> for her birthday, for her love for the server!\n\n2nd June 2021 🍬")
        .setFooter('Candy-Bot ©2021 • Developed on node.js', 'https://i.imgur.com/IFk2Neb.png'));
    }
}