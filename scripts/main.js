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
      characterCost[i].addEventListener('click', function (event) {
        //make both the div and inner p targets for cost
        var cost = event.target
        if (cost.nodeName == 'P') cost = cost.parentElement

        //fetch index in data, and grab the card
        var idx = cost.getAttribute('data-idx')
        var dieCount = cost.getAttribute('data-die')
        var card = state.pool.active.splice(idx, 1)[0]

        console.log('die count', dieCount);
        //add the selected card to the 'team'
        state.team.cards.push(card)
        card.cost[dieCount].selected = true

        //find clicked die and change data to selected????
        //current idea: grab the html, and see if it matches one of the object's point values, and if so, change the selected to true. Seems longwinded tho.
        // let teamSize = state.team.cards.length - 1
        // let pointObj = state.team.cards[teamSize].cost
        // console.log(pointObj[1].selected, "before")
        // //console.log(state.team.cards[teamSize].cost[0].selected)
        // let pointText = event.target.textContent.trim()
        // for(var pt in pointObj) {
        //   // console.log(pt, "pt")
        //   // console.log(pointObj, "pointObj")
        //   // console.log(pointObj[pt], "pointObj[pt]")
        //   // console.log(pointObj[pt].point, "pointObj[pt].point")
        //   // console.log(pointText, "pointText")
        //   if (pointObj[pt].point == pointText) {
        //     pointObj[pt].selected = true
        //   }
        // }
        // console.log(pointObj, "after")

        //re-render
        render.active()
        render.disabled()
        render.total()
        render.team()
      })
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
    var total = document.querySelector('#total')
    //how do I know WHICH point was clicked on?
    //have to set selected to true earlier...
    console.log(state.team.cards)
    // total.textContent = teamCharacters.reduce(function (card) {
    //
    // })
  },
  total: function () {

    //fetch cost VALUE
    let thisCost = event.target.textContent.trim()
    //..but how to grab the DATA??
    //console.log(event.target.parentNode)
    //maybe set selected die to "selected"...??
    //state.team.cards[0].cost[0].selected = true
    //subtract from max and display
    let totalCost = document.querySelector('#total')
    //totalCost.textContent -= thisCost
    //why is the max stored in the data structure?

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
      //console.log(state.team.max)
    }

  }
}

render.active()
render.team()
