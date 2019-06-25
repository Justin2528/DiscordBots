const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops, guildconf) => {
let prefix = guildconf.prefix
   if(message.channel.type === "dm") return message.channel.send("Sorry! But this command `help` don't work in DM!");
  
  if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead!`);
if(args[0] == "cool") return message.channel.send("No such command call `cool`");
    if(args[0] == "fun"){
        let gembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let Gembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Fun || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`🎮 Fun commands`, " `minesweeper` `mcachievement` `yesorno` `dogfact` `catfact` `funfact` `wikifact` `wikiat` `quiz` `meme` `cat` `dog` `1vs1` `8ball` `kill` `slot` `rate`")
        .setFooter("DerpBot v1.2", bot.user.displayAvatarURL)
     message.channel.send(gembed).then(m => m.delete(10000));
    return message.author.send(Gembed);
    }
    if(args[0] == "beta"){
        let eembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let Bembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`🛠 Beta Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,'`tictactoe`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command!`)
        .setFooter("DerpBot v1.2", bot.user.displayAvatarURL)
     message.channel.send(eembed).then(m => m.delete(10000));
    return message.author.send(Bembed);
    }
   if(args[0] == "hivemc"){
        let heeembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let HIembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`HiveMC Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,' `hivemcstats`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command!`)
        .setFooter("DerpBot v1.2", bot.user.displayAvatarURL)
     message.channel.send(heeembed).then(m => m.delete(10000));
    return message.author.send(HIembed);
    }
if(args[0] == "staff"){
        let membed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let STembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`⛏ Staff Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,' `mute` `ban` `softban` `greroll<giveaway>` `lockdown` `gedit<giveaway>` `unban` `say` `warn` `setconf` `showconf` `giveaway (Need giveaway role)` `purge` `kick`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command! || Add #derp-logs if you want logs of the server.`)
        .setFooter("DerpBot v1.2", bot.user.displayAvatarURL)
     message.channel.send(membed).then(m => m.delete(10000));
    return message.author.send(STembed);
    }

    if(args[0] == "hypixel"){
        let hembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)

      let Hiembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Hypixel Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,' `pitstats` `watchdogstats` `hypixelstats` `bedwarstats` `uhcstats` `bbstats` `mmstats`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command!`)
        .setFooter("DerpBot v1.2", bot.user.displayAvatarURL)
     message.channel.send(hembed).then(m => m.delete(10000));
    return message.author.send(Hiembed);
    }

    if(args[0] == "speical"){
        let beembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)

      let Evembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Speical Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,' `gay`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command!`)
        .setFooter("DerpBot v1.2", bot.user.displayAvatarURL)
     message.channel.send(beembed).then(m => m.delete(10000));
    return message.author.send(Evembed);
    }
    if(args[0] == "music"){
        let beembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)

      let Evembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Music Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,' `play` `leave` `queue` `skip` `albums` `resume` `pause` `volume`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command!`)
        .setFooter("DerpBot v1.2", bot.user.displayAvatarURL)
     message.channel.send(beembed).then(m => m.delete(10000));
    return message.author.send(Evembed);
    }
  if(args[0] == "eco"){
        let boimbed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)

      let BOImbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Economy Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,' `bal` `daily` `rob` `work`  `pay` `add-money` `remove-money` `shop` `buy` `items` `crime`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command!`)
        .setFooter("DerpBot v1.2", bot.user.displayAvatarURL)
     message.channel.send(boimbed).then(m => m.delete(10000));
    return message.author.send(BOImbed);
    }
  
  if(args[0]){
    let command = args[0];
    if(bot.commands.has(command)) {
      command = bot.commands.get(command);
      var SHembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`DerpBot Help`, message.guild.iconURL)
      .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n **Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
     .setFooter("DerpBot v1.2", bot.user.displayAvatarURL)
    
      return message.channel.send(SHembed)
      }}
   
  if(!args[0]){
    message.delete();
    
    let embed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let Sembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`These are the avaliable commands for the DerpBot\n The bot prefix is: ${prefix}\n [Join hyper now! (Partner)](https://discord.gg/KVVvaqn)`)
    .addField("Donate now!", "d>donate")
    .addField("Note:", "eval,execute and reload can only be use my bot owner. So uh just look at them and do nothing. || (+) you need to create a channel call `derp-reports`")
    .addField(`Commands:`, " `level` `serverinfo` `+report` `top15servers` `help` `test2` `rps` `ping` `uptime` (`eval` `execute` `reload`) `invite` `npm` `vote` `invitelist` `createinvite` `weather` `ticket`")
    .addField("🎮 Psst!", `Do ${prefix}help fun for fun commands!`)
     .addField(`🤝 Partner!`, `${prefix}partner!`)
    .addField("💰 Money! Bank!", `${prefix}help eco`)
    .addField("🎵 Music!", `${prefix}help music`)
    .addField(`🛠 Are you a tester?`, `Do ${prefix}help beta for some commands that are not release!`)
    .addField("⛏ You're a staff?", `Do ${prefix}help staff!`)
.addField("**NEW!** Speical Commands", `Do ${prefix}help speical!`)
.addField("Hypixel stats?", `Do ${prefix}help hypixel!`)
.addField("Uh, hive mc stats?", `Do ${prefix}help hivemc!`)
  
        .setFooter("DerpBot v1.2", bot.user.displayAvatarURL)
    message.channel.send(embed).then(m => m.delete(10000));
    message.author.send(Sembed);
  }
   if(args[0] == "justin"){
  return message.delete();
    let boi = new Discord.RichEmbed()
    .setColor("red")
    .setFooter("Psst! You found a secret command! `cool`")
  message.author.send(boi);
   }

     

}



module.exports.config = {
  name: "help",
  aliases: ["h", "commands", "halp"],
  description: "",
  usage: "",
  noalias: "No Aliases",
  accessableby: "Members"
}
