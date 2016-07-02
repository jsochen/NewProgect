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
    ListView,
    } from 'react-native';
var morsym=['>','>','>',null,'>','>','>','>','>','>','>','>','>','>','>','>',];
var locationarea=['附近','推荐商圈','开发区','高新区','招远市','长岛县','莱州市','蓬莱市','龙口市','莱阳市','栖霞市',
    '海阳市','福山区','牟萍区','莱山区','芝罘区'];
var locations1=['1千米','3千米','5千米','10千米','全城'];
var locations2=['鲁东大学','振华商厦','百盛','南大街','世贸广场','幸福','阳光100','青年路','上美食街','大海阳路','文化宫','北马路','三站'
    ,'南洪街','东方巴黎','万象城','冰海路','彩云城','佳世客','二马路','环山路','泰山路','福海路','珠江路','长江路','迎春大街'];
var locations3=['全部','彩云城','泰山路','珠江路','长江路'];
var locations4=[];
var locations5=['全部','文化商城','振华','金都百货','体育场','北城商厦'];
var locations6=['全部','乐园大街','县府街'];
var locations7=['全部','西外环大转盘','夏邱镇','三山岛','莱州新法院','莱州山厦利群集团','南五里','五里街','东关村委','半岛龙庭','阳光贝贝','古城街',
    '科技广场','沙河镇','府前街','百都国际','印象城','教育路小区','双语学校','财政局','定海路','果达埠村','北关街','百家福','新一中','大原家村',
    '汇泉学校','万桶水产广场','山水国际','府前西街','虎头崖镇','商业大厦','郭家店镇','府西路','朗湖国际'];
var locations8=['全部','利群','振华','南关路','东关路','小皂','抹直口','故里','北关路','水城','钟楼东路','悦动港湾','金水路','潮水机场','钟楼南路',
    '西关路','蓬莱阁','福林机场','极地世界'];
var locations9=['全部','博商购物广场','利群购物广场','海南路','龙口第六中学','步行街','新一州','西市场','南山分景区','南山学院','黄县林苑','黄城汽车站',
    '北巷','南巷商贸街','东市场','龙南小学','环海中路','万利盛','东海旅游度假区','凤凰山路','人民公园','港城大道'];
var locations10=['全部','莱阳汽车站','文化路','见河公园','富水公路','盛隆街','大润发','阳光城','中心客运站'];
var locations11=['全部','烧烤街','跃进路','翠屏公园','电业路','中桥开发区','陶村','牟氏庄园','栖霞汽车站'];
var locations12=['全部','中村农贸市场','盛华国际（海阳）','凤凰城（海阳）','海河路（海阳）','振华商厦（海阳）','金海螺广场（海阳）','济南路',
    '新汽车站（海阳）','阳光城家家悦（海阳）','新元广场'];
var locations13=['全部','福海路'];
var locations14=['全部','东华苑','养马岛','宁海大街','龙湖葡萄商业街','政府大街','振华商厦','东关路','农机家电','文兴路'];
var locations15=['全部','万象城','滨海路','佳世客','迎春大街'];
var locations16=['全部','鲁东大学','振华商厦','百盛','南大街','世贸广场','幸福','阳光100','青年路','上川美食街','大海阳路','文化宫','北马路',
    '三站','南洪街','东方巴黎','二马路','环山路','黄务','万达广场','大悦城','新桥'];
export default class Localtiony extends React.Component{
    // 构造
      constructor(props) {
          var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props);
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(locationarea),
            locationdata1:ds.cloneWithRows(locations1),
            locationdata2:ds.cloneWithRows(locations2),
            locationdata3:ds.cloneWithRows(locations3),
            locationdata4:ds.cloneWithRows(locations4),
            locationdata5:ds.cloneWithRows(locations5),
            locationdata6:ds.cloneWithRows(locations6),
            locationdata7:ds.cloneWithRows(locations7),
            locationdata8:ds.cloneWithRows(locations8),
            locationdata9:ds.cloneWithRows(locations9),
            locationdata10:ds.cloneWithRows(locations10),
            locationdata11:ds.cloneWithRows(locations11),
            locationdata12:ds.cloneWithRows(locations12),
            locationdata13:ds.cloneWithRows(locations13),
            locationdata14:ds.cloneWithRows(locations14),
            locationdata15:ds.cloneWithRows(locations15),
            locationdata16:ds.cloneWithRows(locations16),
            change:(null),
        };
          this._changeView = this._changeView.bind(this);
          this._renderRow = this._renderRow.bind(this);
          this._renderallRow = this._renderallRow.bind(this);
      }
    _renderRow(rowData: string, sectionID: number, rowID: number) {
        var sym = morsym[rowID];
        var Ename=locationarea[rowID];
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
        if(eventname==locationarea[0]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata1}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[1]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata2}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[2]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata3}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else  if(eventname==locationarea[3]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata4}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[4]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata5}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[5]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata6}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[6]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata7}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[7]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata8}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[8]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata9}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[9]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata10}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[10]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata11}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[11]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata12}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[12]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata13}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[13]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata14}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[14]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata15}
                    renderRow={this._renderallRow}
                    />,
            });
        }
        else if(eventname==locationarea[15]){
            this.setState({
                change:<ListView
                    dataSource={this.state.locationdata16}
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