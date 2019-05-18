const Discord = require("discord.js");
const DBL = require("dblapi.js");
const bot = new Discord.Client();
const dbl = new DBL(process.env.APITOK, bot);
const BFDAPI = require("bfdapi.js");
const snekfetch = require("snekfetch")

module.exports = bot => {
//    bot.user.setActivity("derp>help - DerpBot");
      const bfd = new BFDAPI(bot,process.env.BFD);
   
      let statuses = [
         `d>help - DerpBot`,
         `Partner of EDGE! - DerpBot`,
         `DerpBot version: v1.1 - DerpBot`
      ]
      setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)]
       bot.user.setActivity(status, {type: "WATCHING"});
   


   }, 12000)

		setInterval(() => {
			dbl.postStats(bot.guilds.size,bot.shard.id,bot.shard.count);
		}, 100000)

    setInterval(() => {
	bfd.postCount(bot.guilds.size);
    }, 100000)
}
