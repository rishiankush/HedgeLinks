import Expo from 'expo';
import React from 'react';
import { Navigator } from 'react-native';
import { Font } from 'expo';
import Login from './components/Login'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fontLoaded:false
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  renderScene(route, navigator) {
      let Component = route.component;
      return <Component navigator={navigator} route={route} data={route.passProps}/>;
  }

  render() {
    if(this.state.fontLoaded)
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{component:Login}}
        renderScene={this.renderScene}
        configureScene={(route, routeStack) =>
        Navigator.SceneConfigs.PushFromRight} />
    );
    else
      return null;
  }
}

Expo.registerRootComponent(App);
