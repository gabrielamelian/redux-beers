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

module.exports = getStyles
