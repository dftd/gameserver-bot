const Discord = require('discord.js');

module.exports.mention = (msg, prefix, bot) => {
    let embed = new Discord.MessageEmbed()
        .setColor(bot.config.color)
        .setAuthor(bot.user.username, bot.user.displayAvatarURL())
        .setDescription('My prefix in this guild is `' + prefix + '`.\nUse `' + prefix + 'help` to view my commands.');

    return msg.channel.send(embed);
};

module.exports.nsfw = (msg) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Not a NSFW channel')
        .setDescription('Use NSFW commands in a NSFW marked channel.')
        .setImage('https://cdn.glitch.com/1b2eeab1-8ec3-4a67-bba8-b8e876d50140%2Foe4iK5i.gif');

    return msg.channel.send(embed);
};

module.exports.permissions = (msg, cmdFile) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Access restricted')
        .setDescription('You are not allowed to use this command.\nRequired permissions: `' + cmdFile.permissions.join("`, `") + '`.');

    return msg.channel.send(embed);
};

module.exports.botPermissions = (msg, cmdFile) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Command restricted')
        .setDescription('I am not allowed to use this command.\nRequired permissions: `' + cmdFile.botPermissions.join("`, `") + '`.');

    return msg.channel.send(embed);
};

module.exports.cooldown = (msg, time) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Slow down a bit')
        .setDescription('You are using this command too frequently. Wait ' + time + ' more seconds.');

    return msg.channel.send(embed);
};

module.exports.error = (msg, error) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Error')
        .setDescription(error);

    return msg.channel.send(embed);
};

module.exports.cmdError = (msg, error, cmdFile) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Error')
        .setDescription(error + '\n' + 'Usage: `' + cmdFile.usage + '`.');

    return msg.channel.send(embed);
};

module.exports.dbError = (msg) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Database error')
        .setDescription('An error has happened while executing your command.\nPlease try again or report to our support: blah blah.');

    return msg.channel.send(embed);
};
