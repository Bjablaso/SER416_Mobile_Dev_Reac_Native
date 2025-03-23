import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Tabs } from 'expo-router'

const NavigationLayout = () => {
  return (
     <Tabs screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "lightblue",
          borderTopWidth: 1,
          borderTopColor: "gray",
          height: 84,
        },

         headerShown: false
     }}>
        <Tabs.Screen name="home" options={{ title: 'Home' }} />
        <Tabs.Screen name="search" options={{ title: 'Search' }} />
        <Tabs.Screen name="notification" options={{ title: 'Notification' }} />
        <Tabs.Screen name="inbox" options={{ title: 'Inbox' }} />

     </Tabs>
  )
}

export default NavigationLayout
