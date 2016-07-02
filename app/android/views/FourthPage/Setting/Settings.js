'use strict';
import React,{
    AppRegistry,
    Component,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ListView,
    Dimensions,
    Switch,
    } from 'react-native';
var flanks1=['非wifi下使用省流量模式','邀请好友使用美团','字号大小','清空缓存'];
var flanks2=['扫一扫','意见反馈','问卷调查','支付帮助','检查更新','关于美团','加入我们','诊断网络','版权信息'];
export default class Settings extends React.Component{
      constructor(props) {
        super(props);
          var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            dataSource: ds.cloneWithRows(flanks2),
        };
      }
    _renderRow(rowData: string, sectionID: number, rowID: number) {
        return(
            <View style={{paddingBottom:5,paddingTop:5,borderWidth:0.5,borderColor:'#EAE5E5',height:40}}>
            <TouchableOpacity style={{flexDirection:'row'}}>
                <View style={{flex:0.1}}></View>
                <View style={{flex:1}}><Text style={{textAlign:'left'}}>{rowData}</Text></View>
                <View style={{flex:1}}></View>
                <View style={{flex:0.3}}>
                    <Text style={{textAlign:'right'}}>></Text>
                </View>
            </TouchableOpacity>
                </View>
        );
    }
    render(){
        return(
            <View>
                <View style={{borderWidth:0.5,borderColor:'#EAE5E5'}}>
                    <TouchableOpacity style={{flexDirection:'row',marginBottom:5,marginTop:5,height:30,}}>
                        <View style={{flex:0.05}}></View>
                        <View style={{flex:1}}><Text style={{textAlign:'left'}}>{flanks1[0]}</Text></View>
                        <View style={{flex:1}}></View>
                        <View style={{flex:0.3}}><Switch
                            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                            value={this.state.falseSwitchIsOn} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{borderWidth:0.5,borderColor:'#EAE5E5'}}>
                    <TouchableOpacity style={{flexDirection:'row',marginBottom:5,marginTop:5,height:30,}}>
                        <View style={{flex:0.08}}></View>
                        <View style={{flex:1}}><Text style={{textAlign:'left'}}>{flanks1[1]}</Text></View>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'right'}}>></Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{borderWidth:0.5,borderColor:'#EAE5E5'}}>
                    <TouchableOpacity style={{flexDirection:'row',marginBottom:5,marginTop:5,height:30,}}>
                        <View style={{flex:0.08}}></View>
                        <View style={{flex:1}}><Text style={{textAlign:'left'}}>{flanks1[2]}</Text></View>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'right'}}>中字号(默认)></Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{borderWidth:0.5,borderColor:'#EAE5E5'}}>
                    <TouchableOpacity style={{flexDirection:'row',marginBottom:5,marginTop:5,height:30,}}>
                        <View style={{flex:0.08}}></View>
                        <View style={{flex:1}}><Text style={{textAlign:'left'}}>{flanks1[3]}</Text></View>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'right'}}>></Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.FirstPflower}>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    />
             </View>
        );
    }
}
var W_width=Dimensions.get('window').width;
var W_height=Dimensions.get('window').height;
const styles=StyleSheet.create({
    FirstPflower:{
        width:W_width,
        height:W_height*0.02,
        backgroundColor:'#E1E2EA',
    },
});