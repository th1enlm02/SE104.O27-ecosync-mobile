import { View, Text } from 'react-native'
import React from 'react'
import { CustomButton } from '../../components'
import { router } from 'expo-router'

const Home = () => {
  return (
    <View className="h-full justify-center items-center px-20">
      <Text>Home</Text>
      <CustomButton 
        title="Exit"
        handlePress={() => router.push("/")}
        textStyles="text-white text-lg"
        containerStyles="w-full bg-[#245501]"
      />
    </View>
  )
}

export default Home