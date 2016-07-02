/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    } from 'react-native';
import FirstPageTitle from "../../../views/FirstPage/FirstPageTitle";
import Tmodule from "../../../views/FirstPage/tuijian/Tmodule";
import Panic from "../../../views/FirstPage/Panic";
import Enjoy from "../../../views/FirstPage/Enjoy";
export default class Texts extends React.Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={true}
                        contentContainerStyle={styles.contentContainer}>
                <View style={{position:'absolute',marginTop:100,height:200,marginLeft:0,backgroundColor:'#123145'}}>
                </View>
                <View>
                < FirstPageTitle />
                <View style={styles.FirstPflower}>
                </View>
                <Tmodule />
                <View style={styles.FirstPflower}>
                </View>
                <Panic />
                <View style={styles.FirstPflower}>
                </View>
                <Enjoy />
                <View style={styles.FirstPflower}>
                </View>
                    </View>
            </ScrollView>
        );
    }
}
var W_width=Dimensions.get('window').width;
var W_height=Dimensions.get('window').height;
const styles = StyleSheet.create({
    contentContainer:{
        backgroundColor:'#FFFFFF',

    },
    FirstPflower:{
        width:W_width,
        height:W_height*0.02,
        backgroundColor:'#E1E2EA',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#88FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#111111',
        marginBottom: 5,
    },
});