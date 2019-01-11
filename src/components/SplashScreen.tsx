import React, { Component } from 'react';
import { Resource } from './Resource';
import {
  Image,
  Animated,
  Easing,
  View,
  Text
} from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: Resource.colors.colorLightRed, flex: 1, alignItems: 'center',
      justifyContent: 'center'}}>
          <Image source={require('../images/bonliva-logo.png')}  resizeMode='contain' style={{width: 300, height:60}}/>
          <Text style={{color:Resource.colors.colorGray, marginTop:20, marginBottom:20}}>{Resource.strings.we_connect_care.toUpperCase()}</Text>
      </View>
    );
  }
}
