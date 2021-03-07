
const { randomInt } = require("crypto");
const { CommandoClient } = require("discord.js-commando");
const path = require("path");

require('dotenv').config();

const client = new CommandoClient( {

    commandPrefix: "?",
    owner: process.env.USER_ID,
    disableEveryone: true



});

client.on('message', msg => {

    if(msg.content.indexOf(client.commandPrefix) !== 0) return;

    if(msg.content === "?shutdown") {
        msg.channel.send("Shutting down...").then(() => { client.destroy();})
    }

    else if(msg.content === "?bingo") {

        if(!msg.member.voice.channel) return msg.reply("tienes que estar en un canal de voz para empezar una partida");
        
        if (msg.guild.me.voice.channel) return msg.reply("ya hay una partida en curso, no seas impaciente...");
        
        var voiceChannel = msg.member.voice.channel;

        voiceChannel.join().then(connection => {
            
            connection.play("./sounds/0.mp3");
            connection.disconnect();
            
        });
    }

    else {

        msg.reply("si estás intentando hablar conmigo no te he entendido. \n Escribe ?help si necesitas ayuda con los comandos.");

    }
})

client.login(process.env.BOT_TOKEN);