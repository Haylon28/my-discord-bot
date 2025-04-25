module.exports = {
    name: 'help',
    description: 'Affiche les commandes disponibles.',
    execute(message) {
      message.channel.send(`**Voici la liste des commandes disponibles :**
  \`!say <texte>\` → Fait dire quelque chose au bot sans que personne sache que c'est toi
  \`!start\` → Démarre une conversation sur le serveur
  \`!color <nom de la couleur>\` → Change la couleur de ton pseudo
  \`!color list\` → Vois la liste des couleurs disponible. Vous pouvez demander à en rajouter
  \`!help\` → Affiche toutes les commandes disponibles
  Mentionne le bot pour interagir avec lui !
  `);
    }
  };