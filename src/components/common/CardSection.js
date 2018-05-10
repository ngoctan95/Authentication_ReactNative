import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {styles} from '../../../style/styleSheet';
const CardSection =(props)=>{
    return(
        <View style={styles.containerCardSection}>
            {props.children}
        </View>
    )
} 
export default CardSection;
