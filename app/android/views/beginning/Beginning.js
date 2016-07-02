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
    ViewPagerAndroid,
    } from 'react-native';
import NavigatorTest from "../../ComponentAndroid/react-native-tabBar/NavigatorTest";
export default class SampleComponent extends React.Component {
    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = Beginning;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
          }}
                renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        );
    }
}
class Beginning extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            page: 1,
            log1:'#06E8DE',
            log2:'#D7E4F5'
        };
      }
    _pressButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: NavigatorTest,
            })
        }
    }
    onPageSelected(e) {
        this.setState({page: 1+e.nativeEvent.position});
        if(this.state.page==1) {
            this.setState({
                log1: '#06E8DE',
                log2: '#D7E4F5'
            });
        }
        else if(this.state.page==2){
            this.setState({
                log1: '#D7E4F5',
                log2: '#06E8DE'
            });
        }
        else if(this.state.page==3){
            this._pressButton(e);
        }
    }
    render(){
        return(
            <View>
             <ViewPagerAndroid initialPage={0} style={styles.Pagestyle}  onPageSelected={this.onPageSelected.bind(this)}>
                 <View style={styles.viewstyle}>
                     <Image style={styles.imgstyle} source={require('../../img/beginning1.png')}/>
                 </View>
                 <View style={styles.viewstyle}>
                     <Image style={styles.imgstyle} source={require('../../img/beginning2.png')}>
                         <TouchableOpacity style={styles.touchastyle} onPress={this._pressButton.bind(this)}>
                             <Text style={{textAlign:'center',color:'#06E8DE'}}>进入美团</Text>
                         </TouchableOpacity>
                         </Image>
                 </View>
                 <View></View>
             </ViewPagerAndroid>
                <View style={{flexDirection:'row',position:'absolute',top:480,left:Dimensions.get('window').width*0.45}}>
                    <View style={{width:10,height:10,backgroundColor:this.state.log1,borderRadius:25}}></View>
                    <View style={{width:20,height:1}}></View>
                    <View style={{width:10,height:10,backgroundColor:this.state.log2,borderRadius:25}}></View>
                </View>
            </View>
        );
    }
}
var W_width=Dimensions.get('window').width;
var W_height=Dimensions.get('window').height;
const styles=StyleSheet.create({
    touchastyle:{
        height: W_height*0.05,
        width:W_width*0.25,
        marginLeft:Dimensions.get('window').width*0.05,
        borderColor:'#06E8DE',
        borderWidth:1
    },
    Pagestyle:{
        height:W_height,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    viewstyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative'
    },
    imgstyle:{
        height: W_height,
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingBottom:50
    }
});