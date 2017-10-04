let heroes = [{
  name: 'Obi-Wan Kenobi',
  subtitle: 'Mysterious Hermit',
  cost: [{ point: 16, selected: false }, { point: 20, selected: false }],
  health: 11,
  unique: true,
  color: 'blue',
  selected: false,
  guardian: true,
  ability: 'Before this character is defeated, you may play a Blue card from your hand or discard pile for free.',
  action: '',
  special: '',
  dieSides: {
    1: {
      value: 1,
      type: 'melee',
      modifier: false,
      cost: 0
    },
    2: {
      value: 3,
      type: 'melee',
      modifier: false,
      cost: 0
    },
    3: {
      value: 1,
      type: 'focus',
      modifier: false,
      cost: 0
    },
    4: {
      value: 2,
      type: 'focus',
      modifier: false,
      cost: 0
    },
    5: {
      value: 1,
      type: 'resource',
      modifier: false,
      cost: 0
    },
    6: {
      value: 0,
      type: 'blank',
      modifier: false,
      cost: 0
    },
    set: 'Spirit of Rebellion'
  }
},
{
  name: 'Rey',
  subtitle: 'Force Prodigy',
  cost: [ { point: 9, selected: false}, { point: 12, selected: false }],
  health: 10,
  unique: true,
  color: 'blue'
},
{
  name: 'Rey',
  subtitle: 'Finding the Ways',
  cost: [ { point: 12, selected: false}, { point: 15, selected: false }],
  health: 11,
  unique: true,
  color: 'blue'
},
{
  name: 'Jedi Acolyte',
  subtitle: 'Jedi Acolyte',
  cost: [ { point: 0, selected: false}, { point: 9, selected: false }],
  health: 7,
  unique: false,
  color: 'blue'
},
{
  name: 'Qui-Gon Jinn',
  subtitle: 'Artaru Master',
  cost: [ { point: 13, selected: false}, { point: 17, selected: false }],
  health: 11,
  unique: true,
  color: 'blue'
},
{
  name: 'Rebel Trooper',
  subtitle: 'Rebel Trooper',
  cost: [ { point: 0, selected: false}, { point: 8, selected: false }],
  health: 7,
  unique: false,
  color: 'red'
}, {
  name: 'Leia Organa',
  subtitle: 'Born Leader',
  cost: [ { point: 12, selected: false}, { point: 16, selected: false }],
  health: 11,
  unique: true,
  color: 'red'
}, {
  name: 'Admiral Ackbar',
  subtitle: 'Perceptive Tactician',
  cost: [ { point: 10, selected: false}, { point: 14, selected: false }],
  health: 9,
  unique: true,
  color: 'red'
}, {
  name: 'Ezra Bridger',
  subtitle: 'Force-Sensitive Thief',
  cost: [ { point: 7, selected: false}, { point: 10, selected: false }],
  health: 7,
  unique: true,
  color: 'yellow'
},
// {
//   name: 'Maz Kanata',
//   subtitle: 'Pirate Queen',
//   cost: [ { point: 8, selected: false}, { point: 11, selected: false }],
//   health: 8,
//   unique: true,
//   color: 'yellow'
// },
{
  name: 'Lando Calrissian',
  subtitle: 'Galactic Entrepreneur',
  cost: [ { point: 13, selected: false}, { point: 16, selected: false }],
  health: 11,
  unique: true,
  color: 'yellow'
}]

// let villain = {
//   blue: {
//     {
//       name: 'Darth Vader',
//       subtitle: 'Sith Lord',
//       cost: [ { point: 16, selected: false}, { point: 21, selected: false }],
//       health: 13,
//       unique: true,
//       color: 'blue'
//     },
//     {
//       name: 'Darth Vader',
//       subtitle: 'Dark Apprentice',
//       cost: [ { point: 13, selected: false}, { point: 17, selected: false }],
//       health: 11,
//       unique: true,
//       color: 'blue'
//     },
//     {
//       name: 'Palpatine',
//       subtitle: 'Galactic Emperor',
//       cost: [ { point: 21, selected: false}, { point: 28, selected: false }],
//       health: 15,
//       unique: true,
//       color: 'blue'
//     }
//   },
//
//   red: {
//     {
//       name: 'First Order Stormtrooper',
//       subtitle: 'First Order Stormtrooper',
//       cost: [ { point: 0, selected: false}, { point: 7, selected: false }],
//       health: 7,
//       unique: false,
//       color: 'red'
//     },
//     {
//       name: 'Death Trooper',
//       subtitle: 'Death Trooper',
//       cost: [ { point: 0, selected: false}, { point: 10, selected: false }],
//       health: 10,
//       unique: false,
//       color: 'red'
//     },
//     {
//       name: 'FN-2199',
//       subtitle: 'Loyal Trooper',
//       cost: [ { point: 10, selected: false}, { point: 13, selected: false }],
//       health: 11,
//       unique: true,
//       color: 'red'
//     }
//   },
//
//   yellow: {
//     {
//       name: 'Jabba the Hutt',
//       subtitle: 'The Great and Mighty',
//       cost: [ { point: 11, selected: false}, { point: 14, selected: false }],
//       health: 11,
//       unique: true,
//       color: 'yellow'
//     },
//     {
//       name: 'Tusken Raider',
//       subtitle: 'Tusken Raider',
//       cost: [ { point: 0, selected: false}, { point: 9, selected: false }],
//       health: 8,
//       unique: false,
//       color: 'yellow'
//     }
//   }
// }
