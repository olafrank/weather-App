import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()



const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    backgroundColor: 'lightblue'
                },
                headerStyle: {
                    backgroundColor: 'lightblue',
                    alignSelf: 'center'
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'tomato',

                }
            }} >

            <Tab.Screen name={'current'}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <Feather name={'droplet'} size={25}
                            color={focused ? 'tomato' : 'black'}
                        />
                }}
            >
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>

            <Tab.Screen name={'upcoming'}
                options={{
                    tabBarIcon: ({ focused }) => <Feather name={'clock'} size={25}
                        color={focused ? 'tomato' : 'black'}
                    />
                }}
            >
                {() => <UpcomingWeather weatherData={weather.list} />}

            </Tab.Screen>

            <Tab.Screen name={'city'} component={City}
                options={{
                    tabBarIcon: ({ focused }) => <Feather name={'home'} size={25}
                        color={focused ? 'tomato' : 'black'}
                    />
                }}
            />

        </Tab.Navigator>
    )
}

export default Tabs