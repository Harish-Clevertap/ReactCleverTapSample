import React, { Component } from 'react'
//import CleverTap
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

const CleverTap = require('clevertap-react-native');

class App extends Component {


  constructor() {

    super();
    CleverTap.setDebugLevel(3);

    CleverTap.createNotificationChannel("divyesh",
      "divyesh",
      "Testing Push Notification Channel",
      5,
      true);// The notification channel importance can have any value from 1 to 5.
    // A higher value means a more interruptive notification.

  }

  state = {
    count: 0
  }



  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked {this.state.count} times
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;