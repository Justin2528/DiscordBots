const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")
    let meows = ["meow", "Meow?", "BEow", "Roses are red, violets are blue, meows are good."];
    let meow = meows[Math.floor(Math.random() * meows.length)]

        let cEmbed = new Discord.RichEmbed()
        .setColor(colours.cyan)
        .setAuthor(meow, message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter(`Meow`, bot.user.displayAvatarURL)

        message.channel.send({embed: cEmbed})

        msg.delete();
}


module.exports.config = {
    name: "cat",
    description: "Meow",
    usage: "d>cat",
    accessableby: "Cat",
    aliases: ["meow", "meow"]
}
