var lando = heroes.pop()
lando.cost[0].selected = true
var state = {
  pool: {
    active: heroes,
    disabled: []
  },
  team: {
    cards: [lando]
  }
}

var render = {
  active: function () {
    var activeCharacters = state.pool.active
    var content = document.querySelector('.characters-content')
    content.innerHTML = ''
    var characters = ''
    for (var i = 0; i < activeCharacters.length; i++) {
      characters += characterWrap(activeCharacters[i], i)
    }
    content.innerHTML = characters

    //get the cost (for targeting)
    var characterCost = document.querySelectorAll('.character-wrap .cost')

    for (var i = 0; i < characterCost.length; i++) {
      characterCost[i].addEventListener('click', clickCost)


      //hide die of 0 cost
      let costData = characterCost[i].textContent.trim()
      if (costData == 0) {
        characterCost[i].style.opacity = '0'
        characterCost[i].removeEventListener('click', clickCost)
        //?? when it moves to the Team, the zero comes back, because the Team function can't find characterCost[i]
        // let temp = characterCost[i].cloneNode(true);
        // console.log(temp)
        // characterCost[i].parentNode.replaceChild(temp, characterCost[i]);
      }


      function clickCost(event) {
        //make both the div and inner p targets for cost
        var cost = event.target
        if (cost.nodeName == 'P') cost = cost.parentElement

        //fetch index in data, and grab the card
        var idx = cost.getAttribute('data-idx')
        var dieCount = cost.getAttribute('data-die')
        var card = state.pool.active.splice(idx, 1)[0]

        //add the selected card to the 'team'
        state.team.cards.push(card)
        //change selected die to true
        card.cost[dieCount].selected = true

        //re-render
        render.active()
        render.total()
        render.team()
        render.disabled()
      }
    }
  },
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
  team: function () {
    var teamCharacters = state.team.cards
    var content = document.querySelector('#team-content')
    content.innerHTML = ''
    var characters = ''
    for (var i = 0; i < teamCharacters.length; i++) {
      characters += characterWrap(teamCharacters[i])
    }
    content.innerHTML = characters
    //var total = document.querySelector('#total')

    //console.log(state.team.cards)
    // total.textContent = teamCharacters.reduce(function (card) {
    //
    // })
  },
  total: function () {

    //fetch cost VALUE
    let thisCost = event.target.textContent.trim()
    //console.log(state.team.cards)

    let totalCost = document.querySelector('#total')

    //if too many characters are selected, show an error msg
    if((total.textContent - thisCost) < 0) {
      let alert = document.createElement('div');
      alert.innerHTML = "too many points";
      alert.className = "alert";
      let teamCount = document.querySelector('.team-count');
      teamCount.append(alert);
    } else {
      //subtract selected from total
      total.textContent -= thisCost;
      state.team.max = total.textContent;
    }

  }
}

render.active()
render.team()
