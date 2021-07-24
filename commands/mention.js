const talkedRecentlyCN = new Set();
const talkedRecentlyPG = new Set();
const talkedRecentlyVal = new Set();

module.exports = {
    name: 'mention',
    description: "This is a Mention CD command!",
    execute(message, Discord, client) {
        //Check Mentions x
        if (message.content.includes('<@!830059326378344529>')) {
            client.commands.get('embed').execute(message, [], Discord, client);
        } else if (message.content.includes('<@&789832421457264640>')) {
            if (talkedRecentlyCN.has(message.guild.id)) {
                message.channel.send("Stupid! **Codenames** was pinged within the last hour!");
            } else {
                talkedRecentlyCN.add(message.guild.id);
                setTimeout(() => {
                    talkedRecentlyCN.delete(message.guild.id);
                }, 3600000);
            }
        } else if (message.content.includes('<@&780950283592531968>')) {
            if (talkedRecentlyPG.has(message.guild.id)) {
                message.channel.send("Stupid! **PUBG** was pinged within the last hour!");
            } else {
                talkedRecentlyPG.add(message.guild.id);
                setTimeout(() => {
                    talkedRecentlyPG.delete(message.guild.id);
                }, 3600000);
            }
        } else if (message.content.includes('<@&780951966540759050>')) {
            if (talkedRecentlyVal.has(message.guild.id)) {
                message.channel.send("Stupid! **Valorant** was pinged within the last hour!");
            } else {
                talkedRecentlyVal.add(message.guild.id);
                setTimeout(() => {
                    talkedRecentlyVal.delete(message.guild.id);
                }, 3600000);
            }
        }
        // else if (message.content.includes('<@!809454690738765834>')) {
        //     if (talkedRecentlyDic.has(message.guild.id)) {
        //         message.channel.send(new Discord.MessageEmbed()
        //             .setColor('#ff3366')
        //             .setTitle('PING WARNING!')
        //             .setThumbnail('https://i.imgur.com/IFk2Neb.png')
        //             .setDescription("Stupid! Don't disturb The Dictator SHE was pinged in the last 5 minutes! HOW DARE YOU, YOU'LL BE BANNED OR BEHEADED")
        //             .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        //     } else {
        //         talkedRecentlyDic.add(message.guild.id);
        //         setTimeout(() => {
        //             talkedRecentlyDic.delete(message.guild.id);
        //         }, 300000);
        //     }
        // }
    }
}