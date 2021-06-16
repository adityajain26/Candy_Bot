module.exports = {
    name: 'purge',
    description: "This is a Purge command!",
    execute(message, args, Discord) {
        var temp = parseInt(message.content.substring(6).trim()) || 0;
        if (temp < 1 || temp > 99) {
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`**Wrong Format!**\nSpecify number of messages to purge (1-99)\n\nRun **)help purge** for more info on Purge`)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        }
        else {
            temp += 1;
            message.channel.messages.fetch({ limit: temp }).then(messages => {
                const unpinnedMessages = messages.filter(message => !(message.pinned));
                message.channel.bulkDelete(unpinnedMessages, true);
                messagesDeleted = unpinnedMessages.array().length - 1;
            }).catch(err => {
                processInput('Error while doing Bulk Delete');
                processInput(err);
            });
            flag = true;
        }
    }
}