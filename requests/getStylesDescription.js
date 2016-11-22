const request = require('superagent')

module.exports= getDescription

function getDescription(style, dispatch) {
  dispatch({type: 'SHOW_STYLE', payload: style})
  dispatch({type: 'TOGGLE_LOADING'})
  const split = style.split(' ')
  const lastword = split[split.length -1]
  const url = `https://rogue-beers.herokuapp.com/api/v1/styles?q=${lastword}`
  request
    .get(url)
    .end(function(err, res) {
      if(err) return
      //style.description = res.body.styles[0].description || ''
      var description = ''
      if (res.body.styles.length > 0) description = res.body.styles[0].description
      dispatch({type: 'TOGGLE_LOADING'})
      dispatch({type: 'SHOW_DESCRIPTION', payload: description})
    })
}
