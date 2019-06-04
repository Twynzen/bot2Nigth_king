const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`El bot esta listo ${client.user.tag}!`);
});

client.on('message', msg => {
    //recibiendo el mensaje
  if (msg.content === '¿Por que te moriste?') {
    msg.reply('Me asesino el guion');
  }
});

client.login('NTg1MzExNzEwNTEyOTM5MDA4.XPXrFQ.JzKB_5JgrMtQsS0y6jctMDAWMEY');

