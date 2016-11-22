const html = require('yo-yo')

module.exports = createButtons

function createButtons(styles, dispatch) {
  return html
    `<div>
      ${styles.map(function(style) {
        return html`<button onclick=${() => dispatch({type: 'SHOW_STYLE', payload: style.name})}>${style.name}</button>`
      })}
    </div>`
}
