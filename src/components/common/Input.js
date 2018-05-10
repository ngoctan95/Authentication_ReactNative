import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
const Input =({label, value, onChangeText, placeholder,style, styleContainer,styleText,secureTextEntry,autoCorrect})=>{
    return (
        <View style={styleContainer}>
            <Text style={styleText}>{label}</Text>
            <TextInput 
                autoCorrect={autoCorrect}
                secureTextEntry={secureTextEntry}
                style={style}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                />
        </View>
   );
}
export default Input;