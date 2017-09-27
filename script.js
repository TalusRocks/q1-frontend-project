
//POPULATE CHARACTER HTML WITH DATA
let characterWrap = document.createElement('div');
characterWrap.className = 'character-wrap';
characterWrap.innerHTML = `<div class="cost-wrap">
  <div class="cost yellow">
    <p class="cost-value"></p>
  </div>
  <div class="cost yellow">
    <p class="cost-value"></p>
  </div>
</div>
<div class="character">
  <p class="mrg-left"></p>
  <p class="health mrg-right"></p>
</div>`;

let charactersContent = document.querySelector('.characters-content');

for ( char in hero.red ) {

  // let redHeroName = hero.red[char].name;

  if(characterWrap) {
    let dupWrap = characterWrap.cloneNode(true);
    charactersContent.append(dupWrap)
  }

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
