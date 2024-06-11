import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import { CustomButton, FormField } from '../../components';
import { router } from 'expo-router';

const ForgotPassword = () => {
    const [form, setForm] = useState({
        email: "",
    });
    return (
        <SafeAreaView className="h-full bg-[#CFE1B9]">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
                keyboardVerticalOffset={80}
            >
                <ScrollView>
                    <View className="w-full justify-center items-center min-h-[85vh] px-4"
                            style={{
                                minHeight: Dimensions.get("window").height - 100,
                            }}
                    >
                        <Image 
                            source={images.logo}
                            resizeMode='contain'
                            className="w-[100px] h-[100px]"
                        />
                        <Text className="text-[#1A4301] text-2xl mt-8">Forgotten your password?</Text>
                        <Text className="text-base text-[#1A4301] mt-2 text-center">There is nothing to worry about, we'll send you a message to help you reset your password.</Text>
                        <FormField 
                            title="Email"
                            value={form.email}
                            placeholder={"Email"}
                            handleChangeText={(e) => setForm({ ...form, email: e })}
                            otherStyles="mt-8"
                            keyboardType="email-address"
                        />
                        <CustomButton 
                            title="Submit"
                            handlePress={() => router.push("/login")} // handle event here !!!
                            textStyles="text-white text-lg"
                            containerStyles="w-full mt-4 bg-[#245501] mb-20"
                            />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ForgotPassword