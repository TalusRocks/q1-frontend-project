var state = {
  pool: {
    active: heroes,
    disabled: []
  },
  team: {
    // max: 30,
    cards: []
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

    //get all the costs (for filtering)
    var allCosts = document.querySelectorAll('.cost-value')
    //get the cost (for targeting)
    var characterCost = document.querySelectorAll('.character-wrap .cost')
    for (var i = 0; i < characterCost.length; i++) {
      characterCost[i].addEventListener('click', function (event) {
        //make both the div and inner p targets for cost
        var cost = event.target
        if (cost.nodeName == 'P') cost = cost.parentElement

        //fetch index in data, and grab the card
        var idx = cost.getAttribute('data-idx')
        var card = state.pool.active.splice(idx, 1)[0]

        //state.team.cards[0].cost[0].selected = true
        //fetch cost VALUE
        let thisCost = event.target.textContent.trim()
        //maybe set selected die to "selected"...
        //subtract from max and display
        let totalCost = document.querySelector('#total')
        //totalCost.textContent -= thisCost

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
        }

        //?? not working????
        //CAN SEE IN CONSOLE, BUT NOT HTML 
        //if too costly, add disabled class
        allCosts.forEach(function(element){
          if ((total.textContent - element.textContent) < 0) {
            element.parentElement.classList.add('disabled')
            console.log(element.parentElement.classList)
          }
        })

        //add the selected card to the 'team'
        state.team.cards.push(card)
        //re-render active list and team list
        render.active()
        render.team()
      })
    }
  },
  disabled: function () {

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
    var total = document.querySelector('#total')
    // total.textContent = teamCharacters.reduce(function (card) {
    //
    // })
  }
}

render.active()
render.team()
