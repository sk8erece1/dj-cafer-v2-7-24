const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel Mesajlarını Kontrol Et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  const pingozel = new Discord.RichEmbed()
    .setTitle("Moderasyon")
  .setAuthor("Yardım | Moderasyon", bot.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**❯Komutlar:**')
  .addField('/istatislik ➥ Botun İstatisliklerini Gösterir')
  .addField('/küfürengelle ➥ Seçtiğiniz Kanalda Küfürü Engellemeye Çalışır.')
  .addField('/kullanıcıbilgim ➥ Kullanıcı Bilgilerinizi Gösterir.')
  .addField('/load ➥ Bir Komudu Yeniden Yükler(Bot Sahibi)')
  .addField('/oylama ➥ Oylama Başlatır')
  .addField('/ping ➥ Botun Pingini Gösterir.')
  .addField('/rastgeleşifre ➥ Rastgele Şifre Oluştur.')
  .addField('/reboot ➥ Botu Yeiden Başlatır(Bot Sahibi).')
  .addField('/reload ➥ Komudu Yeniler(Bot Sahibi).')
  .addField('/speedtest ➥ Botun Yükleme İndirme vs. Hızlarını Ölçer.')
  .addField('/rename ➥ Botun Sunucudaki İsmini Değiştirir.')
  .addField('/servericon ➥ Sunucunun Avatarını Gösterir.')
  .addField('/suncubilgi ➥ Sunucunun Bilgisini Gösterir.')
  .addField('/unban ➥ Banladığınız Kişinin Banını Kaldırır(@ ile Değil İD ile Yaplılır).')
  .addField('/çeviri ➥ Çeviri Yapar.')
  .addField('/öneri ➥ Bot Sahiplerine Öneri Gönderir.')
  .addField('/yetkilerim ➥ Yetkilerinizi Gösterir..')
  .addField('/sunucutanıt ➥ Sunucunuzu Tanıtırsınız')
  .addField('/kur ➥ Botun Tam Çalışması İçin Kanallar Açar..')
  .addField('/geçici-sustur ➥ Seçtiğiniz Kişiyi Bi Süreşiğine Susturur..')
  .setFooter('Cafer', bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .addBlankField(true)
      return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['moderasyon-komutları', 'yardımmoderasyon', 'yardım-moderasyon '],
  permLevel: 0
};

exports.help = {
  name: 'yardımmoderasyon',
  description: 'Moderasyon vb. Komutlarını Gösterir.',
  usage: 'yardımmoderasyon'
};
