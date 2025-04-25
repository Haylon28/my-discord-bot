const starters = [
    // Questions sur la journée/activités
  "Comment s'est passée ta journée aujourd'hui ?",
  "Qu'est-ce que tu as prévu de faire ce weekend ?",
  "Qu'est-ce que tu as mangé de bon dernièrement ?",
  "As-tu vu un bon film récemment ?",
  "Tu lis quelque chose d'intéressant en ce moment ?",
  
  // Questions d'opinion
  "Quelle est ta saison préférée de l'année ?",
  "Quel est ton plat préféré ?",
  "Si tu pouvais voyager n'importe où dans le monde, où irais-tu ?",
  "Quel est ton jeu vidéo préféré ?",
  "Quel super-pouvoir voudrais-tu avoir ?",
  
  // Questions hypothétiques
  "Si tu gagnais au loto, qu'est-ce que tu ferais en premier ?",
  "Si tu pouvais dîner avec n'importe quelle personne, vivante ou morte, qui choisirais-tu ?",
  "Si tu pouvais vivre à n'importe quelle époque, laquelle choisirais-tu ?",
  "Si tu étais un animal, lequel serais-tu ?",
  "Si tu pouvais maîtriser instantanément une compétence, laquelle choisirais-tu ?",
  
  // Questions liées à l'enfance
  "Quel était ton dessin animé préféré quand tu étais petit ?",
  "Quel était ton jeu préféré quand tu étais enfant ?",
  "Quel est ton plus ancien souvenir ?",
  "Qu'est-ce que tu voulais devenir quand tu étais enfant ?",
  "Quel était ton livre préféré quand tu étais petit ?",
  
  // Questions amusantes
  "Pizza avec ou sans ananas ?",
  "Es-tu plutôt chien ou chat ?",
  "Pain au chocolat ou chocolatine ?",
  "Qu'est-ce qui est le plus bizarre que tu aies jamais mangé ?",
  "Quelle est la blague la plus drôle que tu connaisses ?",
  
  // Questions sur les rêves/aspirations
  "Quel est ton plus grand rêve dans la vie ?",
  "Si tu pouvais avoir une seconde carrière, que ferais-tu ?",
  "Quelle compétence aimerais-tu développer ?",
  "Quel pays aimerais-tu absolument visiter un jour ?",
  "Quelle est la chose la plus folle sur ta bucket list ?",
  
  // Questions philosophiques
  "Crois-tu qu'il existe une vie ailleurs dans l'univers ?",
  "Penses-tu que le temps est relatif ou absolu ?",
  "Préfères-tu savoir la vérité même si elle fait mal, ou vivre dans l'ignorance heureuse ?",
  "Penses-tu que le destin existe ou que nous créons notre propre chemin ?",
  "Quel est selon toi le sens de la vie ?",
  
  // Questions sur les peurs/challenges
  "Quelle est ta plus grande peur ?",
  "Quel a été le plus grand défi que tu as surmonté ?",
  "Qu'est-ce qui te stresse le plus dans la vie ?",
  "Quelle décision difficile as-tu dû prendre récemment ?",
  "Qu'est-ce qui te fait sortir de ta zone de confort ?",
  
  // Questions sur la musique/art
  "Quel est le dernier concert auquel tu as assisté ?",
  "Quelle chanson pourrait être la bande-son de ta vie ?",
  "Quel artiste admires-tu le plus ?",
  "Quel est ton style de musique préféré ?",
  "Quelle exposition ou musée t'a le plus marqué ?",
  
  // Questions sur l'avenir
  "Où te vois-tu dans 5 ans ?",
  "Quel changement aimerais-tu voir dans le monde ?",
  "Comment penses-tu que la technologie va changer nos vies dans les prochaines années ?",
  "Penses-tu qu'on vivra sur Mars un jour ?",
  "Que penses-tu des voitures autonomes ?"
    // Tu peux en rajouter jusqu’à 50 ou plus
  ];
  
  module.exports = {
    name: 'start',
    description: 'Commence une conversation aléatoire.',
    execute(message) {
      const msg = starters[Math.floor(Math.random() * starters.length)];
      message.channel.send(msg);
    }
  };