import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { Link } from 'expo-router'
const index = () => {
  return (
    <View
    // className="flex-1 justify-center items-center bg-white"
    style={{flex: 1, justifyContent: 'center', alignItems: 'center', 
      backgroundColor: 'white'}}
  >
    <Text > Welcom Home Screen TTD</Text>
    <Link href="/(tabs)/home" style={styles.link} >Got to Home</Link>
  </View>
  )
}

export default index

const styles = StyleSheet.create({
    link:{
      textDecorationLine: 'underline',
      textDecorationColor: 'pink',
      color: 'pink',
    }
})
