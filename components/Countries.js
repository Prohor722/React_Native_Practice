import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function countries() {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
  return (
    <View style={{backgroundColor: "red"}} >
      <Text>countries</Text>
    </View>
  )
}