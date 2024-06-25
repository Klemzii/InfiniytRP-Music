const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = "https://discord.gg/PpvGGdDskT";
      const githubLink = "https://infinityrp.si/";
      const replitLink = "https://infinityrp.si/";
      const youtubeLink = "http://cfx.re/join/v7v9ve";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1200423304176078881/1255146421988888596/Infinity_RP.png?ex=667c11b2&is=667ac032&hm=6d86ab9e1089522013432c64f95b1be8733872bcbbaf83e98ae903897105a49d&', 
              url: 'https://discord.gg/PpvGGdDskT'
          })
            .setDescription(`➡️ **Pridruži se našemu discordu!:**\n- Discord - ${supportServerLink}\n\n➡️ **Ostala socialna omrežja:**\n- Web - ${githubLink}\n- TikTok - ${replitLink}\n- Strežnik - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1200423304176078881/1255146421988888596/Infinity_RP.png?ex=667c11b2&is=667ac032&hm=6d86ab9e1089522013432c64f95b1be8733872bcbbaf83e98ae903897105a49d&')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
