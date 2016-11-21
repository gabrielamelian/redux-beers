const redux = require('redux')
const html = require('yo-yo')

const template = require('./views/beers')
const reducer = require('./reducer')

var initialState = {
  beers: [],
  loading: false,
  showStyle: false
}

const store = redux.createStore(reducer, initialState)

const {dispatch, getState, subscribe} = store

const updateView = () => {
  const currentState = getState()
  const newView = template(currentState, dispatch)
  html.update(view, newView)
}

subscribe(updateView)

const view = template(initialState, dispatch)
document.body.appendChild(view)
