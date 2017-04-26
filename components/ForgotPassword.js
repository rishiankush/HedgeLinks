import React, { Component } from 'react';
import { 
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableHighlight,
  Image
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

let Screen = Dimensions.get('window');
class ForgotPassword extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }
  render() {
    return (
      <Image source={require('../assets/images/background_image.jpg')} style={{flex:1, height:null, width:null}} resizeMode='cover'>
        <View style={{flex:2, alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../assets/images/image.png')} style={{height:(Screen.height/100)*13, width:(Screen.width/100)*30}} resizeMode='stretch' />
          <Text style={{fontFamily:'raleway', fontWeight:'900', fontSize:20, color:'rgb(216, 81, 53)',marginTop:(Screen.height/100)*3}}>Forgot Password?</Text>
          <Text style={{fontFamily:'raleway', color:'#fff',marginHorizontal:(Screen.width/100)*10, marginTop:(Screen.height/100)*2}}>Please enter email address below and press submit. We will send a link to your email to reset your password.</Text>
        </View>
        <View style={{flex:3,marginHorizontal:(Screen.width/100)*10}}>
          <View style={{flexDirection:'row',marginTop:(Screen.height/100)*5}}>
            <EvilIcons name='envelope' color='#fff' size={30} style={{marginTop:(Screen.height/100)*.6}}/>
            <View style={{borderBottomWidth:1,borderBottomColor:'#fff',marginLeft:(Screen.height/100)*1}}>
              <TextInput 
                style={{height:(Screen.height/100)*5,width:(Screen.width/100)*70,fontFamily:'raleway',color:'#fff'}}
                placeholder='EMAIL ADDRESS'
                keyboardType='email-address'
                placeholderTextColor='rgba(255,255,255,.5)'
                onChangeText={(email)=>this.setState({email})}
                />
            </View>
          </View>
          <TouchableHighlight style={{borderRadius:5,backgroundColor:'#388E3C',padding:(Screen.width/100)*3,marginTop:(Screen.width/100)*10}}>
            <Text style={{textAlign:'center',color:'#fff',fontWeight:'600',fontSize:16,fontFamily:'raleway'}}>Submit</Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
}

module.exports = ForgotPassword;