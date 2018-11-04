import React from 'react'
import { View, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from './actions'
import { Button, Avatar, FormLabel, FormInput} from 'react-native-elements'
import styled from 'styled-components'

import TripleAvatar from './components/TripleAvatar'
import SignUpForm from './components/SignUpForm';
import GradientButton from './customComponents/GradientButton'




const BackgroundBlueView = styled.View`
  background-color: 'rgba(41, 48, 68, 1)';
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

const SignUp = styled.Text`
  color: white;
  font-size: 30;
  margin-bottom: 50
  margin-top: 50
`

const Subtitle = styled.Text`
  color: 'rgba(115, 132, 176, 1)';
  font-size: 15;
  font-weight: 900;
  margin-bottom: 60
`

const DisclaimerText = styled.Text`
  color: 'rgba(115, 132, 176, 1)';
  font-size: 15;
  font-weight: 900;
  margin-bottom: 60
`

class HomeScreen extends React.Component {
  onPressGetData = () => {
    console.log('you have press onpressgetdata')
  }

  render() {
    return (
      <BackgroundBlueView>
        <SignUp>Sign Up</SignUp>

        <Subtitle>{'Who will you be?'.toUpperCase()}</Subtitle>

        <TripleAvatar />

        <SignUpForm />

        <GradientButton onPress={this.alerted} />

        <DisclaimerText>Already have an account?</DisclaimerText>
        <DisclaimerText>Login Here!</DisclaimerText>


      </BackgroundBlueView>
    )
  }
}

const mapStateToProps = (state) => {
  const appData = state.appData
  return {
    appData,
  }
}

const mapDispatchToProps = {
  fetchData,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
