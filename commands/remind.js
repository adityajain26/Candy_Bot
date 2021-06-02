const ms = require('ms')

module.exports = {
    name: "remind",
    description: {
        usage: "remind <time> <reminder>",
        content: "Helps remind you something via DM",
    },
    async execute(message, args, client, Discord) {
        let time = args[0];
        let user = message.author
        let reminder = args.splice(1).join(' ')

        const notime = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Wrong Format!**\nSpecify the Time & Reason\n\nRun **<help remind** for more info on Remind`)
            .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png');

        const wrongtime = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Wrong Time!**\nValid Units\n•**d**(days)\n•**m**(mins)\n•**h**(hrs)\n•**s**(secs)\n\nRun **<help remind** for more info on Remind`)
            .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png');

        const reminderembed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Wrong Format**\nMention what you want to be reminded of?\n\nRun **<help remind** for more info on Remind`)
            .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png');

        if (!args[0]) return message.channel.send(notime)
        if (
            !args[0].endsWith("d") &&
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s")
        )


            return message.channel.send(wrongtime)
        if (!reminder) return message.channel.send(reminderembed)

        const remindertime = new Discord.MessageEmbed()
            .setColor('#33F304')
            .setDescription(`Reminder Set! You will be reminded **${reminder}** in **${time}** ⏰`)
            .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png');

        message.channel.send(remindertime)

        const reminderdm = new Discord.MessageEmbed()
            .setColor('#7289DA')
            .setTitle('**REMINDER ⏰**')
            .setDescription(`**${time}** over! Your Reminder: **${reminder}**`)
            .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png');

        setTimeout(async function () {
            try {

                await user.send(reminderdm)
            } catch (err) {

            }

        }, ms(time));
    }
}