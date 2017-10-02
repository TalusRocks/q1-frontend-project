function characterWrap (character, idx) {
  return `
    <div class="character-wrap">
      <div class="cost-wrap">
        <div class="cost ${character.color}" data-idx="${idx}">
          <p class="cost-value">${character.cost[0].point}</p>
        </div>
        <div class="cost ${character.color}" data-idx="${idx}">
          <p class="cost-value">${character.cost[1].point}</p>
        </div>
      </div>
      <div class="character">
        <p class=" character-name mrg-left">
          ${character.name}
          <span class="tiny mrg-left">${character.subtitle}</span>
        </p>
        <br>
        <p class="health mrg-right">${character.health}</p>
      </div>
    </div>
  `
}
