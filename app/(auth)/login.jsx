import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { Checkbox, CustomButton, FormField } from '../../components'
import { router } from 'expo-router'

const Login = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(false);

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
            <Text className="text-[#1A4301] text-2xl mt-8">Welcome Back</Text>
            <Text className="text-base text-[#1A4301] mt-2">Please log in to continue</Text>
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
            <View className="w-full mt-4 flex flex-row justify-between">
              <Checkbox 
                checked={checked}
                onChange={() => setChecked(!checked)} // handle event here !!! if needed 
                label="Remember me"
                otherStyles="ml-1"
              />
              <TouchableOpacity onPress={() => router.push("/forgot-password")}>
                <Text className="text-base text-[#1A4301] mr-1">Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <CustomButton 
              title="Log In"
              handlePress={() => router.push("/home")} // handle event here !!!
              textStyles="text-white text-lg"
              containerStyles="w-full mt-4 bg-[#245501]"
            />
            <View className="w-full h-[1px] bg-[#DDE1E6] my-7" />
            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text className="text-base text-[#1A4301]">No account yet? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login