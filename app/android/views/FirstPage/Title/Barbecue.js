'use struct';
import React,
    {
    AppRegistry,
    StyleSheet,
    Component,
    Text,
    View,
    }from 'react-native';
var strings ='<Text style={{color: "red",}}>测试</Text>';
export default class Barbecue extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            stin:strings,
        };
      }
    render(){
        return(
            <View>Barbecue</View>
        );
    }
}

