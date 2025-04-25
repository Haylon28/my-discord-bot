module.exports = {
    name: 'color list',
    description: 'Affiche la liste des couleurs disponibles.',
    execute(message) {
      message.channel.send(`**Couleurs disponibles :**
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
    }
  };