const Discord = require("discord.js"); 

const TOKEN = "NDAxNDc1Nzc2NTA5MjQ3NDkw.DTvRNg.1xjCjKF-pdk6baBKZIr4QRjKgIo";
const PREFIX = "g.";

var fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Oh fook off"
];

var fortunes = [
  "Peasant took half the damage",
  "Unsuccessful attack",
  "Peasant is dead",
  "Peasant fainted"
];

var bot = new Discord.Client();

bot.on("ready", function() {
 console.log("Ready");
 }); 

bot.on("message", function(message) {
 if (message.author.equals(bot.user)) return;

 if (!message.content.startsWith(PREFIX)) return;

 var args = message.content.substring(PREFIX.length).split(" ");
 switch (args[0]) {
   case "hello":
     message.channel.sendMessage("hi there, peasant") 
     break; 
   case "kick": {
     let modRole = message.guild.roles.find("name", "Umji's Cheeks");
     if(!message.member.roles.has(modRole.id)) {
       return message.reply("I don't think so");
     }
     if(message.mentions.users.size === 0)  
       return message.reply("who is it idiot?");
   }
   let kickMember = message.guild.member(message.mentions.users.first());
   if(!kickMember) {
     return message.reply("GET HIM/HER OUT OF HERE! RUN IDIOT RUN!");
   }
   if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    return message.reply("I don't want to baka!");
   }
   kickMember.kick().then(member => {
     message.reply('A filthy peasant has been kicked out');
   })
     break;

  
   case "info":
     message.channel.sendMessage("I'm Umjihegao created by Sica's Soy Milk. Shitttalking bot at your service!")   
     break;
   case "8ball":
     if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
     else message.channel.sendMessage("do it again, peasant");
     break;
   case "attack":
     if (args[2]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
     else message.channel.sendMessage("do it again, peasant");
     break;
   case "about":
     var embed = new Discord.RichEmbed()
         .setTitle("Welcome board, peasant", true)
         .addField("Welcome to jackass", "NSFW, Hentai, Porn, Animu, Kpoop, Autism", true)
         .addField("Main bots", "Umjihegao and Nadeko", true)
         .addField("Enjoy your stay, peasant", "Here have some Choa")
         .setColor(0xff0000)
         .setFooter("THIS IS JUST A MESSAGE FOR ALL OF YOU UNEDUCATED PEASANTS!")
         .setThumbnail(message.author.avatarURL)
         .setImage("https://koreaboo-cdn.storage.googleapis.com/2017/06/AOAChoaDisbanding3.jpg")
         .setDescription("A shitposting Discord server where all kinds of craps are allowed....I mean, most of them")
     message.channel.sendEmbed(embed);
      break;
     case "heal":
     var embed = new Discord.RichEmbed()
         .setDescription("This peasant already has full health")
     message.channel.sendEmbed(embed);
      break;
     case "owner":
     var embed = new Discord.RichEmbed()
         .setAuthor("Sica's Soy Milk", "https://images-ext-2.discordapp.net/external/eniw2xKcO-QxTA8PDzBUxdT7icqc0pJHvzY9YzmEayU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/343419009078788096/3b9009e054c5517c68c6209b18bd2b93.png?width=80&height=80")
         .setDescription("'I love ahegaos and Umji best gril....ALL GFRIEND MEMBERS I MEAN!' Owner plays WarFrame username is Yoshiekyan")
     message.channel.sendEmbed(embed);
      break;
     case "moderators":
     var embed = new Discord.RichEmbed()
         .setAuthor("CruciFixDaBeast A.K.A Eunha's fav guy", "https://scontent.fceb1-1.fna.fbcdn.net/v/t34.0-12/26940974_2038109363143322_1527683556_n.png?oh=95fb84f2eb53005aa89f399b7aca8004&oe=5A5EFA20")
         .setDescription("Avoid at all cost. Would probably say 'Eunha mein!' to you. 10/10 pervert. 24/7 WarFrame")
     message.channel.sendEmbed(embed);
      break;
      
     client.on("guildMemberAdd", (member) => {
      newUsers.set(member.id, member.user);
     });
     client.on("guildMemberRemove", (member) => {
      if(newUsers.has(member.id)) newUsers.delete(member.id);
     });
     var target = bot.getUser("username", stringWithUsername);
     var response = target.mention + ", what's up mayte?";
     bot.sendMessage(message.channel, response);
     break;
   case "noticeme":
     message.channel.sendMessage(message.author.toString() + "Umjihegao-senpai noticed you, dear peasant");
     break;
   default:
     message.channel.sendMessage("wtf are you talking about, peasant?");
     message.channel.sendMessage("mess with my commands and I'll kick you out, douchebag"); 
 } 
}); 

bot.login(TOKEN);
