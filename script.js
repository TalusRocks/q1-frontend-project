let characterCost = document.querySelectorAll('.cost');

for (let i = 0; i < characterCost.length; i++) {
  let costValue = document.querySelectorAll('.cost-value');
  let thisCost = costValue[i];

  thisCost.addEventListener('click', function (event) {
    console.log(thisCost.textContent)
  });
}
