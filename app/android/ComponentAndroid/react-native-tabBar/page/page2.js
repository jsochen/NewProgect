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
    } from 'react-native';
import Enjoy from "../../../views/FirstPage/Enjoy";
export default class Page2 extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={true} style={{height:2000}}>
                <Enjoy/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#888CFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#222222',
        marginBottom: 5,
    },
});
