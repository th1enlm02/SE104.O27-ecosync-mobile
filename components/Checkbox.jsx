import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Checkbox = ({ checked, onChange, label, otherStyles }) => {
  return (
    <TouchableOpacity onPress={onChange} className={`flex flex-row items-center ${otherStyles}`}>
        <View className="w-6 h-6 border-2 border-[#1A4301]">
            {checked && (
                <View className="w-5 h-5 bg-[#1A4301]" />
            )}
        </View>
        {label && (
            <Text className="text-[#1A4301] ml-2 text-base">{label}</Text>
        )}
    </TouchableOpacity>
  )
}

export default Checkbox