//POPULATE CHARACTERS
let characterWrap = document.createElement('div');
characterWrap.className = 'character-wrap';
characterWrap.innerHTML = `<div class="cost-wrap">
</div>
<div class="character">
</div>`;

let charactersContent = document.querySelector('.characters-content');



for (var char in hero) {
  let heroes = hero[char];

  for (var heroColor in heroes) {
    let allHeroes = heroes[heroColor];
    let nickname = heroColor;

    if(characterWrap) {
      //create the HTML containers
      let dupWrap = characterWrap.cloneNode(true);
      charactersContent.append(dupWrap);

      //ADD CHARACTER DETAILS
      //use lastChild to access nodelist
      let thisChar = dupWrap.lastChild;
      let thisName = allHeroes.name;
      if (allHeroes.unique === true) {
        thisName = '<i class="fa fa-star mrg-right" aria-hidden="true"></i>' + thisName;
      }
      let thisHealth = allHeroes.health;
      thisChar.innerHTML = '<p class=" character-name mrg-left">' + thisName + '<span class="tiny mrg-left">' + nickname + '</span></p>' + '</p>' + '<p class="health mrg-right">' + thisHealth + '</p>';

      //put in each character's dice costs
      let thisCost = dupWrap.firstChild;
      let firstCost = allHeroes.cost[0];
      let secondCost = allHeroes.cost[1];
      thisCost.innerHTML = '<div class="cost"><p class="cost-value">' + firstCost + '</p></div>' + '<div class="cost"><p class="cost-value">' + secondCost + '</p></div>';

      if (allHeroes.color === 'blue') {
        thisCost.children[0].classList.add('blue');
        thisCost.children[1].classList.add('blue')
      }
      if (allHeroes.color === 'red') {
        thisCost.children[0].classList.add('red');
        thisCost.children[1].classList.add('red')
      }
      if (allHeroes.color === 'yellow') {
        thisCost.children[0].classList.add('yellow');
        thisCost.children[1].classList.add('yellow')
      }

    // hide the first die value if zero
      if(firstCost === 0) {
        thisCost.firstChild.style.opacity = 0;
      }


    }

  } //close heroColor in heroes

} //close char in hero






//COST CALCULATIONS AND FILTERS
//clickable area, then trim to get cost
let characterCost = document.querySelectorAll('.cost');

for (let i = 0; i < characterCost.length; i++) {
  //access the total (30)
  let total = document.querySelector('#total');

  //get all the costs (for filtering)
  let allCosts = document.querySelectorAll('.cost-value');

  //add event listener to each cost...
  let cost = characterCost[i]
  cost.addEventListener('click', function(event) {
    //get selected cost
    let selectedCost = cost.textContent.trim();

    //ADD CHARACTERS TO TEAM CONTENT
    //this is where to append it
    let teamContent = document.querySelector('#team-content');
    //this is the whole chracter-wrap to append
    let selectedCharacter = this.parentElement.parentElement;
    this.classList.add('disabled');
    this.style.border = '3px solid black';
    teamContent.append(selectedCharacter);

    //if too many characters are selected, show an error msg
    if((total.textContent - selectedCost) < 0) {
      let alert = document.createElement('div');
      alert.innerHTML = "too many points";
      alert.className = "alert";
      let teamCount = document.querySelector('.team-count');
      teamCount.append(alert);
    } else {
      //subtract selected from total
      total.textContent -= selectedCost;
    }

    //if character has been selected, also disable
    //if character has same name, also disable

    //if too costly, add disabled class
    allCosts.forEach(function(element){
      if ((total.textContent - element.textContent) < 0) {
        element.parentElement.classList.add('disabled');
      }
      // console.log(teamContent.innerHTML.includes("Rey"))
    });

  });//close function

}//close for loop


//FILTER BY COLOR
// for ( var redHeroChar in hero.red ) {
//   let allRedChar = document.querySelectorAll('.cost.red');
//   console.log(allRedChar)
// }



let allCharacters = document.querySelectorAll('.character-wrap');

let blueFilter = document.querySelector('.blue-toggle');

blueFilter.addEventListener('click', function() {

  for (var char in allCharacters) {
    //console.log(allCharacters[char].children[0].children[1].classList[1])
    let findColor = allCharacters[char].children[0].children[1].classList[1];

    if (findColor === 'red') {
      console.log(allCharacters[char])
      //hide THAT .character-wrap
      allCharacters[char].style.display = 'none';
    }
    //aaand, how to get them back? use a class and add/remove it?
    console.log()
  }

}); //close blue filter click event listener

//show and hide sections with chevron toggle
// let chevron = document.querySelectorAll('.fa');
//
// for (let i = 0; i < chevron.length; i++) {
//   let chev = chevron[i];
//   chev.addEventListener('click', function(event) {
//
//     var toggleContent = document.querySelectorAll('.fa-cheveron-down');
//
//     let toggleThis = chevron[i].parentElement.nextElementSibling;
//
//     if (toggleThis.style.display === 'none') {
//         toggleThis.style.display = 'flex';
//     } else {
//         toggleThis.style.display = 'none';
//     }
//
//   }); //close event listener
// }//close for loop
