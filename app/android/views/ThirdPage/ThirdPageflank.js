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
export default class ThirdPageflank extends React.Component{
    render(){
        return(
            <View style={{flexDirection:'row',height:35,backgroundColor:'rgb(249,249,249)'}}>
                <View style={{flex:0.3}}></View>
                <View style={{flex:0.7}}><TouchableOpacity style={{marginTop:7}}>
                    <Text>我的</Text>
                </TouchableOpacity></View>
                <View style={{flex:4}}></View>
                <View style={{flex:0.5}}><TouchableOpacity>
                    <Image source={require('../../img/Thirdflankset.jpg')} style={{height:22,marginTop:7}}/>
                </TouchableOpacity></View>
                <View style={{flex:0.3}}></View>
                <View style={{flex:0.5}}><TouchableOpacity>
                    <Image source={require('../../img/Thirdflanknotice.jpg')} style={{height:22,marginTop:7}}/>
                </TouchableOpacity></View>
                <View style={{flex:0.1}}></View>
            </View>
        );
    }
}