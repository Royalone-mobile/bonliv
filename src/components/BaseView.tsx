import React from 'react';
import {Global} from './Global';
import {Resource} from './Resource';
import Orientation from 'react-native-orientation';

export default class BaseView extends React.Component {
  componentDidMount () {
    Orientation.lockToPortrait();
  }

   containerStyle = function () {
    return {
      backgroundColor: Resource.colors.backgroundColor,
      width: Global.AppWidth,
      height: Global.AppHeight,
      padding:20
    }
  }
}
