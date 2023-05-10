import { useState, useEffect } from 'react'
import * as Location from 'expo-location';
// import { WEATHER_API_KEY } from '@env';z





export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=46ae980ed464657a07b4577b02bfcfe8&units=metric`)


            const data = await res.json()
            if (data) {
                setWeather(data)
            }
        } catch (e) {
            setError('Could not fetch weather data.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setError('Permission to access location was denied.')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLat(location.coords.latitude)
            setLon(location.coords.longitude)
        })()
    }, [])

    useEffect(() => {
        if (lat && lon) {
            fetchWeatherData()
        }
    }, [lat, lon])

    return [loading, error, weather]
}
