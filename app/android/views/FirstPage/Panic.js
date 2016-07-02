'use strict';
import React,{
    Component,
    StyleSheet,
    AppRegistry,
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    } from 'react-native';
var Title=['主流主题餐厅','榴莲陪你','裕海洋火锅'];
var Price=['￥192','￥128','￥179.2'];
var reducePrice=['再减10','再减10','再减10'];
export default class Panic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:'daadw',
        };
    }
    render(){
        return(
            <View style={{flexDirection:'column'}}>
                <View  style={{flexDirection:'row',flex:1}}>
                    <View style={{flex:0.5,}}></View>
                    <Image style={styles.Imagelog} source={require('../../img/mingdianlog.jpg')}/>
                    <View style={{flex:4,}}></View>
                    <View style={styles.textinpView}>
                    <TextInput style={styles.textinput} editable={false} underlineColorAndroid='transparent' value={this.state.text}/>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={{flexDirection:'row',flex:3}}>
                    <View style={{flex:1,borderRightWidth:1,borderRightColor:'#EAE5E5'}}>
                        <Image style={styles.Imagegroom} source={require('../../img/Panic1.jpg')}/>
                        <View>
                            <Text style={styles.Titles}>{Title[0]}</Text>
                        </View>
                        <View style={styles.pricestyle}>
                            <View style={{flex:2}}><Text style={{textAlign:'center',color:'#0AF2FF'}}>{Price[0]}</Text></View>
                            <View style={{flex:2}}><Text style={{textAlign:'center',backgroundColor:'#D89C20'}}>{reducePrice[0]}</Text></View>
                            <View style={{flex:0.5}}></View>
                        </View>
                    </View>
                    <View style={{flex:1,borderRightWidth:1,borderRightColor:'#EAE5E5'}}>
                        <Image style={styles.Imagegroom} source={require('../../img/Panic2.jpg')}/>
                        <View>
                            <Text style={styles.Titles}>{Title[1]}</Text>
                        </View>
                        <View style={styles.pricestyle}>
                            <View style={{flex:2}}><Text style={{textAlign:'center',color:'#0AF2FF'}}>{Price[1]}</Text></View>
                            <View style={{flex:2}}><Text style={{textAlign:'center',backgroundColor:'#D89C20'}}>{reducePrice[1]}</Text></View>
                            <View style={{flex:0.5}}></View>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <Image style={styles.Imagegroom} source={require('../../img/Panic3.jpg')}/>
                        <View>
                            <Text style={styles.Titles}>{Title[2]}</Text>
                        </View>
                        <View>
                            <View style={styles.pricestyle}>
                                <View style={{flex:2}}><Text style={{textAlign:'center',color:'#0AF2FF'}}>{Price[2]}</Text></View>
                                <View style={{flex:2}}><Text style={{textAlign:'center',backgroundColor:'#D89C20'}}>{reducePrice[2]}</Text></View>
                                <View style={{flex:0.5}}></View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
var W_width=Dimensions.get('window').width;
var W_height=Dimensions.get('window').height;
const styles =StyleSheet.create({
    pricestyle:{
        flexDirection:'row',
        marginTop:W_height*0.02,

    },
    Titles:{
        textAlign:'center',
        fontWeight:'600',
        fontFamily:'黑体',
    },
    Imagegroom:{
        marginLeft:W_width*0.06,
        marginTop:W_height*0.04,
        width:W_width*0.2,
        height:W_height*0.1,
    },
    textinpView:{
        marginTop:W_height*0.01,
        flex:4,
        width:W_width*0.3,
        height:W_height*0.04,
        borderWidth: 1,
        borderColor: 'gray',
    },
    textinput:{
        width:W_width*0.3,
        height:W_height*0.02,
    },
    Imagelog:{
        flex:3,
        marginTop:W_height*0.01,
        width:W_width*0.2,
        height:W_height*0.04,
    },
})