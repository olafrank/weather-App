import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/component/Tabs';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env'


const App = () => {
  // set state for loading data
  const [loading, setLoading] = useState(true)
  
  const [error, setError] = useState(null)
  // set state for data to fetch
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  // fetching api data

  const fetchWeatherData = async () => {
    try {
      const res = await
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const data = await response.json()
      setWeather(data)

    } catch (e) {
      setError('could not fetch weather')

    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat,lon])

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }




  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>

  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App