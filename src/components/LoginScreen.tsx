import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';
import { Resource } from './Resource';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  View,
  Text,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

interface Props {
  loading:boolean,
  loginUser:any
 }

interface State {
    username:string,
    password:string,
    bankId:string
}



class LoginScreen extends React.Component<Props, State> {
  private buttonAnimated: any;
  private growAnimated: any;

  constructor(props:any) {
    super(props);

    this.state = {
      username: '',
      password: '',
      bankId: ''
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
  }

  _onPress() {
    if (this.props.loading) return;
    let { username, password } = this.state;
    this.props.loginUser({ username, password });
  }

  componentWillReceiveProps(nextProps:any) {
    if (nextProps.loading) {
      Animated.timing(this.buttonAnimated, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
      }).start();
    } else {
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }

  renderSubmit() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });

    return (
      <View style={styles.container}>
        <Animated.View style={{ width: changeWidth }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._onPress()}
            activeOpacity={1}>
            {this.props.loading ? (
              <Image source={require('../images/loading.gif')} style={styles.image} />
            ) : (
                <Text style={styles.text}>LOGIN</Text>
              )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, { transform: [{ scale: changeScale }] }]}
          />
        </Animated.View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ backgroundColor: Resource.colors.colorWhite, flex: 1 }}>
        <View style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image source={require('../images/img_bank_id.png')} style={{ width: 150, height: 150, padding:10 }} resizeMode="contain" />
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TextInput
            label={Resource.strings.security_number}
            value={this.state.bankId}
            style={{ width: DEVICE_WIDTH - 50, height: 50 }}
            onChangeText={bankId => this.setState({ bankId })}
          />
        </KeyboardAvoidingView>
        {
          this.renderSubmit()
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});



const mapStateToProps = (state:any) => {
  const {
    loading
  } = state.auth;

  return {
    loading,
  };
};


export default connect(mapStateToProps, {
  loginUser
})(LoginScreen);

