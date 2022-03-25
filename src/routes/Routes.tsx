import React from 'react'

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Arrow from '../assets/icons/arrow-left.svg'
import theme from '../global/theme'

import { Home } from '../pages/Home'
import { SelectGame } from '../pages/SelectGame'

const Stack = createStackNavigator()


export default function Routes() {
  const navigation = useNavigation()

  return (
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: theme.colors.dark_500,
          },
          headerShadowVisible: false,
          title: 'Loteria',

          headerTitleStyle: {
            color: theme.colors.orange_500,
            fontFamily: theme.fonts.bold,
            fontSize: 32,
          },
          headerLeft: () => <Arrow style={{ paddingLeft: 50 }} onPress={() => navigation.goBack()} />,
      }}>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='SelectGame' component={SelectGame} />
      </Stack.Navigator>
  )
}
