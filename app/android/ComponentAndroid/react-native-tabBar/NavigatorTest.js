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
    Dimensions,
    TouchableOpacity,
    BackAndroid,
    ToastAndroid,
} from 'react-native';

import Page1 from './page/page1';
import Page2 from './page/page2';
import Page3 from './page/page3';
import Page4 from './page/page4';

import TabBarItrm from './TabBarItem';
import FirstPageflank from '../../views/FirstPage/FirstPageflank';
import SecondPageflank from '../../views/SecondPage/SecondPageflank';
import ThirdPageflank from '../../views/ThirdPage/ThirdPageflank';
import FourthPageflank from '../../views/FourthPage/FourthPageflank';
var count=1;
var _getRandomRoute = function (str) {
    return {
        randNumber: str,
    };
}

var ROUTE_STACK = [
    _getRandomRoute('首页'),
    _getRandomRoute('商家'),
    _getRandomRoute('我的'),
    _getRandomRoute('更多')
];
var INIT_ROUTE_INDEX = 0;
class JumpingNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: props.initTabIndex,
            tabIndexthis:[0,1,2,3]
        };
    }

    handleWillFocus(route) {
        var tabIndex = ROUTE_STACK.indexOf(route);
        this.setState({tabIndex});
    }

    render() {
        return (
            <View style={styles.tabs}>
                <View style={styles.container}>
                    <TabBarItrm
                        style={styles.tabBarstyle}
                        underlayColor="#B5B5B5"
                        image={require("../../img/icon_bottomtag_home.jpg")}
                        changeimage={require("../../img/icon_bottomtag_home_change.jpg")}
                        title="首页"
                        tabIndex={this.state.tabIndex}
                        tabIndexthis={this.state.tabIndexthis[0]}
                        onPress={()=>{
                            this.props.onTabIndex(0);
                            this.setState({tabIndex:0})
                        }}>
                        ></TabBarItrm>
                    <TabBarItrm
                        style={styles.tabBarstyle}
                        underlayColor="#B5B5B5"
                        image={require("../../img/icon_bottomtag_market.jpg")}
                        changeimage={require("../../img/icon_bottomtag_market-change.jpg")}
                        title="商家"
                        tabIndex={this.state.tabIndex}
                        tabIndexthis={this.state.tabIndexthis[1]}
                        onPress={()=>{
                            this.props.onTabIndex(1);
                            this.setState({tabIndex:1})
                        }}>
                        ></TabBarItrm>
                    <TabBarItrm
                        style={styles.tabBarstyle}
                        underlayColor="#B5B5B5"
                        image={require("../../img/icon_bottomtag_cart.jpg")}
                        changeimage={require("../../img/icon_bottomtag_cart_change.jpg")}
                        title="我的"
                        tabIndex={this.state.tabIndex}
                        tabIndexthis={this.state.tabIndexthis[2]}
                        onPress={()=>{
                            this.props.onTabIndex(2);
                            this.setState({tabIndex:2})
                        }}>
                        ></TabBarItrm>
                    <TabBarItrm
                        style={styles.tabBarstyle}
                        underlayColor="#B5B5B5"
                        image={require("../../img/icon_bottomtag_me.jpg")}
                        changeimage={require("../../img/icon_bottomtag_me_change.jpg")}
                        title="更多"
                        tabIndex={this.state.tabIndex}
                        tabIndexthis={this.state.tabIndexthis[3]}
                        onPress={()=>{
                            this.props.onTabIndex(3);
                            this.setState({tabIndex:3})
                        }}>
                        ></TabBarItrm>
                </View>
            </View>
        );
    }
}
class NavigatorTest extends Component {
    componentDidMount(){
        BackAndroid.addEventListener('hardwareBackPress',function(){
            if(count>=1){
                ToastAndroid.show('再次点击返回键，退出应用',ToastAndroid.SHORT);
                count--;
                return true;
            }else{
                return false;
            }
        });
    }
    render() {
        return (
            <Navigator
                debugOverlay={false}
                style={styles.appContainer}
                ref={(navigator) => {
                  this._navigator = navigator;
                }}
                initialRoute={ROUTE_STACK[INIT_ROUTE_INDEX]}
                initialRouteStack={ROUTE_STACK}
                renderScene={this.renderScene}
                configureScene={() => ({
                  ...Navigator.SceneConfigs.HorizontalSwipeJump,
                })}
                navigationBar={
                  <JumpingNavBar
                    //ref={(navBar) => { this.navBar = navBar; }}
                    initTabIndex={INIT_ROUTE_INDEX}
                    routeStack={ROUTE_STACK}
                    onTabIndex={(index) => {
                      this._navigator.jumpTo(ROUTE_STACK[index]);
                    }}
                  />
                }
            />
        );
    }

    renderScene(route, navigator) {
        var page1, page2, page3, page4;
        if (ROUTE_STACK.indexOf(route) === 0) {
            page1 = (
                <View style={{height:Dimensions.get('window').height-60}}>
                 <FirstPageflank/>
                 <Page1></Page1>
                </View>
            );
        } else if (ROUTE_STACK.indexOf(route) === 1) {
            page2 = (
                <View style={{height:Dimensions.get('window').height-60}}>
                    <SecondPageflank/>
                    <Page2></Page2>
                </View>
            )
        } else if (ROUTE_STACK.indexOf(route) === 2) {
            page3 = (
                <View style={{height:Dimensions.get('window').height-60}}>
                    <ThirdPageflank/>
                    <Page3></Page3>
                </View>
            );
        } else if (ROUTE_STACK.indexOf(route) === 3) {
            page4 = (
                <View style={{height:Dimensions.get('window').height-60}}>
                  <FourthPageflank/>
                  <Page4></Page4>
                </View>
            )
        }
        return (
            <View style={styles.scene}>
                <View style={{flex:1}}>
                    {page1}
                    {page2}
                    {page3}
                    {page4}
                </View>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    tabBarstyle:{
        flex:1,
       
        height:10,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    appContainer: {
        //flex: 1,
        overflow: 'hidden',
        backgroundColor: '#dddddd',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabs: {
      /*  height: 50,*/
        backgroundColor: '#F3F5F6',
    },
    messageText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        marginTop: 0,
        marginLeft: 15,
    },
    scene: {
        flex: 1,
        backgroundColor: '#EAEAEA',
    },
    welcome: {
        fontSize: 20
    }
});
export default NavigatorTest;
