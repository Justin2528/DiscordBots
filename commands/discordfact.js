const Discord = require("discord.js");

var discordFacts = require('discordfacts');

 

module.exports.run = async (bot, message, args) => {
var randomFact = discordFacts.random();
const ayy = bot.emojis.get("468044901913853963");
 let ok = new Discord.RichEmbed()
   .setTitle(`${ayy} Discord Fact!`)
  .setColor("RANDOM")
   .setDescription(randomFact)
   .setFooter("Derpbot Beep Boop!");
message.channel.send(ok)
}


module.exports.config = {
  name: "discordfact",
  aliases: ["dg"],
  description: "Discord Fact Boop",
  usage: "d>discordfact",
  noalias: "No Aliases",
  accessableby: "Bots or Members"
}
