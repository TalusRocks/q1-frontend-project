var filter = {
  colorFilter: function () {
    //get ea filter class
    let blueToggle = document.querySelector('.blue-toggle')
    let redToggle = document.querySelector('.red-toggle')
    let yellowToggle = document.querySelector('.yellow-toggle')
    //get the classes of active characters, for hiding
    let blueCharacters = document.querySelectorAll('.character-wrap .blue')
    let redCharacters = document.querySelectorAll('.character-wrap .red')
    let yellowCharacters = document.querySelectorAll('.character-wrap .yellow')




    let heroes = state.pool.active

    blueToggle.addEventListener('click', function() {
      let show = false
      //if heroes is empty or greater, run this check
      if(heroes.length > 0){
        //if heroes has any of this color, they are showing (show = true), else, show = false
        for (let k = 0; k < heroes.length; k++) {
          if (heroes[k].color.includes('blue')) {
            show = true
            break
          } else {
            show = false
          }
        }
      }

      //if blue is showing, click hides them
      //else, click shows them
      if (show === true) {
        //splice blue from heroes(active), which is showing, and push into hidden, not showing
        for (let i = 0; i < heroes.length; i++) {
          if (heroes[i].color === 'blue') {
            state.hidden.push(heroes[i])
            heroes.splice(i, 1)
            i--
          }
        }

        blueToggle.classList.add('blue-toggle-off')
      } else {
        //splice blue from hidden, push into heroes(active)
        for (let j = 0; j < state.hidden.length; j++) {
          if (state.hidden[j].color === 'blue') {
            heroes.push(state.hidden[j])
            state.hidden.splice(j, 1)
            j--
          }
        }

        blueToggle.classList.remove('blue-toggle-off')
      }
      //re-render active characters
      render.active()
    }) //close event listener


    redToggle.addEventListener('click', function() {
      let show = false
      if(heroes.length > 0){
        for (let k = 0; k < heroes.length; k++) {
          if (heroes[k].color.includes('red')) {
            show = true
            break
          } else {
            show = false
          }
        }
      }
      if (show === true) {
        for (let i = 0; i < heroes.length; i++) {
          if (heroes[i].color === 'red') {
            state.hidden.push(heroes[i])
            heroes.splice(i, 1)
            i--
          }
        }
        redToggle.classList.add('red-toggle-off')
      } else {
        for (let j = 0; j < state.hidden.length; j++) {
          if (state.hidden[j].color === 'red') {
            heroes.push(state.hidden[j])
            state.hidden.splice(j, 1)
            j--
          }
        }
        redToggle.classList.remove('red-toggle-off')
      }
      render.active()
    })

    yellowToggle.addEventListener('click', function() {
      let show = false
      if(heroes.length > 0){
        for (let k = 0; k < heroes.length; k++) {
          if (heroes[k].color.includes('yellow')) {
            show = true
            break
          } else {
            show = false
          }
        }
      }
      if (show === true) {
        for (let i = 0; i < heroes.length; i++) {
          if (heroes[i].color === 'yellow') {
            state.hidden.push(heroes[i])
            heroes.splice(i, 1)
            i--
          }
        }
        yellowToggle.classList.add('yellow-toggle-off')
      } else {
        for (let j = 0; j < state.hidden.length; j++) {
          if (state.hidden[j].color === 'yellow') {
            heroes.push(state.hidden[j])
            state.hidden.splice(j, 1)
            j--
          }
        }
        yellowToggle.classList.remove('yellow-toggle-off')
      }
      render.active()
    })

  }
  // ,
  // sideFilter: function () {
  //   //get ea filter class
  //   let heroToggle = document.querySelector('.hero-toggle')
  //   let villainToggle = document.querySelector('.villain-toggle')
  //
  // }

}//close filter
