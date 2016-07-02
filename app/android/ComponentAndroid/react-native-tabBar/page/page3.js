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
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
var Imgurl=[
    require('../../../img/ordersimg0.jpg'),
    require('../../../img/ordersimg1.jpg'),
    require('../../../img/ordersimg2.jpg'),
    require('../../../img/ordersimg3.jpg'),
    require('../../../img/ordersimg4.jpg'),
    require('../../../img/ordersimg5.jpg'),
    require('../../../img/ordersimg6.jpg'),
    require('../../../img/ordersimg7.jpg'),
    require('../../../img/ordersimg8.jpg')
];
var Imgurlorder=[
    require('../../../img/order1.jpg'),
    require('../../../img/order2.jpg'),
    require('../../../img/order3.jpg'),
    require('../../../img/order4.jpg'),
];
var massageTitles=['我的订单','美团钱包','抵用券','会员卡','积分商城','免费福利','今日推荐','联系客服','我要合作'];
var massages=['查看全部订单','余额：￥0.00','0',null,'9积分限时秒杀','80万免费霸王餐',null,null,'轻松开店，招财进宝'];
import TouchOne from '../../../views/ThirdPage/TouchOne';
export default class Page3 extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={true}
                        contentContainerStyle={styles.contentContainer}>
                <TouchableOpacity style={{height:100,backgroundColor:'#01FEB9'}}>
                    <View></View>
                </TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:'#0DB07A',}}>
                    <TouchableOpacity style={{flex:1,borderRightWidth:2,borderRightColor:'#86E0BD'}}>
                        <View style={{marginTop:5,marginBottom:5}}><Text style={{textAlign:'center',color:'#FFFFFF'}}>美团卷</Text></View>
                        </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,borderRightWidth:2,borderRightColor:'#86E0BD'}}>
                        <View style={{marginTop:5,marginBottom:5}}><Text style={{textAlign:'center',color:'#FFFFFF'}}>评价</Text></View>
                        </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}}>
                        <View style={{marginTop:5,marginBottom:5}}><Text style={{textAlign:'center',color:'#FFFFFF'}}>收藏</Text></View>
                        </TouchableOpacity>
                </View>
                <TouchOne imgurl={Imgurl[0]} massageTitle={massageTitles[0]} massage={massages[0]}/>
                <View style={{backgroundColor:'#FFFFFF'}}>
                <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                    <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent: 'center'}}>
                        <Image source={Imgurlorder[0]} />
                        <View style={{marginTop:5,marginBottom:5}}><Text style={{textAlign:'center'}}>美团卷</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent: 'center'}}>
                        <Image source={Imgurlorder[1]}/>
                        <View style={{marginTop:5,marginBottom:5}}><Text style={{textAlign:'center'}}>评价</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent: 'center'}}>
                        <Image source={Imgurlorder[2]}/>
                        <View style={{marginTop:5,marginBottom:5}}><Text style={{textAlign:'center'}}>收藏</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent: 'center'}}>
                        <Image source={Imgurlorder[3]}/>
                        <View style={{marginTop:5,marginBottom:5}}><Text style={{textAlign:'center'}}>收藏</Text></View>
                    </TouchableOpacity>
                </View>
                </View>
                <TouchOne imgurl={Imgurl[1]} massageTitle={massageTitles[1]} massage={massages[1]}/>
                <TouchOne imgurl={Imgurl[2]} massageTitle={massageTitles[2]} massage={massages[2]}/>
                <TouchOne imgurl={Imgurl[3]} massageTitle={massageTitles[3]} massage={massages[3]}/>
                <View style={styles.FirstPflower}></View>
                <TouchOne imgurl={Imgurl[4]} massageTitle={massageTitles[4]} massage={massages[4]}/>
                <TouchOne imgurl={Imgurl[5]} massageTitle={massageTitles[5]} massage={massages[5]}/>
                <View style={styles.FirstPflower}></View>
                <TouchOne imgurl={Imgurl[6]} massageTitle={massageTitles[6]} massage={massages[6]}/>
                <View style={styles.FirstPflower}></View>
                <TouchOne imgurl={Imgurl[7]} massageTitle={massageTitles[7]} massage={massages[7]}/>
                <View style={styles.FirstPflower}></View>
                <TouchOne imgurl={Imgurl[8]} massageTitle={massageTitles[8]} massage={massages[8]}/>
                <View style={styles.FirstPflower}></View>
            </ScrollView>
        );
    }
}
var W_width=Dimensions.get('window').width;
var W_height=Dimensions.get('window').height;
const styles = StyleSheet.create({
    FirstPflower:{
        width:W_width,
        height:W_height*0.01,
        backgroundColor:'#E1E2EA',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
