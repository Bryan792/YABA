import React from 'react'
import { Text, View } from 'react-native'
import moment from 'moment'

export default class Departure extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => { 
      //this.forceUpdate()
    }, 60000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    let {destination, hexcolor, minutes} = this.props
    return (
      <View style={{
        backgroundColor: hexcolor,
        height: 100,
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 5,
      }}>
        <View>
          <Text>{destination}</Text>
        </View>
        <View>
          <Text>{this.props.time.diff(moment(), 'm')} min</Text>
          <Text>{this.props.time.format('h:mm a')}</Text>
        </View>
      </View>
    )
  }
}
