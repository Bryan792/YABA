import React from 'react'
import { StackNavigator } from 'react-navigation'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import StationScreen from './route/station'
import edtReducer from './reducer/edt'

let store = createStore(combineReducers({
  edt: edtReducer,
}), applyMiddleware(thunk))

let App = StackNavigator({
  Home: {
    screen: StationScreen
  }
})

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
