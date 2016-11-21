const request = require('superagent')

const getStyles = (state, dispatch) => {
  dispatch({type: 'TOGGLE_STYLE'})

  request
    .get()
}

module.exports = getStyles
