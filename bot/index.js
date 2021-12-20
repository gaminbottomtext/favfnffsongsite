const { Client, Intents, MessageAttachment } = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
var message = "";
const depress = ["sad", "motivation", "feeling down"];
const motivationtogo = ["Your loved!", "You can get everything in life you want if you will just help enough other people get what they want.", "Try to be a rainbow in someones cloud!"];
var msgCount = 0;
const Canvas = require('canvas');
var captionmsg = ""


client.on('message', async (msg) => {
    try {
            if (msg.content != "" && msg.content.startsWith("!")) 
            {
                switch (msg.content.toLowerCase()) {
                    case '!amongass':
                        const canvas = Canvas.createCanvas(700, 300);
                        const context = canvas.getContext('2d');
                        const background = await Canvas.loadImage('./sussy.jpeg');
                        context.drawImage(background, 0, 0, canvas.width, canvas.height);
                        context.fillRect(-200, canvas.height / 2.8 , 1402, 284);
                        context.font = '60px sans-serif';

                        // Select the style that will be used to fill the text in
                        context.fillStyle = '#ffffff';

                        // Actually fill the text with a solid color
                        context.fillText(captionmsg, canvas.width / 10, canvas.height / 1.8);
                        const attachment = new MessageAttachment(canvas.toBuffer(), 'sussy.jpeg');
                        msg.reply({files: [attachment]});
                        msgCount++;
                        break;

                
                    case '!help':
                        msg.reply('\n\n\n');


                        default:
                        message = msg.content; 
                        message = message.substring(1);
                        msg.reply(message);
                        break;
                }

                if (msg.content.startsWith("!caption among ass = " ))
                {
                    captionmsg = msg.content;
                    captionmsg = captionmsg.substring(21);
                }

                for (var i = 0; i < depress.length; i++) 
                {
                   if (msg.content.includes(depress[i]))
                   {
                      msg.reply(motivationtogo[i]);
                   }
                }
               
                console.log(msgCount);
            
            }
        }
  catch (e) {
    msg.reply("ERROR! -> " + e)
    console.log(e);
  }
});

client.login('OTIxODUxNDA4MTU0Nzc5Njc5.Yb47Bg.L3BYuGhLm1VOJltud1f6EiWO2t4');

