'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class TabBar extends React.Component {
    render() {
        var title = this.props.title;
        var image = this.props.image;
        var tabIndex=this.props.tabIndex;
        var tabIndexthis=this.props.tabIndexthis;
        var changeimage=this.props.changeimage;
        this.onpressed=this.props.onPress.bind(this);
        var itemTitle;
        var itemImage;
        if(tabIndex != tabIndexthis){
            if (title != null) {
               itemTitle = (
                    <Text style={[styles.title]}>{title}</Text>
                )
            }
            if (image != null) {
               itemImage = (
                    <Image style={[styles.image]} source={image}/>
                )
            }
        }
        if(tabIndex == tabIndexthis){
            if (title != null) {
                itemTitle = (
                    <Text style={[styles.titlechange]}>{title}</Text>
                )
            }
            if (image != null) {
                itemImage = (
                    <Image style={[styles.image]} source={changeimage}/>
                )
            }
        }
        return (
            <TouchableOpacity
                style={{flex:1}}
                underlayColor="#B5B5B5"
                onPress={()=>{
                this.onpressed();
                }}>
                <View style={styles.item}>
                    {itemImage}
                    {itemTitle}
                </View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
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
        height: 50,
        backgroundColor: '#F888FF'
    },
    messageText: {
        fontSize: 11,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
    },
    scene: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#EAEAEA',
    },
    image: {
        width: 20,
        height: 20,
        marginTop: 5,
        resizeMode: Image.resizeMode.stretch,
    },
    title: {
        fontSize: 11
    },
    titlechange: {
        fontSize: 11,
        color:'#1EE5B7'
    }
});
