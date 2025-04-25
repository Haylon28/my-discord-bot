const colorMap = {
    rouge: '#FF0000',
    vert: '#00FF00',
    bleu: '#0000FF',
    jaune: '#FFFF00',
    violet: '#800080',
    orange: '#FFA500',
    rose: '#FFC0CB',
    cyan: '#00FFFF',
    blanc: '#FFFFFF',
    noir: '#000000',
    gris: '#808080'
  };
  
  module.exports = {
    name: 'color',
    description: 'Change la couleur de ton pseudo avec un nom de couleur (rouge, bleu, etc).',
    async execute(message, args) {
      const colorName = args[0]?.toLowerCase();
      if (!colorName) return message.reply("Tu dois indiquer une couleur (ex: rouge, bleu...)");

      if (colorName === 'list') return  message.reply(
        `Voici la liste des couleurs disponibles :
        - rouge
        - vert
        - bleu
        - jaune
        - violet
        - orange
        - rose
        - cyan
        - blanc
        - noir
        - gris`);
  
      const hexColor = colorMap[colorName];
      if (!hexColor && colorName !== 'list') {
        return message.reply("Cette couleur n'est pas disponible. Utilise `!color list` pour voir les options.");
      }
  
      const roleName = `color-${colorName}`;
      let role = message.guild.roles.cache.find(r => r.name === roleName);
  
      if (!role) {
        role = await message.guild.roles.create({
          name: roleName,
          color: hexColor,
          reason: `Création du rôle couleur ${colorName}`
        });
      }
  
      // Retirer les anciens rôles couleurs
      const oldRoles = message.member.roles.cache.filter(r => r.name.startsWith('color-'));
      for (const oldRole of oldRoles.values()) {
        await message.member.roles.remove(oldRole);
      }
  
      await message.member.roles.add(role);
      message.reply(`Ta couleur est maintenant **${colorName}**.`);
    }
  };