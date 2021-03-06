const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(310, 325)
    //image.greyscale()
    //image.gaussian(3)
    Jimp.read("https://cdn.discordapp.com/attachments/492705577441689604/494581434082656267/aze.png", (err, avatar) => {
        avatar.resize(310, 325)
        image.composite(avatar, 1, 0).write(`./img/aze/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/aze/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["azeri"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'aze',
    description: 'Profil resminize azerbaycan bayrağı ekler.',
    usage: 'aze'
  };
//MeliL