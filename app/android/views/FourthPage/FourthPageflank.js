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
    } from 'react-native';
export default class FirstPageflank extends React.Component{
    render(){
        return(
            <View style={{flexDirection:'row',height:35,backgroundColor:'rgb(249,249,249)'}}>
                <View style={{flex:0.1}}></View>
                <View style={{flex:0.7}}><TouchableOpacity style={{marginTop:7}}>
                    <Text style={{fontFamily:'黑体',fontWeight:'400'}}>更多</Text>
                </TouchableOpacity></View>
                <View style={{flex:4}}></View>
                <View style={{flex:1}}><TouchableOpacity style={{marginTop:7}}>
                   <Text style={{fontFamily:'黑体',fontWeight:'400'}}>精品应用</Text>
                </TouchableOpacity></View>
                <View style={{flex:0.3}}></View>
            </View>
        );
    }
}