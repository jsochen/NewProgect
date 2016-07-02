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
    ListView,
    } from 'react-native';
var ClassName=['全部分类','电影','美食','摄影写真','酒店','休闲娱乐','汽车服务','生活服务','丽人','旅游'];
var ClassEName=['all','movie','food','Photography ','hotel','Recreation','car','life','beauty','tour'];
var morsym=[null,null,'>',null,'>','>',null,'>','>','>'];
var food=['全部','火锅','自助餐','西餐','日韩料理','蛋糕甜点','烧烤烤鱼','川湘菜','江浙菜','粤菜','西北/东北菜','京菜/鲁菜','云贵菜'
    ,'素食','东南亚菜','台湾菜','海鲜','小吃快餐','特色菜','汤/粥/炖菜','咖啡酒吧','蒙菜','新疆菜','其他美食'];
var hotel=['全部','经济型酒店','豪华型酒店','青年旅社','客栈','主题酒店','公寓型酒店','度假酒店/度假村'];
var Recreation=['全部','KTV','足疗按摩','运动健身','桌游/电玩','密室逃脱','咖啡酒吧','演出赛事','DIY手工','真人CS','4D/5D电影','其他娱乐'];
var life=['全部','母婴亲子','体检保健','照片冲印','培训课程','鲜花婚庆','配镜','其他生活'];
var beauty=['全部','美发','美甲','美容SPA','瑜伽/舞蹈'];
var tour=['全部','本地/周边游','景点门票'];
export default class Classification extends React.Component{
   // 构造
     constructor(props) {
         var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         var foodds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         var hotelds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         var Recreationds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         var lifeds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         var beautyds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         var tourds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       super(props);
       // 初始状态
       this.state = {
           dataSource: ds.cloneWithRows(ClassName),
           fooddataSource:foodds.cloneWithRows(food),
           hoteldataSource:hotelds.cloneWithRows(hotel),
           RecreationdataSource:Recreationds.cloneWithRows(Recreation),
           lifedataSource:lifeds.cloneWithRows(life),
           beautydataSource:beautyds.cloneWithRows(beauty),
           tourdataSource:tourds.cloneWithRows(tour),
           change:(null),
           changedName:null,
           changeNode:ClassEName
       };
         this._changeView = this._changeView.bind(this);
         this._renderRow = this._renderRow.bind(this);
         this._renderallRow = this._renderallRow.bind(this);
     }
    _renderRow(rowData: string, sectionID: number, rowID: number) {
        var sym = morsym[rowID];
        var Ename=ClassEName[rowID];
        return (
            <TouchableOpacity onPress={() => this._changeView(Ename)} style={{marginTop:5,height:30}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:0.2}}></View>
                    <View style={{flex:3}}><Text>{rowData}</Text></View>
                    <View style={{flex:3}}></View>
                    <View style={{flex:0.5}}><Text>{sym}</Text></View>
                </View>
            </TouchableOpacity>
        );
    }
    _changeView(eventname){
            if(eventname==ClassEName[0]){
                this.setState({
                    change:null,
                });
            }
            else if(eventname==ClassEName[1]){
                this.setState({
                    change:null,
                });
            }
            else if(eventname==ClassEName[2]){
                this.setState({
                    change:<ListView
                        dataSource={this.state.fooddataSource}
                        renderRow={this._renderallRow}
                        />,
                });
            }
            else  if(eventname==ClassEName[3]){
                this.setState({
                    change:null,
                });
            }
            else if(eventname==ClassEName[4]){
                this.setState({
                    change:<ListView
                        dataSource={this.state.hoteldataSource}
                        renderRow={this._renderallRow}
                        />,
                });
            }
            else if(eventname==ClassEName[5]){
                this.setState({
                    change:<ListView
                        dataSource={this.state.RecreationdataSource}
                        renderRow={this._renderallRow}
                        />,
                });
            }
            else if(eventname==ClassEName[6]){
                this.setState({
                    change:null,
                });
            }
            else if(eventname==ClassEName[7]){
                this.setState({
                    change:<ListView
                        dataSource={this.state.lifedataSource}
                        renderRow={this._renderallRow}
                        />,
                });
            }
            else if(eventname==ClassEName[8]){
                this.setState({
                    change:<ListView
                        dataSource={this.state.beautydataSource}
                        renderRow={this._renderallRow}
                        />,
                });
            }
            else if(eventname==ClassEName[9]){
                this.setState({
                    change:<ListView
                        dataSource={this.state.tourdataSource}
                        renderRow={this._renderallRow}
                        />,
                });
            }
    }
    _renderallRow(rowData: string, sectionID: number, rowID: number) {
        return (
            <TouchableOpacity style={{marginTop:5,height:30,flexDirection:'row'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:4}}><Text>{rowData}</Text></View>
            </TouchableOpacity>
        );
    }
    render(){
        return(
        <View>
            <View style={{flexDirection:'row', height:Dimensions.get('window').height-240}}>
                <View style={{flex:1}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        />
                </View>
                <View style={{flex:1,height:Dimensions.get('window').height-240}}>
                 <ScrollView showsVerticalScrollIndicator={true} style={{backgroundColor:'#EAEAEA'}}>
                     {this.state.change}
                 </ScrollView>
                </View>
            </View>
            <View style={{height:10,opacity:0.5}}></View>
        </View>
        );
    }
}
const styles = StyleSheet.create({

});