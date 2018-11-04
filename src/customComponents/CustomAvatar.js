import { Avatar } from "react-native-elements";
import React from 'react'
import { Text, View, TouchableOpacity, Icon, Image, ImageBackground } from 'react-native'
import styled from 'styled-components/native';

//props taken:
//source={ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }
//opacity= number         //default = 1
//optionNumber= 
//color='string'

const ImageWrapper = styled.TouchableOpacity`
 
 
  width: ${props => props.selected ? 90 : 65};
  height: ${props => props.selected ? 90 : 65};
  opacity: ${props => props.selected ? 1 : 0.7};
  backgroundColor: #fff;
`


const AvatarText = styled.Text`
  font-weight: 800;
  margin-bottom: 7;
  color: props.color;
  color: ${props => props.color};
  opacity: ${props => props.selected ? 1 : 0.5};
`

//TODO: Make ImageBackground a styled component
//TODO: When RN gets updated, move the opacity property from imagebackground to imagewrapper
//TODO: Do font size inside avatarText
const CustomAvatar = (props) => {
  const selected = props.currentlySelected === props.optionString

  return (
    <View
        // style={{ alignItems: 'left' }}
    >

      <AvatarText 
      style={{fontSize: 11}}
      selected={selected}
      color={props.textColor}
      >
      {props.text.toUpperCase()}
      </AvatarText>

      <ImageWrapper
        onPress={() => props.onPress(props.optionString)}
        selected={selected}
      >
        <ImageBackground
          source={props.source}
          style={{
            flex: 1,
            width: '100%',
            height: undefined,
            backgroundColor: 'rgba(0,0,0,0)',
            overflow: 'hidden',
          }}
        >
        </ImageBackground>

      </ImageWrapper>
    </View>
  )
}

export default CustomAvatar