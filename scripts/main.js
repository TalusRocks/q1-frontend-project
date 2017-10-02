var state = {
  pool: {
    active: heroes,
    disabled: []
  },
  team: {
    max: 30,
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

    var nodes = document.querySelectorAll('.character-wrap .cost')
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener('click', function (event) {
        var cost = event.target
        if (cost.nodeName == 'P') cost = cost.parentElement

        var idx = cost.getAttribute('data-idx')
        var card = state.pool.active.splice(idx, 1)[0]
        state.team.cards.push(card)
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
    total.textContent = teamCharacters.reduce(function (card) {
      console.log(state.team.cards)
    })
  }
}

//state.team.cards.push(state.pool.active.shift())
render.active()
render.team()
