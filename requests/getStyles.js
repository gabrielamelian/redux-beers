const request = require('superagent')

// const getStylesDescriptions = (styles) => {
//
//   const describedStyles = []
//   styles.forEach(function(style, index) {
//     getDescription(style, setDescription)
//
//   })
//
//   function setDescription(description, style) {
//     style.description = description
//     describedStyles.push(style)
//   }
//
//   return describedStyles
//
//
// }


function getStyles(beers) {
  var styles = []
  beers.forEach(function(beer) {
    if (!styles.includes(beer.style)) styles.push({name: beer.style})
  })
  //styles = getStylesDescriptions(styles)
  return styles
}


function getDescription(style, callback) {
  const url = `https://rogue-beers.herokuapp.com/api/v1/styles?q=${style.name}`
  request
    .get(url)
    .end(function(err, res) {
      if(err) return
      //style.description = res.body.styles[0].description || ''
      const description = (description) ? res.body.styles[0].description : ''
      callback(description)
    })
}


module.exports = getStyles
