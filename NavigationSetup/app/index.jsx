import {  Text, View } from 'react-native'
import React from 'react'


import { Link } from 'expo-router'
const index = () => {
  return (
    <View
    className="flex-1 justify-center items-center bg-white"
    // style={{flex: 1, justifyContent: 'center', alignItems: 'center', 
    //   backgroundColor: 'white'}}
  >
    <Text > Welcom Home Screen TTD</Text>
    <Link href="/(tabs)/home"  >
     <Text className='text-cyan-950'>Got to Home </Text> 
    </Link>
  </View>
  )
}

export default index



