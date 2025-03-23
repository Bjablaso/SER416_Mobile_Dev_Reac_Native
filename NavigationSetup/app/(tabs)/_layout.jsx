import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons';



import { Tabs } from 'expo-router'

// tab icon is a reat fuictional ocmponent that return a view with image
const TabIcon = ({ icon, focused }) => {
   return (
     <View className="w-6 h-6">
       {icon()}
         
     </View>
   );
 };
 

const NavigationLayout = () => {
  return (
     <>
     <Tabs screenOptions={{
        tabBarActiveTintColor: "lightblue",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      
        headerShown: false
     }}>
        <Tabs.Screen name="home" options={{ title: 'Home', headerShown: false, 
         tabBarIcon: ({color, focused})=>(
            <TabIcon
             icon={() => <FontAwesome name="home" size={24} color={color} />}
            focused={focused}
          />
         )
         }} />
        <Tabs.Screen name="search" options={{ title: 'Search',
        headerShown: false,
         tabBarIcon: ({color, focused})=>(
            <TabIcon
             icon={() => <FontAwesome name="search" size={24} color={color} />}
            focused={focused}
          />
         ) }} /> 
        <Tabs.Screen name="notification" options={{ title: 'Notification',
        headerShown: false,
          tabBarIcon: ({color, focused})=>(
              <TabIcon
              icon={() => <FontAwesome name="bell" size={24} color={color} />}
              focused={focused}
            />
          ) }} />
     
        <Tabs.Screen name="inbox" options={{ title: 'Inbox',
        headerShown: false,
          tabBarIcon: ({color, focused})=>(
              <TabIcon
              icon={() => <FontAwesome name="inbox" size={24} color={color} />}
              focused={focused}
            />
          ) }} />

     </Tabs>
     </>
  )
}

export default NavigationLayout

// tabBarStyle: {
//    backgroundColor: "lightblue",
//    borderTopWidth: 1,
//    borderTopColor: "gray",
//    height: 84,
//  },