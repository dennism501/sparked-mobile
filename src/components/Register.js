import React from 'react'
import {Text, View, Image} from 'react-native'
import {Container, Form, Button, Item, Input, Label} from 'native-base'
import style from '../styles/Style.js'

const Register = () => {
  return (
    <Container style={style.containerStyle}>
      <View style={style.viewStyle}>
        <Image source={require('../../logo.png')} style={style.image} />
        <Text style={style.textSignUp}>Sign Up</Text>
      </View>
      <Form>
        <Label style={style.labelText}>Email</Label>
        <Item regular style={style.inputStyle}>
          <Input />
        </Item>
        <Label style={style.labelText}>Create Password</Label>
        <Item regular style={style.inputStyle}>
          <Input secureTextEntry={true} />
        </Item>
        <Label style={style.labelText}>Confirm Password</Label>
        <Item regular style={style.inputStyle}>
          <Input secureTextEntry={true} />
        </Item>
        <Button block style={style.buttonStyle}>
          <Text style={style.textStyle}>Sign Up</Text>
        </Button>
        <Text style={style.textStyleAccount}>
          Already have an account? Log In
        </Text>
      </Form>
    </Container>
  )
}

export default Register
