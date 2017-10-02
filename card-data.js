let hero = {
  blue : {
    'Mysterious Hermit' : {
      name : 'Obi-Wan Kenobi',
      cost : [16,20],
      health : 11,
      unique : true,
      color : 'blue',
      selected : false,
      guardian : true,
      ability : 'Before this character is defeated, you may play a Blue card from your hand or discard pile for free.',
      action : '',
      special : '',
      dieSides : {
        1 : {
          value : 1,
          type : 'melee',
          modifier : false,
          cost : 0
        },
        2 : {
          value : 3,
          type : 'melee',
          modifier : false,
          cost : 0
        },
        3 : {
          value : 1,
          type : 'focus',
          modifier : false,
          cost : 0
        },
        4 : {
          value : 2,
          type : 'focus',
          modifier : false,
          cost : 0
        },
        5 : {
          value : 1,
          type : 'resource',
          modifier : false,
          cost : 0
        },
        6 : {
          value : 0,
          type : 'blank',
          modifier : false,
          cost : 0
        },
      set : 'Spirit of Rebellion'
      }
    },
    'Force Prodigy' : {
      name : 'Rey',
      cost : [9, 12],
      health : 10,
      unique : true,
      color: 'blue',
      selected : false,
    },
    'Finding the Ways' : {
      name : 'Rey',
      cost : [12, 15],
      health : 11,
      unique : true,
      color: 'blue',
      selected : false,
    },
    'Jedi Acolyte' : {
      name : 'Jedi Acolyte',
      cost : [0, 9],
      health : 7,
      unique : false,
      color: 'blue',
      selected : false,
    }
  },

  red : {
    'Rebel Trooper' : {
      name : 'Rebel Trooper',
      cost : [0, 8],
      health : 7,
      unique : false,
      color: 'red',
      selected : false,
    },
    'Born Leader' : {
      name : 'Leia Organa',
      cost : [12, 16],
      health : 11,
      unique : true,
      color: 'red',
      selected : false,
    },
    'Perceptive Tactician' : {
      name : 'Admiral Ackbar',
      cost : [10, 14],
      health : 9,
      unique : true,
      color: 'red',
      selected : false,
    }
  },

  yellow : {
    'Force-Sensitive Thief' : {
      name : 'Ezra Bridger',
      cost : [7, 10],
      health : 7,
      unique : true,
      color: 'yellow',
      selected : false,
    },
    'Galactic Entrepreneur' : {
      name : 'Lando Calrissian',
      cost : [13, 16],
      health : 11,
      unique : true,
      color: 'yellow',
      selected : false,
    }
  }
}

let villain = {
  blue : {
    'Sith Lord' : {
      name : 'Darth Vader',
      cost : [16, 21],
      health : 13,
      unique : true,
      color: 'blue'
    },
    'Dark Apprentice' : {
      name : 'Darth Vader',
      cost : [13, 17],
      health : 11,
      unique : true,
      color: 'blue'
    },
    'Galactic Emperor' : {
      name : 'Palpatine',
      cost : [21, 28],
      health : 15,
      unique : true,
      color: 'blue'
    }
  },

  red : {
    'First Order Stormtrooper' : {
      name : 'First Order Stormtrooper',
      cost : [0, 7],
      health : 7,
      unique : false,
      color: 'red'
    },
    'Death Trooper' : {
      name : 'Death Trooper',
      cost : [0, 10],
      health : 10,
      unique : false,
      color: 'red'
    },
    'Loyal Trooper' : {
      name : 'FN-2199',
      cost : [10, 13],
      health : 11,
      unique : true,
      color: 'red'
    }
  },

  yellow : {
    'The Great and Mighty' : {
      name : 'Jabba the Hutt',
      cost : [11, 14],
      health : 11,
      unique : true,
      color: 'yellow'
    },
    'Tusken Raider' : {
      name : 'Tusken Raider',
      cost : [0, 9],
      health : 8,
      unique : false,
      color: 'yellow'
    }
  }
}
