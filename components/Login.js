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

let Screen = Dimensions.get('window');
class Login extends Component {
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
          <Image source={require('../assets/images/logo.png')} style={{height:(Screen.height/100)*10, width:(Screen.width/100)*29}} resizeMode='stretch' />
        </View>
        <View style={{flex:5,marginHorizontal:(Screen.width/100)*10}}>
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
          <View style={{flexDirection:'row',marginTop:(Screen.height/100)*5}}>
            <EvilIcons name='lock' color='#fff' size={35} />
            <View style={{borderBottomWidth:1,borderBottomColor:'#fff',marginLeft:(Screen.height/100)*1}}>
              <TextInput 
                style={{height:(Screen.height/100)*5,width:(Screen.width/100)*70,fontFamily:'raleway',color:'#fff'}}
                placeholder='PASSWORD'
                placeholderTextColor='rgba(255,255,255,.5)'
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}
                />
            </View>
          </View>
          <TouchableHighlight onPress={()=>this.props.navigator.push({component:require('./Home')})} style={{borderRadius:5,backgroundColor:'#388E3C',padding:(Screen.width/100)*3,marginTop:(Screen.width/100)*10}}>
            <Text style={{textAlign:'center',color:'#fff',fontWeight:'600',fontSize:16,fontFamily:'raleway'}}>Login</Text>
          </TouchableHighlight>
          <View style={{alignItems:'flex-end',marginTop:(Screen.height/100)*.8}}>
            <Text onPress={()=>this.props.navigator.push({component:require('./ForgotPassword')})} style={{fontFamily:'raleway', color:'rgba(255,255,255,.8)', textDecorationLine:'underline'}}>Forgot Password?</Text>
          </View>
          <Image source={require('../assets/images/OR_image.png')} style={{marginTop:(Screen.height/100)*3,width:(Screen.width/100)*80,height:(Screen.height/100)*2}} resizeMode='stretch' />
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:(Screen.width/100)*5}}>
            <TouchableOpacity style={{marginRight:(Screen.width/100)*10}}>
              <Image source={require('../assets/images/facebook_icon.png')} style={{height:(Screen.height/100)*12,width:(Screen.width/100)*20}} resizeMode='stretch' />
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Image source={require('../assets/images/google_plus.png')} style={{height:(Screen.height/100)*12,width:(Screen.width/100)*20}} resizeMode='stretch' />
            </TouchableOpacity>
          </View>
          <Text style={{fontFamily:'raleway', color:'rgba(255,255,255,.5)',textAlign:'center',marginTop:(Screen.height/100)*1.5}}>Don't have an account?</Text>
          <TouchableHighlight onPress={()=>this.props.navigator.push({component:require('./SignUp')})} style={{borderRadius:5,backgroundColor:'rgba(0,0,0,.4)',padding:(Screen.width/100)*3,marginTop:(Screen.width/100)*5}}>
            <Text style={{textAlign:'center',color:'#fff',fontWeight:'600',fontSize:16,fontFamily:'raleway'}}>Sign Up</Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
}

module.exports = Login;