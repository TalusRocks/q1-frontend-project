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
      let show = true

      for (let k = 0; k < heroes.length; k++) {
        //console.log(heroes[k].color.includes('blue'))
        if (heroes[k].color.includes('blue')) {
          show = true
          break
        } else {
          show = false
        }
      } //close k loop
      console.log(show)
      if (show === true) {
        //splice blue from heroes(active), push into hidden
        for (let i = 0; i < heroes.length; i++) {
          if (heroes[i].color === 'blue') {
            state.hidden.push(heroes[i])
            heroes.splice(i, 1)
            i--
          }
        }

      } else {
        //splice blue from hidden, push into heroes(active)
        for (let j = 0; j < state.hidden.length; j++) {
          if (state.hidden[j].color === 'blue') {
            heroes.push(state.hidden[j])
            state.hidden.splice(j, 1)
            j--
          }
        }

      }


      render.active()
    }) //close event listener

  }//close colorFilter

}//close filter
