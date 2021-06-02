module.exports = {
  name: 'fortune',
  description: 'Ask a Question, tells your fortune',
  async execute(message, args, Discord) {
    if (!args[0]) return message.channel.send('Please ask a full question!'); // return if no question is commenced
    const replies = ['Yes!', 'Nope.', 'Never, not a chance!', 'Definitely.', 'Yes, a million times yes!']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new Discord.MessageEmbed() // create embed 
        .setAuthor('Candy Fortune Teller says...')
        .setColor('#ff3366').addField('You Asked:', question)
        .addField('Answer:', replies[result]);
      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`); // no permissins so bot will default to a raw message
    }
  },
};