import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Link } from 'expo-router'
const index = () => {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text> Welcom Home Screen TTD</Text>
    <Link href="/(tabs)/home" style={styles.link}>Got to Home</Link>
  </View>
  )
}

export default index

const styles = StyleSheet.create({
  link:{
    color: 'pink',
    textDecorationColor: 'pink',
    textDecorationLine: 'underline'
  }
})