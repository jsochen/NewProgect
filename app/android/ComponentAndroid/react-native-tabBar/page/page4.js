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
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Settings from '../../../views/FourthPage/Setting/Settings';
export default class Page4 extends Component {
    render() {
        return (

               <ScrollView showsVerticalScrollIndicator={true}
                           contentContainerStyle={styles.contentContainer}>
                   <View style={styles.FirstPflower}></View>
                           <Settings/>
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
    Textstyle:{
        textAlign:'left',
        marginTop:5,
        fontFamily:'黑体',
        color:'#000000',
        fontWeight:'500',
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
        backgroundColor: '#F8888F',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#444444',
        marginBottom: 5,
    },
});
