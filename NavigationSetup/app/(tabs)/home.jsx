import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000"
        }}
      >
        <Text style={styles.Text}>Welcome to Home Screen</Text>
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
  Text: {
    color: "white"
  }
})