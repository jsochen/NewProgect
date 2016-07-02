'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ListView,
    TouchableOpacity,
    } from 'react-native';
var THUMB_URLS = [
    require('../../img/enjoy1.jpg'),
    require('../../img/enjoy2.jpg'),
    require('../../img/enjoy3.jpg'),
    require('../../img/enjoy4.jpg'),
    require('../../img/enjoy5.jpg'),
    require('../../img/enjoy6.jpg'),
    require('../../img/enjoy7.jpg'),
    require('../../img/enjoy8.jpg'),
    require('../../img/enjoy9.jpg'),
    require('../../img/enjoy10.jpg'),
    require('../../img/enjoy11.jpg'),
    require('../../img/enjoy12.jpg'),
    require('../../img/enjoy13.jpg'),
    require('../../img/enjoy14.jpg'),
    require('../../img/enjoy15.jpg'),
];
var EnjoyTitles =['大峡谷量贩式KTV', '全罗道自助烤肉欢乐餐厅','川府冒菜','美斯特火锅','俏扁担重庆小面','杨大妈凉皮','鲁东大学土耳其烤肉拌饭','百草味水果干任选','驻足Juice','静陌花开','贵知味花溪牛肉粉','脆皮玉米','榴莲陪你','东谷滋寿司','鲁大商业区周黑鸭'];
var price=['29.9','39.9','15.8','0.01','8.9','6.9','8.8','13.2','7.9','39.9','10.5','5.5','8.5','16.9','7.9'];
var Introduct=['[鲁东大学]欢唱时段套餐2选1','[阳光一百]单人自助餐','[鲁东大学]20元代金券一张，可叠加','[振华商厦]特色烤串60串，包间免费','[鲁东大学]小面2选1，提供免费WIFI','[鲁东大学]特色鸡腿饭一份，提供免费WIFI','烤肉拌饭7选1，提供免费WIFI','[五件包邮]百草味水果干任选，优质果干，味道甜美','[鲁东大学]原味奶茶一份提供免费WIFI','[振华商厦]单人餐提供免费WIFI','[鲁东大学]米粉3选1免费WIFI','[鲁东大学]脆皮玉米粉一份','[南洪街]榴莲芒果班2选1','[鲁东大学]寿司4选1','[鲁东大学]10元代金券1张，可叠加'];
var distence=['5km','3.3km','586m','3.1km','619m','5km','540m','536m',NaN,'3.1km','599m','513m','3.3km','550m','<500m'];
var sold=['21687','11268','64','1290','65','81','237','26997','85','457','4055','31','29476','236','344'];
var Originalprice=['150','58','20','60','10','8','10','25.8','10','199','12','7','10','20','10'];
export default class Enjoy extends React.Component{
    constructor(props) {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows(EnjoyTitles),
        };
    }
    _renderRow(rowData: string, sectionID: number, rowID: number) {
        var imgSource = THUMB_URLS[rowID];
        var prices=price[rowID];
        var Introducts=Introduct[rowID];
        var distences=distence[rowID];
        var solds=sold[rowID];
        var Originalprices=Originalprice[rowID];
        return (
            <TouchableOpacity>
                <View>
                    <View style={{flexDirection:'row',borderWidth:0.5,borderColor:'#EAE5E5'}}>
                        <View style={{flex:0.1}}></View>
                       <View style={styles.modstyle}>
                        <Image style={styles.thumb} source={imgSource} />
                       </View>
                        <View style={{flex:0.1}}></View>
                        <View style={{flexDirection:'column',flex:3}}>
                            <View style={{flex:0.5}}></View>
                            <View style={{flexDirection:'row',flex:1}}>
                                <View style={{flex:5}}>
                                    <Text style={{fontFamily:'黑体',fontWeight:'600',color:'#000000',fontSize:16}}>{rowData}</Text>
                                </View>
                                <View style={{flex:3}}></View>
                                <View style={{flex:2}}>
                                    <Text style={{textAlign:'right'}}>{distences}</Text>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>{Introducts}</Text>
                            </View>
                            <View style={{flexDirection:'row',flex:1}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:18,color:'#0AF2FF'}}>{'￥'+prices}</Text>
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:13}}>{'门市价：￥'+Originalprices}</Text>
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{textAlign:'right'}}>{'已售'+solds}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    render(){
        return(
            <View style={{backgroundColor:'#FFFFFF'}}>
             <View style={{ flexDirection:'row'}}>
                <View style={{flex:0.1}} ></View>
                <Image style={styles.Imagelog} source={require('../../img/enjoylog.jpg')}/>
                <View style={{flex:0.05}} ></View>
                <View style={{flex:2}} ><Text>猜你喜欢</Text></View>
                <View style={{flex:3}} ></View>
             </View>
                <View>
                    <View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                            />
                    </View>
                    <TouchableOpacity>
                        <View style={styles.Allgroup}><Text style={styles.AllgroupText}>查看全部团购</Text></View>
                    </TouchableOpacity>
                    <View style={styles.FirstPflower}>
                    </View>
                    <View >
                        <Text style={{textAlign:'center'}}>愿意让我们更了解你吗</Text>
                        <Text style={{textAlign:'center'}}>让美团的推荐更符合你的胃口</Text>
                        <Text style={styles.Mygroup}>我的美团DNA</Text>
                    </View>
                </View>
            </View>
        );
    }
}
var W_width=Dimensions.get('window').width;
var W_height=Dimensions.get('window').height;
const  styles=StyleSheet.create({
    Mygroup:{
        height:W_height*0.05,
        width:W_width*0.95,
        backgroundColor:'#0F8083',
        textAlign:'center',
        marginTop:W_height*0.01,
        marginLeft:W_width*0.025,
        borderRadius:50,
    },
    FirstPflower:{
        width:W_width,
        height:W_height*0.02,
        backgroundColor:'#E1E2EA',
    },
    AllgroupText:{
        textAlign:'center',
        color:'#0F8083',
        marginTop:W_height*0.01,
        fontSize:13,
    },
    Allgroup:{
        height:W_height*0.05,
    },
    modstyle:{
        flex:1,
        marginTop:W_height*0.01,
        marginBottom:W_height*0.01,
    },
    thumb:{

        width:W_width*0.25,
        height:W_height*0.15,
    },
    Imagelog:{
         flex:0.2,
        width:W_width*0.05,
        height:W_height*0.02,
        marginTop:W_height*0.005,
        marginBottom:W_height*0.01,
    }
});