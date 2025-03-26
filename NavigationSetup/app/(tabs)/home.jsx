import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
      <View
        className='items-center justify-center gap-2'
      >
        <Text className='text-white'>Welcome to Home Screen</Text>
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
  Text: {
    color: "white"
  }
})