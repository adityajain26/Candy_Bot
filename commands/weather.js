const weather = require('weather-js');

module.exports = {
    name: 'weather',
    aliases: ['wthr'],
    async execute(client, message, args, Discord) {

        weather.find({ search: args.join(" "), degreeType: 'C' }, function (error, result) {
            // 'C' can be changed to 'F' for farneheit results
            if (error) return message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`**Wrong Format!**\nSpecify the Location\n\nRun **<help weather** for more info on Weather`)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png'));
            if (!args[0]) return message.channel.send('Please specify a Location')

            if (result === undefined || result.length === 0) return message.channel.send('**Invalid** Location');

            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Live Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor('#87CEEB')
                .addField('Temperature', `${current.temperature}°C`, true)
                .addField('Feels Like', `${current.feelslike}°C`, true)
                .addField('Humidity', `${current.humidity}%`, true)
                .addField('Wind', current.winddisplay, true)
                .addField('Day', `${current.day}`, true)
                .addField('Last Captured at', `${current.observationtime} Local Time`, true)
                .setFooter('Candy-Bot • ©2021', 'https://i.imgur.com/IFk2Neb.png');


            message.channel.send(weatherinfo)
        })
    }
}