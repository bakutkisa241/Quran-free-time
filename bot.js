const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const yt = require('ytdl-core');


client.on("message", message => {
  if (message.content === "q!help") {
         message.react("✅")
            message.react("📬")
   const embed = new Discord.RichEmbed() 
       .setColor("#fff")
      .setDescription(`
══════════ஜ۩۞۩ஜ════════════  
 **       أوامر القرأن الكريم
q!quran
  └─ يشغل قرأن الكريم كاملآ
q!quran-stop
  └─ يوقف قرأن الكريم كاملآ
q!alkahf 
  └─ يشغل سورة الكهف
q!alkahf-stop
  └─ يوقف سورة الكهف
q!albaqara
 └─ يشغل سورة البقرة
q!albaqara-stop
  └─ يوقف سورة البقرة
q!yasin
  └─ يشغل سورة يس
q!yasin-stop
  └─ يوقف سورة يس
q!alkursi
  └─ يشغل آية الكرسي
q!alkursi-stop
  └─ يوقف آية الكرسي**
 
══════════ஜ۩۞۩ஜ════════════ 
`)
 .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  
 
    message.author.sendEmbed(embed)
    
    }
    }); 
    client.on('message', message => {
        if (message.content.startsWith('q!quran')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('q!quran-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });

      client.on('message', message => {
        if (message.content.startsWith('q!alkahf')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=sOML64y5dfQ', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('q!alkahf-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });
      
      client.on('message', message => {
        if (message.content.startsWith('q!albaqara')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=gIYaTs1Kw90', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('q!albaqara-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });
      client.on('message', message => {
        if (message.content.startsWith('q!yasin')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=KpNqGctH-p0', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('q!yasin-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });

      client.on('message', message => {
        if (message.content.startsWith('q!alkursi')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=fcoQCIBMuRg', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('q!alkursi-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });


const devs = ["450711003324350485" , "483092158786568203"]

const adminprefix = "q!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
  
  });
            client.login(process.env.BOT_TOKEN);
