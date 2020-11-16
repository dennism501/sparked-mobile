import React from 'react'
import {StyleSheet} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import Onboarding from './src/components/Onboarding'
import {createStackNavigator} from '@react-navigation/stack'
import Register from './src/components/Register'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default App
