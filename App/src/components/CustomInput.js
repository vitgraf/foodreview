import { Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { View } from 'react-native-web';
const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5E5E5",
        width: '100%',
        marginVertical: 5,
       // borderWidth: 1,
       // borderColor: '#e8e8e8',
        borderRadius: 5,
    },
    input: {
        padding: 15,
        fontWeight: 'bold',
        color: '#14213D'
   
    }
})
export default CustomInput;