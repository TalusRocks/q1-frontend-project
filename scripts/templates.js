function characterWrap (character, idx, location) {
  var hasRemoveMe = location === 'team'
  return `
    <div class="character-wrap" data-idx="${idx}">
      <div class="cost-wrap">
        <div class="cost
        ${character.color}
        ${character.cost[0].selected ? 'selected' : ''}
        ${character.cost[0].point === 0 ? 'hidden' : ''}" data-idx="${idx}" data-die="0">
          <p class="cost-value">${character.cost[0].point}</p>
        </div>
        <div class="cost
        ${character.color}
        ${character.cost[1].selected ? 'selected' : ''}" data-idx="${idx}" data-die="1">
          <p class="cost-value">${character.cost[1].point}</p>
        </div>
      </div>
      <div class="character">
        ${character.unique ? '<i class="fa fa-star mrg-left"></i>' : ''}
        <p class=" character-name mrg-left">
          ${character.name}
          <span class="tiny mrg-left">${character.subtitle}</span>
        </p>
        <br>
        <p class="health mrg-right">${character.health}</p>
        ${hasRemoveMe ? '<a href="#" class="remove-me"><i class="fa fa-times"></i></a>' : ''}
      </div>
    </div>
  `
}
