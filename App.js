import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/component/Tabs';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useGetWeather } from './hooks/useGetWeather';
import ErrorItem from './src/component/ErrorItem';


const App = () => {
  const [loading, error, weather] = useGetWeather()


  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>

    )
  }

  return (
    <View style={styles.container}>
      {error ? (<ErrorItem />) : (<ActivityIndicator size={'large'} color={'blue'} />)}
    </View>
  )
}





const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App