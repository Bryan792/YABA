import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'

import {
  loadEdt,
} from '../../action/edt'

import Departure from './departure'

function mapStateToProps(state) {
  return {
    departures: state.edt
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    loadEdt: (station) => dispatch(loadEdt(station)),
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {...ownProps, ...dispatchProps,
    departures: stateProps.departures.get(ownProps.orig),
  }
}

@connect(mapStateToProps, mapDispatchToProps, mergeProps)
export default class DepartureList extends React.PureComponent {
  componentDidMount() {
    setInterval(() => { 
      this.props.loadEdt(this.props.orig)
    }, 5000)
  }

  render() {
    return (
      <FlatList
        data={this.props.departures}
        renderItem={({item}) => (
          <Departure 
            {...item}
          />
        )}
        keyExtractor={(item, index) => item.abbreviation + item.time.diff(moment(), 's')}
      />
    )
  }
}
