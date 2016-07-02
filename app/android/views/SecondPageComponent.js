'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TextInput,
  Navigator,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
class SecondPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SecondPageComponent';
    }
    render() {
        return <Text>SecondPageComponent</Text>;
    }
}

export default SecondPageComponent;
