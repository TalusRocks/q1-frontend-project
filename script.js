
//POPULATE CHARACTER HTML WITH DATA
let characterWrap = document.createElement('div');
characterWrap.className = 'character-wrap';
characterWrap.innerHTML = `<div class="cost-wrap">
</div>
<div class="character">
</div>`;

let charactersContent = document.querySelector('.characters-content');

for ( var char in hero.red ) {
  if(characterWrap) {
    //create the HTML containers
    let dupWrap = characterWrap.cloneNode(true);
    charactersContent.append(dupWrap);


    //put in each character's name, health
    //use lastChild to access nodelist
    let thisChar = dupWrap.lastChild;
    let thisName = hero.red[char].name;
    let thisHealth = hero.red[char].health;
    thisChar.innerHTML = '<p class=" character-name mrg-left">' + thisName + '</p>' + '<p class="health mrg-right">' + thisHealth + '</p>' ;

    //put in each character's dice costs
    let thisCost = dupWrap.firstChild;
    let firstCost = hero.red[char].cost[0];
    let secondCost = hero.red[char].cost[1];
    thisCost.innerHTML = '<div class="cost"><p class="cost-value">' + firstCost + '</p></div>' + '<div class="cost"><p class="cost-value">' + secondCost + '</p></div>';

  }
}

//add class name of 'red' to each
let addColorClass = document.querySelectorAll('.cost');
for (let i = 0; i < addColorClass.length; i++) {
  addColorClass[i].classList.add('red');
}



//grab character cost
let characterCost = document.querySelectorAll('.cost');

for (let i = 0; i < characterCost.length; i++) {
  let cost = characterCost[i]

  cost.addEventListener('click', function (event) {
    //get selected cost
    let selectedCost = cost.textContent.trim();

    //access the total (30)
    let total = document.querySelector('#total');

    //if too costly, remove event listener and add disabled class


    //if too many characters are selected, show an error msg
    if((total.textContent - selectedCost) < 0) {
      let alert = document.createElement('div');
      alert.innerHTML = "too many points";
      alert.className = "alert";
      let teamCount = document.querySelector('.team-count');
      teamCount.append(alert);
    } else {
      //subtract from total
      total.textContent -= selectedCost;
    }


    //append character to team
    // let teamContent = document.querySelector('#team-content');
    // teamContent.innerHTML = "hi";

  });



}

//show and hide sections with chevron toggle
// let chevron = document.querySelectorAll('.fa');
//
// for (let i = 0; i < chevron.length; i++) {
//   let chev = chevron[i];
//   chev.addEventListener('click', function(event) {
//     console.log(event.target)
//
//     // function toggle() {
//     var x = document.querySelector('.filter-content');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     // }
// }
//
//   });
// }
