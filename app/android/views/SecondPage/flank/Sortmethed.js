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
var sorts=['智能排序','好评优先','离我最近','人均最低'];
export default class Sortmethed extends React.Component{
    // 构造
      constructor(props) {
          var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props);
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(sorts)
        };
          this._renderallRow = this._renderallRow.bind(this);
      }
    _renderallRow(rowData: string, sectionID: number, rowID: number) {
        return (
            <TouchableOpacity style={{marginTop:5,height:30,flexDirection:'row'}}>
                <View style={{flex:0.5}}></View>
                <View style={{flex:8}}><Text>{rowData}</Text></View>
            </TouchableOpacity>
        );
    }
    render(){
        return(
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderallRow}
                    />
            </View>
        );
    }
}