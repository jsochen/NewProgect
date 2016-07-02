'use strict';
import React,{
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Component,
    Image,
    Dimensions,
    } from 'react-native';

var Heading=['酒店春节游','拯救伦敦','美若桃花','Spring春节游'];
var Subheading=['约惠2折起','14.9特惠观影','惊喜不断1折起','车票2折起'];
export default class Tmodule extends React.Component{
    render() {
        return (
    <View style={{backgroundColor:'#FFFFFF'}}>
      <View style={{ flexDirection:'row'}}>
        <View style={styles.Emodules}>
            <View style={styles.headings}>
                <Text style={styles.headingStyle}>{Heading[0]}</Text>
                <Text style={styles.subheadingStyle}>{Subheading[0]}</Text>
            </View>
        <View style={styles.ImageStyle}>
            < Image style={styles.ImageStyle}
                    source={require('../../../img/tuijian1.jpg')}  />
        </View>
        </View>
        <View style={styles.Emodules}>
            <View style={styles.headings}>
                <Text style={styles.headingStyle}>{Heading[1]}</Text>
                <Text style={styles.subheadingStyle}>{Subheading[1]}</Text>
            </View>
        <View style={styles.ImageStyle}>
            < Image style={styles.ImageStyle}
                    source={require('../../../img/tuijian2.jpg')}  />
        </View>
        </View>
      </View>
      <View style={{ flexDirection:'row'}}>
            <View style={styles.Emodules}>
                <View style={styles.headings}>
                    <Text style={styles.headingStyle}>{Heading[2]}</Text>
                    <Text style={styles.subheadingStyle}>{Subheading[2]}</Text>
                </View>
            <View style={styles.ImageStyle}>
                < Image style={styles.ImageStyle}
                        source={require('../../../img/tuijian3.jpg')}  />
            </View>
            </View>
            <View style={styles.Emodules}>
                <View style={styles.headings}>
                    <Text style={styles.headingStyle}>{Heading[3]}</Text>
                    <Text style={styles.subheadingStyle}>{Subheading[3]}</Text>
                </View>
                <View  style={styles.ImageStyle}>
                < Image style={styles.ImageStyle}
                        source={require('../../../img/tuijian4.jpg')}  />
                </View>
            </View>
      </View>
    </View>
        );
    }
}
var W_width=Dimensions.get('window').width;
var W_height=Dimensions.get('window').height;
const styles=StyleSheet.create({
    Emodules:{
        flexDirection:'row' ,
        flex:1,
        borderWidth:0.5,
        borderColor:'#EAE5E5',
    },
    headings:{
         flex:3,
         width:W_width*0.25,
         height:W_height*0.1,
    },
    headingStyle:{
      textAlign:"center",
        fontSize:15,
        color:'#FB372B',

    },
    subheadingStyle:{
        textAlign:"center",
        fontSize:10,
        color:'#8D8EA1',
    },
    ImageStyle:{
        flex:1,
        width:W_width*0.15,
        height:W_height*0.1,
        marginRight:W_width*0.15,
    },
});