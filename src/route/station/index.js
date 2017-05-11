import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

import {
  loadEdt,
} from '../../action/edt'

import DepartureList from './departure-list'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    loadEdt: (station) => dispatch(loadEdt(station)),
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Station extends React.PureComponent {
  state = {
    orig: 'WARM'
  }

  componentDidMount() {
    this.props.loadEdt(this.state.orig)
  }

  render() {
    return (
      <View>
        <Text>{this.state.orig}</Text>
        <DepartureList
          orig={this.state.orig}
        />
      </View>
    )
  }
}
