import { View, Text, SafeAreaView, ScrollView, Image, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../constants'
import { CustomButton, FormField } from '../../components'
import { router } from 'expo-router'

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="h-full bg-[#CFE1B9]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={80}
      >
        <ScrollView>
          <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6"
                style={{
                  minHeight: Dimensions.get("window").height - 100,
                }}
          >
            <Image 
              source={images.logo}
              resizeMode='contain'
              className="w-[100px] h-[100px]"
            />
            <Text className="text-[#1A4301] text-2xl mt-8">Sign Up</Text>
            <View className="w-full flex flex-row justify-between mt-7">
              <FormField 
                title="First Name"
                value={form.firstName}
                placeholder={"First Name"}
                handleChangeText={(e) => setForm({ ...form, firstName: e })}
                otherStyles="w-1/2 pr-2"
              />
              <FormField 
                title="Last Name"
                value={form.lastName}
                placeholder={"Last Name"}
                handleChangeText={(e) => setForm({ ...form, lastName: e })}
                otherStyles="w-1/2 pl-2"
              />
            </View>
            <FormField 
                title="Email"
                value={form.email}
                placeholder={"Email"}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-4"
                keyboardType="email-address"
              />
            <FormField 
                title="Password"
                value={form.password}
                placeholder={"Password"}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="mt-4"
              />
            <CustomButton 
              title="Sign Up"
              handlePress={() => router.push("/login")} // handle event here !!!
              textStyles="text-white text-lg"
              containerStyles="w-full mt-4 bg-[#245501]"
            />
            <View className="w-full h-[1px] bg-[#DDE1E6] my-7" />
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text className="text-base text-[#1A4301]">Already have an account?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Register