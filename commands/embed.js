const EasyEmbedPages = require('easy-embed-pages');

module.exports = {
    name: 'embed',
    description: "This is a Help command!",
    execute(message, args, Discord, client) {

        if (!args[0]) {
            const page1 = new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setTitle("Candy-Bot v0.9 Beta")
                .setDescription('Commands List • Page 1 • Prefix [)]')
                .setThumbnail('https://i.imgur.com/IFk2Neb.png')
                .addFields(
                    { name: '**Help Commands:**', value: "**• help** Help Menu\n**• help <cmdname>** More info on any Command\n**• ask** Suggestions/Questions to Staff" }
                )
                .setImage('https://i.imgur.com/XUgIejV.png')
                .setFooter('Page (1/3) • ©2021 • w/❤️ by Adi🌻', 'https://i.imgur.com/IFk2Neb.png');

            const page2 = new Discord.MessageEmbed()
                .setColor('#ff3366')
                  .setTitle("Candy-Bot v0.9 Beta")
                .setDescription('Commands List • Page 2 • Prefix [)]')
                .setThumbnail('https://i.imgur.com/IFk2Neb.png')
                .addFields(
                    { name: '**Utility Commands:**', value: "**• afk** Sets AFK\n**• remind** DMs Reminder\n**• weather** Live Weather (Credit : devfacet)\n" },
                    { name: '\n\n**Misc Commands:**', value: "**• ping** pong\n**• bait** *warning*\n**• zoh** Kawaii Meter\n" }
                )
                .setFooter('Page (2/3) • ©2021 • w/❤️ by Adi🌻', 'https://i.imgur.com/IFk2Neb.png');

            const page3 = new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setTitle("Candy-Bot v0.9 Beta")
                .setDescription('Commands List • Page 3 • Prefix [)]')
                .setThumbnail('https://i.imgur.com/IFk2Neb.png')
                .addFields(
                    { name: '**Admin Commands:**', value: "**• purge** Purges Messages\n"},
                    { name: '**Other Commands:**', value: "**• vote** Upvote Shop | Discord Server List\n**• serverinfo** Basic Server Information\n**• aboutme** About the Candy-Bot\n" }
                )
                .setFooter('Page (3/3) • ©2021 • w/❤️ by Adi🌻', 'https://i.imgur.com/IFk2Neb.png');


            const embed = new EasyEmbedPages(message.channel, {
                pages: [
                    page1.toJSON(),
                    page2.toJSON(),
                    page3.toJSON()
                ],
                url: 'https://www.linkedin.com/in/aditya-jain26/',
            });

            embed.start();
        } else {
            client.commands.get('helpinfo').execute(message, args, Discord);
        }

    }
}