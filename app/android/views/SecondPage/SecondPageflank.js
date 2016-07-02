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
    Alert,
    } from 'react-native';
import Classification from "./flank/Classification";
import Localtiony from "./flank/Localtiony";
import Sortmethed from "./flank/Sortmethed";
var selectbar=['电影','莱州新法院','离我最近'];
export default class FirstPageflank extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            addView:(null),//返回点击后的的View，
            touchalocation:0, //当做当前打开的是哪一个视图标志
            changetextcolor1:(<Text style={{textAlign:'center'}}>{selectbar[0]}</Text>),
            changetextcolor2:(<Text style={{textAlign:'center'}}>{selectbar[1]}</Text>),
            changetextcolor3:(<Text style={{textAlign:'center'}}>{selectbar[2]}</Text>),
        };
    }
        _addView(eventname){
      var addViews;
      if(eventname == 'classification' && this.state.touchalocation!=1) {
          this.setState({
              addView:<Classification />,
              touchalocation:1,
              changetextcolor1:(<Text style={{textAlign:'center',color:'#1EE5B7'}}>{selectbar[0]}</Text>),
              changetextcolor2:(<Text style={{textAlign:'center'}}>{selectbar[1]}</Text>),
              changetextcolor3:(<Text style={{textAlign:'center'}}>{selectbar[2]}</Text>),
       });
      }
      else if(eventname == 'classification' && this.state.touchalocation==1){
                this.setState({
                    addView: null,
                    touchalocation:0,
                    changetextcolor1:(<Text style={{textAlign:'center'}}>{selectbar[0]}</Text>),
                });
      }
      else if(eventname == 'localtion' && this.state.touchalocation!=2){
          this.setState({
              addView:<Localtiony/>,
              touchalocation:2,
              changetextcolor1:(<Text style={{textAlign:'center'}}>{selectbar[0]}</Text>),
              changetextcolor2:(<Text style={{textAlign:'center',color:'#1EE5B7'}}>{selectbar[1]}</Text>),
              changetextcolor3:(<Text style={{textAlign:'center'}}>{selectbar[2]}</Text>),
          });
      }
      else if(eventname == 'localtion' && this.state.touchalocation==2){
          this.setState({
              addView: null,
              touchalocation:0,
              changetextcolor2:(<Text style={{textAlign:'center'}}>{selectbar[1]}</Text>),
          });
      }
      else if(eventname == 'sortmethed' && this.state.touchalocation!=3){
          this.setState({
              addView:<Sortmethed/>,
              touchalocation:3,
              changetextcolor1:(<Text style={{textAlign:'center'}}>{selectbar[0]}</Text>),
              changetextcolor2:(<Text style={{textAlign:'center'}}>{selectbar[1]}</Text>),
              changetextcolor3:(<Text style={{textAlign:'center',color:'#1EE5B7'}}>{selectbar[2]}</Text>),
          });
      }
      else if(eventname == 'sortmethed' && this.state.touchalocation==3){
          this.setState({
              addView: null,
              touchalocation:0,
              changetextcolor3:(<Text style={{textAlign:'center'}}>{selectbar[2]}</Text>),
          });
      }
  }
    render(){
        return(
        <View style={{backgroundColor:'#F9F9F9'}}>
            <View style={{height:7}}></View>
            <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:4}}><TouchableOpacity><Text>全部商家</Text></TouchableOpacity></View>
                    <View style={{flex:1}}></View>
                    <View style={{flex:4}}><TouchableOpacity><Text>优惠商家</Text></TouchableOpacity></View>
                    <View style={{flex:10}}></View>
                    <View style={{flex:1.5}}><TouchableOpacity><Image source={require('../../img/secondlocation.jpg')} /></TouchableOpacity></View>
                    <View style={{flex:1}}></View>
                    <View style={{flex:1.5}}><TouchableOpacity><Image source={require('../../img/secondselect.jpg')} /></TouchableOpacity></View>
                    <View style={{flex:1}}></View>
            </View>
            <View style={{height:7}}></View>
            <View style={styles.fenge}></View>
            <View style={{backgroundColor:'#FFFFFF'}}>
                <View style={{flexDirection:'row',marginTop:5,marginBottom:5}}>
                    <View style={{flex:1,borderRightWidth:0.5}}>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this._addView('classification')}>
                        <View style={{flex:4}}>{this.state.changetextcolor1}
                        </View>
                        <View style={{flex:1}}><Image source={require('../../img/selectbarim.jpg')} style={{height:25}}/>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,borderRightWidth:0.5}}>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this._addView('localtion')}>
                            <View style={{flex:4}}>{this.state.changetextcolor2}
                            </View>
                            <View style={{flex:1}}><Image source={require('../../img/selectbarim.jpg')} style={{height:25}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,borderRightWidth:0.5}}>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this._addView('sortmethed')}>
                            <View style={{flex:4}}>{this.state.changetextcolor3}
                            </View>
                            <View style={{flex:1}}><Image source={require('../../img/selectbarim.jpg')} style={{height:25}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.fenge}></View>
                {this.state.addView}
            </View>
        </View>
        );
    }
}
var W_width=Dimensions.get('window').width;
var W_height=Dimensions.get('window').height;
const styles=StyleSheet.create({
    Textchange:{
        color:'#01FEB9',
    },
  fenge:{
      height:0.5,
      backgroundColor:'#000000',
      opacity:0.3,
  },
});