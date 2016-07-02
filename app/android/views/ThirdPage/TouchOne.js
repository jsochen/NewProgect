/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Navigator,
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    } from 'react-native';
export default class TouchOne extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            imgurl:this.props.imgurl,
            massageTitle:this.props.massageTitle,
            massage:this.props.massage,
        };
      }
    render(){
        return(
            <View>
            <TouchableOpacity style={{backgroundColor:'#FFFFFF'}}>
              <View style={styles.touchastyle}>
                <View style={{flex:0.3}}></View>
                <View style={{flex:1}}><Image source={this.state.imgurl}/></View>
                <View style={{flex:4}}><Text style={{textAlign:'left'}}>{this.state.massageTitle}</Text></View>
                <View style={{flex:6}}><Text style={{textAlign:'right',opacity:0.7}}>{this.state.massage}</Text></View>
                <View style={{flex:0.3}}></View>
                <View style={{flex:0.3}}><Text>{'>'}</Text></View>
                <View style={{flex:0.3}}></View>
              </View>
            </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}></View>
                <View style={styles.fenge}></View>
                </View>
            </View>
        );
    }
}
var W_width=Dimensions.get('window').width;
const styles=StyleSheet.create({
    fenge:{
        flex:4,
        height:0.5,
        width:W_width*0.8,
        backgroundColor:'#000000',
        opacity:0.3,
    },
    touchastyle:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
    }
});