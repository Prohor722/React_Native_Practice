import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function countries() {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
  return (
    <View style={{backgroundColor: "red"}} >
      <Text>countries {countries.length}</Text>
    </View>
  )
}