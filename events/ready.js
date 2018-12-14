const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  client.user.setStatus("online");
   var oyun = [

        "💪 7/24 Aktif!",  
        "💡 /botdavet | Botumuzu ekleyin",
        "💡 /müzikdavet | Müzik Botumuzu ekleyin",
        "👨 Yeni Komutlar!",
        "👏 285 Kullanıcı Olduk!",    
        "🌍 9 Sunucuda Hizmet!",
        "🤖 Hep Daha İleriye!",
        "🤗 83 Komut!!",
        "📢 Küfür Koruması Devre Dışı!",
        "/yardım 🔥 + /bilgi 🔥 + /radyo"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/evindar123321234");
        }, 2 * 2500);
}