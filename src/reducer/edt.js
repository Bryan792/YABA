import Immutable from 'immutable'
import _ from 'lodash'
import moment from 'moment'

import { LOAD_EDT_SUCCESS } from '../action/edt'

const initialState = Immutable.fromJS({
  departures: {},
})

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EDT_SUCCESS: {
      let returnState = state
      action.payload.root.station.forEach(orig => {
        let departures = _.flatten(orig.etd.map && orig.etd.map(station => station.estimate.map && station.estimate.map(estimate => (
          {
            destination: station.destination,
            abbreviation: station.abbreviation,
            ...estimate,
            time: moment(action.payload.root.date + ' ' + action.payload.root.time).add(estimate.minutes, 'm')
          }
          )
        ))
        ).sort((a, b) => a.minutes - b.minutes)
        console.log(orig.abbr)
        returnState = returnState.set(orig.abbr, departures)
      })
      return returnState
    }
    default:
      return state
  }
}
