'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
 TouchableOpacity,
} from 'react-native';
import FirstPageComponent from "./FirstPageComponent";
class Navigators extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Navigators';
          /*      var defaultName = this.props.defaultName;
        var defaultComponent = this.props.defaultComponent;*/
    }
   
    render() {
    	 let defaultName = 'FirstPageComponent';
         let defaultComponent = FirstPageComponent;
        return <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />;
    }
}

export default Navigators;
