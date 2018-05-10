import React, {Component} from 'react';
import {View} from 'react-native';
import Button from '../common/Button';
import {styles} from '../../../style/styleSheet';
import CardSection from '../common/CardSection';
import firebase from 'firebase';
class Logout extends Component{
    _onBtnLoginPress=()=>{
        //alert("logout");
        firebase.auth().signOut()
        .then((res)=>{
            console.log("log",res)
        })
        .catch((ex)=>{
            console.log(ex)
        })
    }
    render(){
        return(
            <CardSection >
                <Button text={"Logout"} onPress={this._onBtnLoginPress}></Button>
            </CardSection>
        )
    }
}
export default Logout;