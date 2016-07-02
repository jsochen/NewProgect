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
  View,
} from 'react-native';
import SecondPageComponent from "./SecondPageComponent";
export default class FirstPageComponent extends React.Component {
     constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton1() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            })
        }
    }
  render() {
        return (
                <TouchableOpacity onPress={this._pressButton1.bind(this)}>
                    <View><Text>WebView</Text></View>
                </TouchableOpacity>    
        );
    }
}
