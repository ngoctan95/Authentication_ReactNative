import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
const Spinner=({isLoading, style})=>{
    return(
        <View style={style}>
            <ActivityIndicator 
                animating={isLoading}/>
        </View>
    )
};
export default Spinner;