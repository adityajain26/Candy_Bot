const Discord = require('discord.js');
const config = require('./config.json');

require('dotenv').config();

const client = new Discord.Client();
const db = require('quick.db');

const prefix = ')';

const fs = require('fs');

client.commands = new Discord.Collection();

var cmdList = ['help', 'zoh', 'rick', 'ping', 'ask', 'serverinfo', 'purge', 'remind', 'afk', 'aboutme', 'weather'];

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('CandyBot is Alive!');
})

client.on("ready", () => {
    client.user.setActivity("Zoh🌹", { type: "LISTENING" })
})

// All for Zoh's Birthday! x

client.on('message', async message => {

    client.commands.get('mention').execute(message, Discord, client);

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
        message.react("✅");
        client.commands.get('embed').execute(message, args, Discord, client);
    } else if (command === 'zoh') {
        message.react("❤️");
        const cute = Math.floor(Math.random() * 11 + 90);
        let zohEmbed;
        if(cute <= 91) {
            zohEmbed = new Discord.MessageEmbed()
            .setTitle("KawaiiNeko Meter 🐾")
            .setDescription(`<@!809454690738765834> is **${cute}%** Kawaii!\n\n But a **100%** Dictator x`)
            .setThumbnail('https://i.imgur.com/j6VOmQF.png')
            .setImage('https://i.imgur.com/fTq65JO.gif')
        } else if(cute == 92 || cute == 93) {
            zohEmbed = new Discord.MessageEmbed()
            .setTitle("KawaiiNeko Meter 🐾")
            .setDescription(`<@!809454690738765834> is **${cute}%** Kawaii!\n\n But a **100%** Dictator x`)
            .setThumbnail('https://i.imgur.com/j6VOmQF.png')
            .setImage('https://i.imgur.com/NyTJkW8.gif')
        } else if(cute == 94 || cute == 95) {
            zohEmbed = new Discord.MessageEmbed()
            .setTitle("KawaiiNeko Meter 🐾")
            .setDescription(`<@!809454690738765834> is **${cute}%** Kawaii!\n\n But a **100%** Dictator x`)
            .setThumbnail('https://i.imgur.com/j6VOmQF.png')
            .setImage('https://i.imgur.com/FcE1F47.gif')
        } else if(cute == 96 || cute == 97) {
            zohEmbed = new Discord.MessageEmbed()
            .setTitle("KawaiiNeko Meter 🐾")
            .setDescription(`<@!809454690738765834> is **${cute}%** Kawaii!\n\n But a **100%** Dictator x`)
            .setThumbnail('https://i.imgur.com/j6VOmQF.png')
            .setImage('https://i.imgur.com/9CGIsaQ.gif')
        } else if(cute >= 97) {
            zohEmbed = new Discord.MessageEmbed()
            .setTitle("KawaiiNeko Meter 🐾")
            .setDescription(`<@!809454690738765834> is **${cute}%** Kawaii!\n\n But a **100%** Dictator x`)
            .setThumbnail('https://i.imgur.com/j6VOmQF.png')
            .setImage('https://i.imgur.com/ADkKSYb.gif')
        } 
        message.channel.send(zohEmbed);
    } else if (command === 'bait') {
        message.react("🃏");
        message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    } else if (command === 'ping') {
        message.react("🔔");
        client.commands.get('ping').execute(message, args);
    } else if (command === 'ask') {
        message.react("🗣️");
        client.commands.get('ask').execute(message, args, client, Discord);
    } else if (command === 'aboutme') {
        message.react("🍬");
        client.commands.get('aboutme').execute(message, Discord);
    } else if (command === 'serverinfo') {
        message.react("ℹ️");
        client.commands.get('serverinfo').execute(message, Discord);
    } else if (command === 'weather' || command === 'w') {
        message.react("☁️");
        client.commands.get('weather').execute(client, message, args, Discord);
    } else if (command.includes('purge')) {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            message.react("✅");
            client.commands.get('purge').execute(message, args, Discord);
        } else {
            message.react("❌");
            message.channel.send('Dumbass, you do not have perms for that!');
        }

    } else if (command.includes('remind')) {
        message.react("⏲️");
        client.commands.get('remind').execute(message, args, client, Discord);
    } else if (command.includes('afk')) {
        message.react("💤");
        client.commands.get('afk').execute(message, args, Discord, db);
    } else if ((!message.content.startsWith('<@')) && (!command.includes(cmdList)) && (!message.content.endsWith('>')) && (message.content.includes('<'))) {
        message.react("❌");
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#ff3366')
            .setDescription('Command Not Found!\n\nUse **)help** to see Commands List\n\nFor more info on a cmd, use **)help <cmdname>**')
            .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
    }
})

client.login(config.token);

//Invite Using https://discord.com/oauth2/authorize?client_id=830059326378344529&scope=bot