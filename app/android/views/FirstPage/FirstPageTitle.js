'use strict';
import React,{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Component,
    ViewPagerAndroid,
    Dimensions,
    }
    from 'react-native';
var W_width=Dimensions.get('window').width;
var W_height=Dimensions.get('window').height;
var titles_first_data=["美食","电影","酒店","KTV","外卖","优惠买单","周边游","休闲娱乐","今日新单","丽人"];
var titles_second_data=["购物","火车票","生活服务","旅游","汽车服务","足疗按摩","小吃快餐","经典门票","境外游","全部分类"];
export default class FirstPageTitle extends React.Component{
    constructor(props) {

        super(props);
        this.state = {
            page: 1,
        };
    }
    onPageSelected(e) {
    this.setState({page: 1+e.nativeEvent.position});
}
    render() {
        return (
            <View style={{ backgroundColor:'#FFFFFF'}} >
                <Text style={{textAlign:'center'}}>
                    美团首页顶部效果实例
                </Text>
                <ViewPagerAndroid style={styles.pageStyle} initialPage={0}  onPageSelected={this.onPageSelected.bind(this)}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/one.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[0]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/two.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[1]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/three.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[2]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/four.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[3]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/five.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[4]}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/six.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[5]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/seven.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[6]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/eight.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[7]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/nine.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[8]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/ten.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[9]}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/next_one.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[0]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/next_two.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[1]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/next_three.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[2]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/next_four.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[3]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/next_five.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[4]}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/next_six.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[5]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/next_seven.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[6]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/next_eight.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[7]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/next_nine.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[8]}</Text>
                            </View>
                            <View style={{width:W_width*0.18}}>
                                <Image source={require('../../img/next_ten.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[9]}</Text>
                            </View>
                        </View>
                    </View>
                </ViewPagerAndroid>
                <Text style={{flex:1,alignSelf:'center'}}>当前第{this.state.page}页</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    pageStyle: {
        marginLeft:15,
        marginTop:10,
        alignItems: 'center',
        height:150,
    },
    textStyle:{
        marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'
    },
    imageStyle:{
        alignSelf:'center',width:45,height:45
    }
});
