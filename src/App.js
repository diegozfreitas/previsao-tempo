import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Loader } from './components/Loader'

import InitialPage from './pages/initial'

const App = () => {
  const [data, setData] = useState({})
  const [refresh, setRefresh] = useState('')
  const [loading, setLoading] = useState(true)

  const showPosition = async (position) => {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&lang=pt_br&appid=${process.env.REACT_APP_KEY_WEATHER_MAP}`)

    setData(result.data)
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("não foi possivel acessar a geolocalização")
    }
  }

  useEffect(() => {
    setLoading(true)
    getLocation()
    setTimeout(() => {
      setLoading(false)
    }, 900)
  }, [refresh])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <InitialPage data={data} setRefresh={() => setRefresh(String(new Date()))} />
      )}
    </>
  )
}

export default App;
