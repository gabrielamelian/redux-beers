const html = require('yo-yo')
const getStylesDescription = require('../requests/getStylesDescription')

module.exports = createButtons

function createButtons(styles, dispatch) {
  return html
    `<div>
      ${styles.map(function(style) {
        return html`<button onclick=${() => getStylesDescription(style.name, dispatch)}>${style.name}</button>`
      })}
    </div>`
}
