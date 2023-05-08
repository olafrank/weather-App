import React from 'react'
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';



const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey'
        }} >

        <Tab.Screen name={'current'} component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) =>
              <Feather name={'droplet'} size={25}
                color={focused ? 'tomato' : 'black'}
              />
          }}
        />

        <Tab.Screen name={'upcoming'} component={UpcomingWeather}
          options={{
            tabBarIcon: ({ focused }) => <Feather name={'clock'} size={25}
              color={focused ? 'tomato' : 'black'}
            />
          }}
        />

        <Tab.Screen name={'city'} component={City}
          options={{
            tabBarIcon: ({ focused }) => <Feather name={'home'} size={25}
              color={focused ? 'tomato' : 'black'}
            />
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>

  )
}


export default App