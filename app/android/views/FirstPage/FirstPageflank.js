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
            <View style={{flexDirection:'row',height:35,backgroundColor:'#06E8DE'}}>
                <View style={{flex:0.1}}></View>
                <View style={{flex:0.7}}><TouchableOpacity style={{marginTop:7}}>
                    <Text style={{color:'#FFFFFF'}}>烟台</Text>
                </TouchableOpacity></View>
                <View style={{flex:0.1}}></View>
                <View style={{flex:4}}><TouchableOpacity>
                    <Image source={require('../../img/select.png')} style={{height:26,marginTop:5}}/>
                </TouchableOpacity></View>
                <View style={{flex:0.1}}></View>
                <View style={{flex:0.5}}><TouchableOpacity>
                    <Image source={require('../../img/ma.jpg')} style={{height:22,marginTop:7}}/>
                </TouchableOpacity></View>
                <View style={{flex:0.1}}></View>
                <View style={{flex:0.5}}><TouchableOpacity>
                    <Image source={require('../../img/xiaoxi.jpg')} style={{height:22,marginTop:7}}/>
                </TouchableOpacity></View>
                <View style={{flex:0.1}}></View>
            </View>
        );
    }
}