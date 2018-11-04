import React from 'react'
import { Text, View, Image, ImageBackground, TextInput } from 'react-native'
import styled from 'styled-components/native';
import { SUBTITLE_COLOR } from '../constants';

//props taken:


const ImageWrapper = styled.TouchableOpacity`
  alignItems: 'center';
  justifyContent: 'center';
  width: ${props => props.selected ? 90 : 65};
  height: ${props => props.selected ? 90 : 65};
  /* opacity: ${props => props.selected ? 1 : 0.7}; */
  backgroundColor: '#fff';
  borderRadius: 100;
`

const AvatarText = styled.Text`
  font-weight: 800;
  margin-bottom: 7;
  color: props.color;
  color: ${props => props.color};
  opacity: ${props => props.selected ? 1 : 0.5};
`
const inputStyle = {
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: SUBTITLE_COLOR,
  borderBottomColor: SUBTITLE_COLOR, //necessary because of white being specified as default
  borderRadius: 30,
  height: 40,
  width: 250,
  // justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
  flexDirection: 'row',
}

const FutureIcon = styled.View`
/* background-color: red; */
height: 25;
width: 25;
margin-left: 10;
`

//Props taken
//placeholder= 'string' \\the name of the placeholder

const RoundedInput = (props) => {
  return (
    <View style={inputStyle}>

    <FutureIcon />
    
      <TextInput
      style={{width: 180, color: 'white', marginLeft: 10, borderBottomColor: 'red', fontSize: 18 }}
    placeholder={props.placeholder}
    placeholderTextColor={SUBTITLE_COLOR}
    secureTextEntry={props.secureTextEntry}
      />

    </View>
  )
}

export default RoundedInput