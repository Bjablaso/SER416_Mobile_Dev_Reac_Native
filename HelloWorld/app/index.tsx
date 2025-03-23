import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text_Part1}> Hello, 
        <Text style={styles.Text_Part2}>SER423 My Name is Brandon Jablasone  </Text>
      </Text>
    
    </View>
  )
}


export default index

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
    Text_Part1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'Black',
    },
    Text_Part2:{
      fontSize: 24,
      fontWeight: 'light',
      color: 'Black',
    }
 })
