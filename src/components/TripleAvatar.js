import { Avatar } from "react-native-elements";
import React from 'react'
import { View, TouchableOpacity, Icon, Image, ImageBackground } from 'react-native'
import styled from 'styled-components/native'
import CustomAvatar from '../customComponents/CustomAvatar';
import { connect } from 'react-redux'

import { avatarSelect } from '../actions/signUpActions';
import { OPTION_3, OPTION_1, OPTION_2 } from '../constants';


const AvatarLayout = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 30;
`

const AvatarList = [
  {
    text: 'cool',
    textColor:'rgba(235,199,64,1)',
    source: require('../images/avatar1.png'),
    optionString: OPTION_1,
  },
  {
    text: 'Student',
    textColor: 'rgba(44,171,90,1)',
    source: require('../images/avatar2.png'),
    optionString: OPTION_2,
  },
  {
    text: 'Harry',
    textColor: 'rgba(55,112,128,1)',
    source: require('../images/avatar3.png'),
    optionString: OPTION_3,
  },
]


class TripleAvatar extends React.Component {
  state = {
  }

avatars = (avatar) => {
  return (
    <CustomAvatar
      text= {avatar.text}
      textColor={avatar.textColor}
      source={avatar.source}
      onPress={this.avatarPress}
      currentlySelected={this.props.signUpReducer.avatarSelected}
      optionString={avatar.optionString}
    />
  )
}

  avatarPress = (optionString) => {
    this.props.avatarSelect(optionString)
  }

  render() {
    return (
      <AvatarLayout>

        {AvatarList.map(this.avatars)}

      </AvatarLayout>
    )
  }

}

const mapStateToProps = (state) => {
  const signUpReducer = state.signUpReducer
  return {
    signUpReducer,
  }
}

const mapDispatchToProps = {
  avatarSelect,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripleAvatar)

