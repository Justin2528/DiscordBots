const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

 var IGN = args[0];
 
if(!IGN) return message.channel.send("Ok, what IS UR IGN????")

 var url = "https://api.hypixel.net/player?key=cc80a6a3-b44d-4249-a4b1-546d03aae6dc&name=" + IGN;

console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {
let body = r.body

if(!body.player.stats.Pit) return message.channel.send(`ERROR 404: Uh, ${IGN} never player pit? (hypixel pit)`)

if(body.player == "null") return message.channel.send("ERROR 404: ${IGN} is not a player...")

let image = "https://visage.surgeplay.com/full/" + body.player.uuid +".png"

console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Pit stats (Hypixel)")
.setColor("9b7653")
.setDescription(`${IGN}'s Pit stats`)
.addField("XP", body.player.stats.Pit.profile.xp || "0")
.addField("Play time (mins)", body.player.stats.Pit.pit_stats_ptl.playtime_minutes)
.addField("Enderchest open times", body.player.stats.Pit.pit_stats_ptl.enderchest_opened || "0")
.addField("Joins", body.player.stats.Pit.pit_stats_ptl.joins)
.setThumbnail(image)
.addField("Diamond Items purchased", body.player.stats.Pit.pit_stats_ptl.diamond_items_purchased || "0")
.addField("Chat Messages", body.player.stats.Pit.pit_stats_ptl.chat_messages || "0")
.addField("Gold earned", body.player.stats.Pit.pit_stats_ptl.cash_earned || "0")
.addField("Fishing Rod Launched", body.player.stats.Pit.pit_stats_ptl.fishing_rod_launched || "0")
.setFooter("We're adding more!")

//Ok LOL

message.channel.send(ok)
}) 
}


module.exports.config = {
  name: "pitstats",
  aliases: ["Hypixel"],
  description: "Get ya boi's pit stats",
  usage: "d>pitstats <IGN>",
  noalias: "No Aliases",
  accessableby: "memberssssss/giraffe/pitboi/Justin2528/duh"
}
