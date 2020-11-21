const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Zalogowano jako: ${client.user.tag}!`);
  console.log('User')
});

client.on("message", msg => {
  if (msg.content === "!ping") {
    msg.reply("Pong!");
  }
});

client.on("message", msg => {
  if (msg.content === "kim jest pingi?") {
    msg.reply("to bot zrobiony przez Emila!");
  }
});

client.login("Nzc5MzQ5NTQxMzYyMjA0NzU0.X7fP0g.U4Ag1FCz0VxJKeiW75icOcjkrQw");