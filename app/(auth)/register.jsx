import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../constants'
import { FormField } from '../../components'

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="h-full bg-[#CFE1B9]">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
          <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[100px] h-[100px]"
          />
          <Text className="text-[#1A4301] text-2xl mt-8">Sign Up</Text>
          <FormField 
            title="First Name"
            value={form.firstName}
            handleChangeText={(e) => setForm({ ...form, firstName: e })}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register