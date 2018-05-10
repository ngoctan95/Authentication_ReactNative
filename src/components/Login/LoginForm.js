import React, {Component} from 'react';
import {View, Image, TextInput, Dimensions,StyleSheet,Text} from 'react-native';
import firebase from 'firebase';
import Button from '../common/Button';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Input from '../common/Input';
import {styles} from '../../../style/styleSheet';
import Spinner from '../common/Spinner';
class LoginForm extends Component{
    constructor(props){
    super(props);
    this.state = {
        text: "",
        titleButton:"Login",
        password:"",
        email:"",
        error:"",
        isLoading:false
        };
    }
    _onBtnLoginPress=()=>{
        this.setState({isLoading:true})
        const { email, password} = this.state;
        console.log(this.state);
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((res)=>{
            console.log(res);
            this._onLoginSuccess();
        })
        .catch((ex)=>{
            console.log(ex);
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((res)=>{
                this._onLoginSuccess();
                console.log(res)
            })
            .catch((ex)=>{
                this._onLoginFail();
                console.log(ex)
               // this.setState({error:"Err authentication"});
            });
        });
       
    }
    _onLoginFail=()=>{
        this.setState({
            isLoading:false,
            email:'',
            password:'',
            error:'Err authen'
        });
        console.log("states",this.state);
    }
    _onLoginSuccess=()=>{
        this.setState({
            isLoading:false,
            email:'',
            password:'',
            error:''
        });
        console.log("states",this.state);
    }
    render=()=>{
        const styleTI=StyleSheet.create({
            input:{
                width:Dimensions.get("window").width-37.5,
                height:20
            }
        })
        const widthViewPort = Dimensions.get("window").width;
        return(
            <Card>
                <CardSection>
                    <Input 
                    autoCorrect={false}
                    secureTextEntry={false}
                    styleContainer={styles.styleContainerInput}
                    styleText={styles.labelInput}
                    style={styles.styleInput}
                    onChangeText={email=>this.setState({email : email})}
                    label={"Username"}
                    value={this.state.email}
                    placeholder={"Input here"}/>
                </CardSection>
                <CardSection>
                    <Input
                    autoCorrect={false} 
                    secureTextEntry={true}
                    value={this.state.password} 
                    styleContainer={styles.styleContainerInput}
                    styleText={styles.labelInput}
                    style={styles.styleInput}
                    onChangeText={password=>{this.setState({password:password})}}
                    label={"Password"}
                    placeholder={"..."}/>
                </CardSection>
                <Text style={styles.textError}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {
                        this.state.isLoading?
                        <Spinner isLoading={true} style={styles.spinner}/>:
                        <Button text={this.state.titleButton} onPress={this._onBtnLoginPress}></Button>
                    }
                    
                </CardSection>
            </Card>
        )
    }
}
export default LoginForm;