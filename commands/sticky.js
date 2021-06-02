module.exports = {
  name: 'sticky',
  description: "This is a sticky command!",
  execute(Discord, client) {
    const MyStickyChannelID = '843825486697594930';
    let cacheMsgs = [];

    client.on('ready', async () => {
      const stickyChannel = client.channels.cache.get(MyStickyChannelID);
      if (stickyChannel) {
        const m = await stickyChannel.send(new Discord.MessageEmbed()
          .setColor('#ff3366')
          .setDescription('Do not want to get pings? Get the <@&830065615867346975> role from <#830060094150279182>')
          .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        cacheMsgs.push(m.id);
      }
    });

    client.on('message', async message => {
      if (message.author.bot) return;

      // Remove a message and remove form cache
      async function remove(id) {
        const msg = message.channel.messages.cache.get(id);
        cacheMsgs.shift();
        if (msg) await msg.delete().catch(_e => { });
      }

      // check channel is a sticky channel
      if (message.channel.id === MyStickyChannelID) {
        // if length is more or 2 but not 0 then queue delete all and return without a message
        if (cacheMsgs.length >= 2 && cacheMsgs.length !== 0) return cacheMsgs.forEach(async id => remove(id));

        // if cache is more then 0 then queue delete all AND send a message
        if (cacheMsgs.length > 0) cacheMsgs.forEach(async id => await remove(id));

        // Send message and add to cache
        const m = await message.channel.send(new Discord.MessageEmbed()
          .setColor('#ff3366')
          .setDescription('Do not want to get pings? Get the <@&830065615867346975> role from <#830060094150279182>')
          .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
        cacheMsgs.push(m.id);
      }
    });
  }
}


