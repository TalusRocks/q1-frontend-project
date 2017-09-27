let hero = {
  blue : {
    'Mysterious Hermit' : {
      name : 'Obi-Wan Kenobi',
      cost : [16,20],
      health : 11,
      unique : true,
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
      unique : true
    },
    'Finding the Ways' : {
      name : 'Rey',
      cost : [12, 15],
      health : 11,
      unique : true
    }
  },

  red : {
    'Rebel Trooper' : {
      name : 'Rebel Trooper',
      cost : [8],
      health : 7,
      unique : false
    },
    'Born Leader' : {
      name : 'Leia Organa',
      cost : [12, 16],
      health : 11,
      unique : true
    },
    'Perceptive Tactician' : {
      name : 'Admiral Ackbar',
      cost : [10, 14],
      health : 9,
      unique : true
    }
  },

  yellow : {
    'Force-Sensitive Thief' : {
      name : 'Ezra Bridger',
      cost : [7, 10],
      health : 7,
      unique : true
    },
    'Galactic Entrepreneur' : {
      name : 'Lando Calrissian',
      cost : [13, 16],
      health : 11,
      unique : true
    }
  }
}
