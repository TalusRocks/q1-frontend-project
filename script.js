//POPULATE CHARACTER HTML WITH DATA
let characterWrap = document.createElement('div');
characterWrap.className = 'character-wrap';
characterWrap.innerHTML = `<div class="cost-wrap">
</div>
<div class="character">
</div>`;

let charactersContent = document.querySelector('.characters-content');


for ( var redHeroChar in hero.red ) {
  if(characterWrap) {
    //create the HTML containers
    let dupWrap = characterWrap.cloneNode(true);
    charactersContent.append(dupWrap);

    //put in each character's name, health
    //use lastChild to access nodelist
    let thisChar = dupWrap.lastChild;
    let thisName = hero.red[redHeroChar].name;
    if (hero.red[redHeroChar].unique === true) {
      thisName = '<i class="fa fa-star mrg-right" aria-hidden="true"></i>' + thisName;
    }
    let thisHealth = hero.red[redHeroChar].health;
    thisChar.innerHTML = '<p class=" character-name mrg-left">' + thisName + '<span class="tiny mrg-left">' + redHeroChar + '</span></p>' + '<p class="health mrg-right">' + thisHealth + '</p>' ;

    //locate name
    //console.log(thisName)
    //if...

    //append star

    //put in each character's dice costs
    let thisCost = dupWrap.firstChild;
    let firstCost = hero.red[redHeroChar].cost[0];
    let secondCost = hero.red[redHeroChar].cost[1];
    thisCost.innerHTML = '<div class="cost red"><p class="cost-value">' + firstCost + '</p></div>' + '<div class="cost red"><p class="cost-value">' + secondCost + '</p></div>';

    //hide the first die value if it is zero, for characters with only one die cost
    if(firstCost === 0) {
      thisCost.firstChild.style.opacity = 0;
    }
  }
}

//add class name of 'red' to each
// let addColorClass = document.querySelectorAll('.cost');
// for (let i = 0; i < addColorClass.length; i++) {
//   addColorClass[i].classList.add('red');
// }

//BLUE
for ( var blueHeroChar in hero.blue ) {
  if(characterWrap) {
    //create the HTML containers
    let dupWrap = characterWrap.cloneNode(true);
    charactersContent.append(dupWrap);

    //put in each character's name, health
    //use lastChild to access nodelist
    let thisChar = dupWrap.lastChild;
    let thisName = hero.blue[blueHeroChar].name;
    if (hero.red[redHeroChar].unique === true) {
      thisName = '<i class="fa fa-star mrg-right" aria-hidden="true"></i>' + thisName;
    }
    let thisHealth = hero.blue[blueHeroChar].health;
    thisChar.innerHTML = '<p class=" character-name mrg-left">' + thisName + '<span class="tiny mrg-left">' + blueHeroChar + '</span></p>' + '<p class="health mrg-right">' + thisHealth + '</p>' ;

    //put in each character's dice costs
    let thisCost = dupWrap.firstChild;
    let firstCost = hero.blue[blueHeroChar].cost[0];
    let secondCost = hero.blue[blueHeroChar].cost[1];
    thisCost.innerHTML = '<div class="cost blue"><p class="cost-value">' + firstCost + '</p></div>' + '<div class="cost blue"><p class="cost-value">' + secondCost + '</p></div>';

    //hide the first die value if it is zero, for characters with only one die cost
    if(firstCost === 0) {
      thisCost.firstChild.style.opacity = 0;
    }
  }
}



//clickable area, then trim to get cost
let characterCost = document.querySelectorAll('.cost');

for (let i = 0; i < characterCost.length; i++) {
  //access the total (30)
  let total = document.querySelector('#total');

  //get all the costs
  let allCosts = document.querySelectorAll('.cost-value');

  //add event listener to each cost...
  let cost = characterCost[i]
  cost.addEventListener('click', handleCost);

  //fire this function on click
  function handleCost(event) {
    //get selected cost
    let selectedCost = cost.textContent.trim();

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

    //if character is unique, prevent from adding twice
    //need to check against current team?

    //if too costly, remove event listener and add disabled class
    allCosts.forEach(function(element){
      if ((total.textContent - element.textContent) < 0) {
        element.parentElement.classList.add('disabled');
        // element.parentElement.removeEventListener('click', handleCost);
      }
    });

    //add selected character to team!
    //find where to append it

    //traversing the DOM... but doesn't select *CLICKED* element
    let selectedCharacter = document.querySelectorAll('.character-wrap')

  };//close handleCost function

}//close for loop




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
