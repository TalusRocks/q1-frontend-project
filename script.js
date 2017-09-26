let characterList = document.querySelector('.characters-wrap');

characterList.addEventListener('click', function (event) {
  let findClass = event.target.classList;

  if(findClass.contains('cost') || findClass.contains('cost-value') ||
  findClass.contains('selected')) {
    console.log('found cost?')
  }
});
