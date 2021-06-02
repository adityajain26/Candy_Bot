const talkedRecentlyCN = new Set();
const talkedRecentlyPG = new Set();
const talkedRecentlyDic = new Set();



module.exports = {
    name: 'mention',
    description: "This is a Mention CD command!",
    execute(message, Discord) {
        //Check Mentions x
        if (message.content.includes('<@&831455280658776094>')) {
            if (talkedRecentlyCN.has(message.guild.id)) {
                message.channel.send("Stupid! Codenames👤 was pinged within the last 10 minutes!");
            } else {
                talkedRecentlyCN.add(message.guild.id);
                setTimeout(() => {
                    talkedRecentlyCN.delete(message.guild.id);
                }, 600000);
            }
        } else if (message.content.includes('<@&831463909373378590>')) {
            if (talkedRecentlyPG.has(message.guild.id)) {
                message.channel.send("Stupid! PUBG🔫 was pinged within the last 10 minutes!");
            } else {
                talkedRecentlyPG.add(message.guild.id);
                setTimeout(() => {
                    talkedRecentlyPG.delete(message.guild.id);
                }, 600000);
            }
        } else if (message.content.includes('<@&830065615867346975>')) {
            if (talkedRecentlyDic.has(message.guild.id)) {
                message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setTitle('PING WARNING!')
                .setThumbnail('https://i.imgur.com/IFk2Neb.png')
                .setDescription("Stupid! Don't disturb The Dictator SHE was pinged in the last 5 minutes! HOW DARE YOU, YOU'LL BE BANNED OR BEHEADED")
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
            } else {
                talkedRecentlyDic.add(message.guild.id);
                setTimeout(() => {
                    talkedRecentlyDic.delete(message.guild.id);
                }, 300000);
            }
        }
    }
}