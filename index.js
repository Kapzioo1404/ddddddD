const Discord = require("discord.js");
const botsettings = require("./botsettings.json");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} Bot online`)
    bot.user.setActivity("Kapzioo pisze GAMER", {type:"PLAYING"});
})

bot.on("mesasage", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hi`){
        return message.channel.send("Hello")
    }
})

bot.login(botsettings.token);