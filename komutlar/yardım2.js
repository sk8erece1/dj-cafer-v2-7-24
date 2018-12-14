const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("-------------------------Komutlar-------------------------")
  .setDescription('')
  .setColor('RANDOM')
  .addField("**» Eğlence Komutları**", `/kp = Komik Paylaşımlar Atar. \n/sigaraiç = Sigara İçersiniz.   \n/balıktut = Balık TUT! \n/1v1 = 1v1 Atarsınız.  \n/çeviri = Çeviri Yapar. \n/atasözü = Random Atasözü Atar. \n/espri = Random Espri Atar. \n/asci = Değişik Yazı Fontu İle Size Yazıyı Geriatar.  \n/aşkölçer =/aşkölçer [Kullanıcı] Böyle Kullanabilirsiniz. \n/atürkçerçeve =Avatarınıza Çerçeve Ekler. \n/dcintro =Avatarınıza Çerçeve Ekler. \n/walpaper = Rasgele Arkaplan Atar. \n/kahkaha = Kahkaha Atarsınız \n/herkesebendençay = Herkese Çay Alırsınız. \n/kahve = Kahve İçersiniz. \n/çayiç = Çay İçersiniz. \n/çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n/çayaşekerat = Çaya Şeker Atarsınız. \n/gif = Rasgele Gif Yollar. \n/pokemon = Rasgele Pokemon Resmi Yollar. \n/yumruk = Yumruk Atarsınız. \n/zarat = Zar Atarsınız. `)
  .addField("**» Kullanıcı Komutları**", `/afk = AFK Olmanızı Sağlar. \n/yetkilerim = Sunucudaki Yetkilerinizi Gösterir \n/evet/hayır = Katılım Yaparsınız. \n/istatistik = BOT İstatistiklerini Gösterir. = Bulunduğunuz Sunucunun Resmin Atar. \n/kullanıcıbilgim = Sizin Hakkınızda Bilg \n/rasgeleyazı = Random Yazı Atar.  \n!çeviri = Online Çeviri Sağlar. \n/yaz = Bota İsediğinizi Yazdırırsınız. \n/havadurumu = HavaDurumunu Gösterir. \n/ailemiz = Bot Sunucularını Gösterir. \n/radyo = Radyo! \n/sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \n/sunucuicon = Bulunduğunuz Sunucunun Resmin Gösterir. \n!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \n/öneri = Önerinizi Kurucuya İletir. \n/avatarım = Avatarınınızı Gösterir.  `)
  .addField("**» Kullanıcı Komutları 2**", `/kayıtvatandaş = Vatandaş Rolü Verir. \n/kayıtgamer = Gamer Rolü Verir. \n/yetkilerim = Sunucudaki Yetkilerinizi Gösterir.   \n/ailemiz = Botun Olduğu Sunucuları Gösterir. \n/havadurumu = Bulunduğunuz Yerin Hava Durumunu Atar.  \n/radyo = Radyoyu Dinlersiniz.`)
  .addField("**» Oyun Komutları**", `/lolrehber = LOL Karakterlerin BUİLD Kodlarını Atar.`)
  .addField("**» Yetkili Komutları 2**", `/ban = İstediğiniz Kişiyi Sunucudan Banlar. \n/duyur = Bot Herkeze Duyuru ATAR.   \n/rolver = Sunucunuzda Olan Bir Kişiye ROL Verir. \n/reklamengelleme = Otomatik Olarak Aktifdir. \n/küfürengelleme = Çoğu Küfürlü Kelimeleri Otomatik Olarak Siler. \n/rtarama = ReklamTaraması. \n/sustur = İstediğiniz Kişiyi Susturur. \n/sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \n/oylama = Oylama Açar. \n/duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**» Botun Ana Komutları**", "/yardım = BOT Komutlarını Atar. \n/kur = Kurulum Yapar.   \n/ping = BOT Gecikme Süresini Söyler. \n/sunucudavet = Bot Discord Link Atar. \n/botdavet = BOT Davet Linkini Atar. \n/istatistik = BOT İstatistiklerini Gösterir. \n!öneri = Önerilerinizi Bot Sahibine Gönderir.")
  .addField("**» Sunucular**", `/sunucutanıt =Sunucunuzu Tanıtır.`)
  .setFooter('Cafer')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h2', 'halp2', 'help2', 'y2'],
  permLevel: 0
};

exports.help = {
  name: 'yardım2',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım2 [komut]'
};