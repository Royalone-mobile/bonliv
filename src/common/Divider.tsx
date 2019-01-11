// import libraries for making a Component
import React from 'react'
import { View } from 'react-native'
import { Resource } from '../components/Resource';
// make a Component
const Divider = (props:any) => {
  const { viewStyle } = styles

  return (
    <View
      style={[viewStyle, {width:props.width, backgroundColor:props.color, marginTop:props.marginTop}]}
    />
  )
}

const styles = {
  viewStyle: {
    height: 1,
    alignSelf:'center',
    backgroundColor: Resource.colors.colorGray
  }
}
// Make the component available to other parts of the App
export { Divider }