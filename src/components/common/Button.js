import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {styles} from '../../../style/styleSheet';
const Button=(props)=>{  
    return (
        <TouchableOpacity style={styles.buttonStyle}
        onPress={props.onPress}>
            <Text style={styles.textButton}>{props.text}
            </Text>
        </TouchableOpacity>
    )
}
export default Button;