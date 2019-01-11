import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Scene, Router, Drawer, Navigator } from 'react-native-router-flux';
import { Provider } from "react-redux";
import LoginScreen from "./components/LoginScreen";
import SplashScreen from "./components/SplashScreen";
import SideMenu from "./components/SideMenu";
import Home from "./components/Home";
import reducers from './reducers';
import { Resource } from './components/Resource';
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
	renderLeftMenu() {
		return (
			<TouchableOpacity >
				<Image style={{ width: 25, height: 25, marginRight: 10 }}
					source={require('./images/menu.png')} resizeMode="cover" />
			</TouchableOpacity>
		);
	}

	renderSettingsMenu() {
		return (
			<TouchableOpacity >
				<Image style={{ width: 25, height: 25, marginRight: 10 }}
					source={require('./images/settings.png')} />
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<Scene key="root">
						<Scene key="loginScreen"
							component={LoginScreen}
							title="LoginScreen"
							animation='fade'
							hideNavBar={true}
						/>

						<Drawer
							navigationBarTitleImage={require('./images/img_logo.png')}
							navigationBarTitleImageStyle={{ backgroundColor: Resource.colors.colorLightRed, justifyContent: 'center' }}
							initial={true}
							hideNavBar={true}
							key="drawerMenu"
							contentComponent={SideMenu}
							left={this.renderLeftMenu.bind(this)}
							drawerWidth={250}
							drawerPosition="left"
							hideDrawerButton={true}
						>
							<Scene key="home"
								title="Home"
								component={Home}
								animation='fade'
								hideNavBar={true}
							/>
						</Drawer>

						<Scene key="splashScreen"
							component={SplashScreen}
							title="SplashScreen"
							animation='fade'
							hideNavBar={true}
						/>
					</Scene>
				</Router>
			</Provider>
		);
	}
}

export default App;