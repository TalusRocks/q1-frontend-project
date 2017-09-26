let characterCost = document.querySelectorAll('.cost');

for (let i = 0; i < characterCost.length; i++) {
  let characterCostValue = characterCost[i];

  characterCostValue.addEventListener('click', function (event) {
    console.log('clicked')
  });
}
