const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args, ops) => {
  //code here
  let amount = args[1]
    let user = message.mentions.members.first() 

    let member = db.fetch(`money_${message.author.id}`)


    if (!user) {
        return message.channel.send('you forgot to mention somebody.')
    }
    if (!args[1]) {
        return message.channel.send('Please specify an amount.')
    }
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send('Negative money can not be paid.')
    }

if(isNaN(args[1])) {
  return message.channel.send("That's not a number!")
}
 
    if (member < args[1]) {
        return message.channel.send(`That's more money than you've got in your balance. try again.`)
    }

    message.channel.send(`${message.author.tag}, You successfully paid ${user.user.username} ${args[1]}$.`)
    db.add(`money_${user.id}`, Number(args[1]))
console.log(args[1])
    db.subtract(`money_${message.author.id}`, Number(args[1]))
   
  //db.set(`payt_${message.author.id}`, Date.now())
 

} 


module.exports.config = {
  name: "pay",
  aliases: ["p"],
  description: "Pay someone!",
  usage: "d>pay <@guy> <amount>",
  noalias: "No Aliases",
  accessableby: "Memebers"
}

