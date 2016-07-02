/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React,{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
} from 'react-native';
import Beginning from "./app/android/views/beginning/Beginning";
class NewProgect extends React.Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {};
    }
  render() {
    return (
        < Beginning />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NewProgect', () => NewProgect);
