const html = require('yo-yo')

module.exports = createButtons

function createButtons(styles, dispatch) {
  return html
    `<div>
      ${styles.map(function(style) {
        return html`<button onclick=${() => dispatch({type: 'TOGGLE_STYLE', payload: style})}>${style}</button>`
      })}
    </div>`
}
