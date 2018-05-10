import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {styles} from '../../../style/styleSheet';
const Card=(props)=>{
    return (
        <View style={styles.containerCard}>
            {props.children}
        </View>
    )
}
export default Card;