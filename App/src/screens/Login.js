import {
    StyleSheet, TouchableOpacity, View, Image, useWindowDimensions, Text
} from "react-native";
import React, { useState, useContext } from 'react';
import Logo from '../assets/images/logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import api from "../api/index.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {AsyncStorage} from 'react-native';
import { Context } from './../context/dataContext';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();
    
    const {state, dispatch } = useContext(Context)

    const onLoginPressed = async () => {
        try {
            const data = await api.post('/login',{
                email:email,
                password: password
            })
            if(data.status === 200){
               await AsyncStorage.setItem('token', data.data.token)
               dispatch({type: 'logIn', payload: true})
            }else{
                alert('email ou senha invalidos')
                setPassword('')
            }
        } catch(err) {
            alert('Erro inesperado!')
            console.log(err)
        }

        

    }

   

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomButton text="Login" onPress={onLoginPressed} />
            <TouchableOpacity
                onPress={() => navigation.navigate("RegisterUser")}
            >
                <Text style={styles.blabla}>
                Não tem uma conta?{" "}
               
                <Text style={styles.createAccountText}>
                    Crie uma
                    </Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#FCA311",
        flex:1
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        
    },

    blabla: {
        color: "#000000"

    },
    createAccountText: {
        fontWeight: "bold",
        color:'red'
    }


});
export default Login;