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
    .setTitle("Eğlence")
  .setAuthor("Yardım | Eğlence", bot.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**❯Komutlar:**')
  .addField('/1v1 ➥ Seçtiğiniz Kişiyle Savaşırsınız.')
  .addField('/nahçek ➥ Seçtiğiniz Kişiye Nah Çekersiniz  (^_^)')
  .addField('/8ball ➥ Sihirli 8ball Sorularınızı Cevaplar.')
  .addField('/atasözü ➥ Random Olarak Atasözleri Gösterir.')
  .addField('/atatürk ➥ Mustafa Kemal Atatürk İle İlgili Gif Gösterir.')
  .addField('/atatürkçerçeve ➥ Kendi Discord Avatarınıza Atatürk Resmi İle Birleştirir.')
  .addField('/avatar ➥ Kendi Avatarınızı Gösterir.')
  .addField('/ascii ➥ Yazdığınız Kelieyi Farklı Bir Font İle Yollar.')
  .addField('/aşkölçer ➥ Seçtiğiniz Kişilerin Arasındaki Aşkı Yüzde Olarak Yollar(Random)')
  .addField('/dcintro ➥ Avatarınıza Nitro Simgesi Ekler.')
  .addField('/efkarölçer ➥ Efkarınızı Ölçer.')
  .addField('/emojiyazı ➥ Yazdığınız Kelimeyi Emoji OLarak Tekrar Yollar.')
  .addField('/koş ➥ Koşarsınız.')
  .addField('/slots ➥ Slot Oynarsınız.')
  .addField('/stresçarkı ➥ Stres Çarkı Çevirirsiniz.')
  .addField('/yazıtura ➥ Yazı Tura Atarsınız.')
  .addField('/yumruk ➥ Seçtiğiniz Kişiye Yumruk Atar.')
  .addField('/çayiç ➥ Çay İçersiniz.')
  .addField('/vine ➥ Vine Gösterir..')
  .addField('/komikpaylaşım ➥ Komik Paylaşımlar Gösterir..')
  .addField('/atom ➥ Seçtiğiniz Kişiye Atom Yollar..')
  .addField('/atasözü ➥ Atasözü Gösterir.')
  .addField('/espiri ➥ Espiri Gösterir..')
  .setFooter('Cafer', bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .addBlankField(true)
      return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['eğlence-komutları', 'yardımeğlence', 'yardım-eğlence', 'eğlence-komutları '],
  permLevel: 0
};

exports.help = {
  name: 'yardımeğlence',
  description: 'Eğlence Komutlarını Gösterir.',
  usage: 'yardımeğlence'
};
