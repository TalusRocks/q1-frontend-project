var state = {
  pool: {
    active: heroes,
    //[heroes, villains],
    disabled: []
  },
  team: {
    cards: [],
    //max: 30,
    total: 30
  },
  hidden: []
}

//moves characters to the team, and selects clicked die
function clickCost(event) {
  //make both the div and inner p targets for cost
  var cost = event.target
  if (cost.nodeName == 'P') cost = cost.parentElement

  //fetch index in data, and grab the card
  var idx = cost.getAttribute('data-idx')
  var dieCount = cost.getAttribute('data-die')
  //active[0] or active[1], depending on if heroes or villains
  var card = state.pool.active.splice(idx, 1)[0]

  //add the selected card to the 'team'
  state.team.cards.push(card)
  //change selected die to true
  card.cost[dieCount].selected = true

  //re-render
  render.active()
  render.team()
  render.total()
  render.disabled()
  filter.colorFilter()
}

var render = {
  //renders characters in state.pool.active
  active: function () {
    //use below to combine heroes and villains
    // var heroes = state.pool.active[0]
    // var villains = state.pool.active[1]
    // var activeCharacters = heroes.concat(villains)

    var activeCharacters = state.pool.active

    var content = document.querySelector('.characters-content')
    content.innerHTML = ''
    var characters = ''

  //  sort by name
    // activeCharacters.sort(function (a, b) {
    //   var nameA = a.name.toUpperCase()
    //   var nameB = b.name.toUpperCase()
    //   if (nameA < nameB) {
    //     return -1
    //   }
    //   if (nameA > nameB) {
    //     return 1
    //   }
    //
    //   return 0
    // })

    //sort by color
    activeCharacters.sort(function (a, b) {
      var colorA = a.color.toUpperCase()
      var colorB = b.color.toUpperCase()
      if (colorA < colorB) {
        return -1
      }
      if (colorA > colorB) {
        return 1
      }

      return 0
    })

    //populate HTML with current active characters
    for (var i = 0; i < activeCharacters.length; i++) {
      characters += characterWrap(activeCharacters[i], i)
    }
    content.innerHTML = characters
    console.log(characters)

    //get the cost (for targeting)
    var characterCost = document.querySelectorAll('.character-wrap .cost')

    //event listener for each die cost
    for (var i = 0; i < characterCost.length; i++) {
      characterCost[i].addEventListener('click', clickCost)

      //hide die of 0 cost
      let costData = characterCost[i].textContent.trim()
      if (costData == 0) {
        characterCost[i].style.opacity = '0'
        characterCost[i].removeEventListener('click', clickCost)
      }

    }
  },
  //looks at all dice in characters, adds disabled class to dice too expensive
  disabled: function () {

    //get all the costs (for filtering)
    var allCosts = document.querySelectorAll('.cost-value')

    //if too costly, add disabled class
    allCosts.forEach(function(element){
      if ((total.textContent - element.textContent) < 0) {
        element.parentElement.classList.add('disabled')
      }
    })

  },
  //renders the team
  team: function () {
    var teamCharacters = state.team.cards
    var content = document.querySelector('#team-content')
    content.innerHTML = ''
    var characters = ''
    for (var i = 0; i < teamCharacters.length; i++) {
      characters += characterWrap(teamCharacters[i], i, 'team')

    }
    content.innerHTML = characters

    //remove character from team and add back to pool via link
    let removeMe = document.querySelectorAll('a.remove-me')

    for (var j = 0; j < removeMe.length; j++) {
      removeMe[j].addEventListener('click', function (event) {

        let removeChar = event.target.parentElement.parentElement
        let teamPosition = removeChar.getAttribute('data-idx')

        //splice out of state.team.cards
        var card = state.team.cards.splice(teamPosition, 1)[0]

        //change things, like selected cost to false for both
        card.cost[0].selected = false
        card.cost[1].selected = false

        //push onto state.pool.active
        state.pool.active.push(card)

      render.team()
      render.active()
      render.total()
      })

    }

  },
  //renders the total team cost
  total: function () {

    //let max = state.team.max
    let total = state.team.total
    let displayTotal = document.querySelector('#total')
    displayTotal.append(total)

    //get selected values from characters in team, subtract from total
    let teamSize = state.team.cards.length
    for (var i = 0; i < teamSize; i++) {
      let char = state.team.cards[i]
      for (var j = 0; j < 2; j++) {
        if(char.cost[j].selected) {
          total -= char.cost[j].point
        }
      }
    }
    displayTotal.textContent = total

    //if too many characters are selected, show an error msg
    if((total) < 0) {
      let alert = document.createElement('div');
      alert.innerHTML = "too many points";
      alert.className = "alert";
      let teamCount = document.querySelector('.team-count');
      teamCount.append(alert);
    }
    // else {
    //   //subtract selected from total
    //   total.textContent -= thisCost;
    //   state.team.max = total.textContent;
    // }
  }
}

render.active()
render.team()
render.total()
filter.colorFilter()

// module.exports = {
//   clickCost : clickCost
// }
