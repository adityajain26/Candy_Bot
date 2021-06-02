module.exports = {
    name: 'afk',
    description: "This is a AFK command!",
    execute(message, args, Discord, db) {
        const status = new db.table("AFKs");
        let afk = status.fetch(message.author.id);
        const embed = new Discord.MessageEmbed().setColor('#ff3366')
        if (!afk) {
            embed.setDescription(`Your AFK is set, **${message.author.username}**`)
            embed.setFooter(`REASON: ${args.join(" ") ? args.join(" ") : "AFK"}`, 'https://i.imgur.com/IFk2Neb.png')
            status.set(message.author.id, args.join(" ") || `AFK`);
        } else {
            embed.setDescription("You are no longer AFK!");
            status.delete(message.author.id);
        }
        message.channel.send(embed)
    }
}