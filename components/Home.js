import React, { Component } from 'react';
import { 
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import NavigationBar from 'react-native-navbar';

let Screen = Dimensions.get('window');
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <NavigationBar
            leftButton={<TouchableOpacity><EvilIcons name='chevron-left' color='#fff' size={30} /></TouchableOpacity>}
            statusBar={{hidden:true}}
            style={{}} />
        <Image source={require('../assets/images/background_image.jpg')} style={{flex:1, height:null, width:null}} resizeMode='cover' />
      </View>
    );
  }
}

module.exports = Home;