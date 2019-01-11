import {Platform,Dimensions} from 'react-native';


const { width, height } = Dimensions.get('window');

export class Global {
  static AppbarHeight = Platform.OS === 'ios' ? 44 : 56;
  static StatusbarHeight = Platform.OS === 'ios' ? 20 : 0;
  static HeaderHeight = Global.AppbarHeight + Global.StatusbarHeight;

  static AppWidth = width<height?width:height; // AppWidth is smaller one (Portrait Mode is default)
  static AppHeight = width<height?height:width; // AppHeight is bigger one (Portrait Mode is default)
  static orientation = 'portrait';
}