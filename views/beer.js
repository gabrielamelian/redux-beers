const html = require('yo-yo')

const beer = (beers, dispatch) => {
  return beers.map((beer, index) => html`
    <li id='${index}'>
      <div>${beer.name}</div>
      <div>${beer.abv}</div>
      <div>${beer.style}</div>
      <div>${beer.brewery}</div>
      <div>${beer.country}</div>
    </li>
    `
  )
}

module.exports = beer
