const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();
const db = require('quick.db');

const prefix = '<';

const fs = require('fs');

client.commands = new Discord.Collection();

var cmdList = ['help', 'zoh', 'rick', 'ping', 'ask', 'fortune', 'serverinfo', 'purge', 'remind', 'afk', 'aboutme', 'weather'];

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.commands.get('sticky').execute(Discord, client);

client.once('ready', () => {
    console.log('CandyBot is Alive!');
})

client.on("ready", () => {
    client.user.setActivity("Zoh🌹", { type: "LISTENING" })
})

client.on('guildMemberAdd', guildMember => {
    client.commands.get('welcome').execute(guildMember, Discord);
})

// All for Zoh's Birthday! x

client.on('message', async message => {

    client.commands.get('mention').execute(message, Discord);

    //AFK Response and Coming Back x
    let afk = new db.table("AFKs"),
        authorStatus = await afk.fetch(message.author.id),
        mentioned = message.mentions.members.first();


    if (mentioned) {
        let status = await afk.fetch(mentioned.id);
        if (status) {
            const embed = new Discord.MessageEmbed()
                .setColor('#ff3366')
                .setDescription(`${mentioned.user.username} says "**${status}**"`)
                .setFooter('They have set AFK', 'https://i.imgur.com/IFk2Neb.png')
            message.channel.send(embed);
        }
    }

    if (authorStatus) {
        const embed = new Discord.MessageEmbed()
            .setColor('#ff3366')
            .setDescription(`You're back from AFK, **${message.author.username}**`)
        message.channel.send(embed).then(i => i.delete({ timeout: 5000 }));
        afk.delete(message.author.id)
    }

    //Split Prefix x
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Case Handling x
    if (command === 'help') {
        client.commands.get('embed').execute(message, args, Discord, client);
    } else if (command === 'zoh') {
        const cute = Math.floor(Math.random() * 11 + 90);
        let zohEmbed = new Discord.MessageEmbed()
            .setTitle("KawaiiNeko Meter 🐾")
            .setDescription(`<@!809454690738765834> is **${cute}%** Kawaii!\n\n But a **100%** Dictator x`)
            .setThumbnail('https://i.imgur.com/j6VOmQF.png')
        message.channel.send(zohEmbed)
    } else if (command === 'rick') {
        message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    } else if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'ask') {
        client.commands.get('ask').execute(message, args, client, Discord);
    } else if (command === 'fortune') {
        client.commands.get('fortune').execute(message, args, Discord);
    } else if (command === 'aboutme') {
        client.commands.get('aboutme').execute(message, Discord);
    } else if (command === 'serverinfo') {
        client.commands.get('serverinfo').execute(message, Discord);
    } else if (command === 'weather') {
        client.commands.get('weather').execute(client, message, args, Discord);
    } else if (command == 'vote') {
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#ff3366')
            .setTitle('Support The Candy-Shop')
            .setThumbnail('https://i.imgur.com/IFk2Neb.png')
            .setDescription(`https://discordbotlist.com/servers/the-candy-shop/upvote \n\nhttps://top.gg/servers/764915705300385812/vote`)
            .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
    } else if (command.includes('purge')) {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            client.commands.get('purge').execute(message, args, Discord);
        } else {
            message.channel.send('Dumbass, you do not have perms for that!');
        }

    } else if (command.includes('remind')) {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            client.commands.get('remind').execute(message, args, client, Discord);
        } else {
            message.channel.send('Dumbass, you do not have perms for that!');
        }

    } else if (command.includes('afk')) {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            client.commands.get('afk').execute(message, args, Discord, db);
        } else {
            message.channel.send('Dumbass, you do not have perms for that!');
        }
    } else if ((!message.content.startsWith('<@')) && (!command.includes(cmdList)) && (!message.content.endsWith('>')) && (message.content.includes('<'))) {
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#ff3366')
            .setDescription('Command Not Found!\n\nUse **<help** to see Commands List\n\nFor more info on a cmd, use **<help <cmdname>**')
            .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
    }
})

client.login(process.env.DISCORD_TOKEN);

//Invite Using https://discord.com/oauth2/authorize?client_id=830059326378344529&scope=bot