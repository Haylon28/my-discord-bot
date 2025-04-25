const responsesWithMessage = [
    // Réponses simples avec haute probabilité (répétées plusieurs fois)
    "Oui",
    "Oui",
    "Oui",
    "Oui",
    "Oui",
    "Non",
    "Non",
    "Non",
    "Non",
    "Non",

    // Autres façons simples de dire oui/non (répétées pour augmenter probabilité)
    "Absolument",
    "Absolument",
    "Certainement pas",
    "Certainement pas",
    "Tout à fait",
    "Tout à fait",
    "Pas du tout",
    "Pas du tout",

    // Réponses ambiguës mais simples
    "Peut-être",
    "Peut-être",
    "Peut-être pas",
    "Faut voir...",
    "C'est possible",
    "J'en doute",
    "Probablement",
    "Probablement pas",
    "Sûrement",
    "Sûrement pas",

    // Réponses plus élaborées mais standard
    "Bien sûr que oui !",
    "Évidemment !",
    "Certainement !",
    "Affirmatif.",
    "Négatif.",
    "Pas vraiment",
    "Sans aucun doute",
    "J'en suis certain",
    "Je ne pense pas",
    "C'est évident que oui",
    "C'est évident que non",
    "Mmmmm... oui",
    "Mmmmm... non",
    "Je dirais que oui",
    "Je dirais que non",

    // Réponses humoristiques ou sarcastiques
    "Tu le sais déjà",
    "Demande ailleurs",
    "C'est une question piège ?",
    "Tu es con !",
    "Demande à Google",
    "Demande à quelqu'un d'autre !",
    "Ta mère le sait mieux que moi",
    "Pourquoi ?",
    "C'est toi qui décides",
    "Je préfère ne pas répondre",
    "C'est compliqué",
    "C'est pas faux",
    "Je sais pas ?",
    "Nique ta mère",
    "Nique ton père",
    "Laisse-moi réfléchir... Non",
    "À toi de voir",
    "Compte jusqu'à 3 milliard et après je te répondrai",
    "Ne compte pas sur moi PD",

    // Réponses interrogatives
    "Pourquoi ?",
    "Pourquoi pas ?",
    "Et toi ?",
    "À ton avis ?",
    "Est-ce vraiment important ?",
    "Qui sait ?",

    // Expressions françaises
    "Aussi douloureux que cela puisse paraître à proférer, je me vois dans l’obligation morale, intellectuelle et presque métaphysique de décliner cette proposition avec toute la gravité que requiert une telle décision.",
    "Il serait, hélas, contraire à mes principes les plus inflexibles — forgés dans le creuset de longues réflexions nocturnes — d’adhérer à ce qui, bien que présenté avec brio, demeure pour moi inacceptable.",
    "Permettez que je m’abstienne, non par caprice, mais par fidélité à un système de valeurs intérieurement structuré et incompatible avec les prémisses de cette démarche.",
    "Que mon refus soit interprété non point comme un rejet brutal, mais comme la conclusion inévitable d’un raisonnement scrupuleux que j’ai mené dans le silence de ma conscience.",
    "Je me vois contraint, en toute connaissance de cause et après avoir soupesé les tenants et les aboutissants de la chose, de formuler une adhésion pleine et entière à la proposition susmentionnée.",
    "Qu’il me soit permis, dans un élan d’assentiment quasi mystique, de me fondre sans réserve dans l’esprit de cette initiative dont je ne puis qu’exalter la pertinence.",
    "Mon âme, tout entière tournée vers la lumière de votre suggestion, n’oppose aucun obstacle à sa concrétisation, bien au contraire.",
    "Il m’apparaît avec une évidence telle qu’aucune autre possibilité ne saurait même être évoquée sans offense à la logique la plus élémentaire.",
    "Je n’entrevois aucune objection, présente ou future, qui pourrait s’élever contre l’acceptation irrévocable et totale de ce projet, aussi lumineux qu'incontournable.",
    "Qu’on scelle donc cette décision dans la cire d’un consentement noble, lucide et parfaitement aligné avec les plus hautes aspirations de l’esprit éclairé.",
    "Je crains que toute tentative de conciliation ne soit vaine, tant ma position s’enracine dans un terreau de convictions aussi profondes qu’inébranlables.",
    "C’est donc avec toute la noblesse d’un silence interrompu par la rigueur du devoir que je m’élève, poliment mais fermement, contre cette éventualité.",

    // Réponses méchantes ou avec insultes
    "Ta gueule !",
    "J'en ai rien à foutre !",
    "Pose pas des questions de merde !",
    "T'es con mon halouf !",
    "Va te faire foutre !",
    "Arrête de me faire chier !",
    "Tu fais chier avec tes questions !",
    "Désolé, mais t'es vraiment trop con pour un être supérieur comme moi !",
    "Mais quel débile celui-là...",
    "Putain, mais laisse-moi tranquille chacal !",
    "Je t'emmerde",
    "Tu m'emmerde",
    "Ton QI est négatif.",
    "Revas à l'école",
    "Même un enfant de 5 ans comprendrait ça",
    "Dégage de là !",
    "Ta question était nul, mais je ne vais pas m'abaisser à ton niveau : Sboudilagololadolfpouristusi.",
    "Nein meine kinder",
    "Tu me prends pour un génie ? Je sais pas répondre !",
    "Ferme-la. J'en ai marre de me faire harceler par vous tous putain de merde. Je voulais pas vous revoir !"
  ];
  
  const simpleResponses = [
    "Oui ?",
    "Tu as quelque chose à dire ?",
    "Hmm ?",
    "Tu me parlais ?",
    "Parle, humain.",
    "Quoi ?"
  ];
  
  module.exports = {
    getSimpleResponse: () => {
      return simpleResponses[Math.floor(Math.random() * simpleResponses.length)];
    },
    getRandomResponseWithMessage: () => {
      return responsesWithMessage[Math.floor(Math.random() * responsesWithMessage.length)];
    }
  };