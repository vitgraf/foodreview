import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'

import { DataContext, Fornecedor } from '../context/dataContext'
import CustomButton from '../components/CustomButton'



const Home = () => {
  const actualState = useContext(DataContext)

  return (
  <View style={styles.container}>
    <Text style={styles.text}>Home</Text>
    <Text style={styles.text}>{actualState.state.counter}</Text>
    <CustomButton
      text="Aumentar"
      onPress={() => actualState.dispatch({type:"aumentar", payload:1})} 
      />
    <CustomButton
      text="Diminuir"
      onPress={() => actualState.dispatch({type:"diminuir", payload:1})} 
      />
      <CustomButton
      text="Zerar"
      onPress={() => actualState.dispatch({type:"zerar"})} 
      />

      {actualState.state.showMessage ? <Text style={styles.capeta}>SUA ALMA É MINHA!</Text> : null}

      <CustomButton
      text="MENSAGEM DO CAPETA"
      onPress={() => actualState.dispatch({type:"mostrar"})} 
      />
  </View>
  )
}

const styles = StyleSheet.create({

    container:{
      backgroundColor:"#FCA311",
      flex: 1,
      justifyContent: "center",
      alignItems:"center"
    },

    text: {
      color: '#14213D',
      fontWeight: "bold",
      fontSize: 30
    },

    capeta: {
      color: 'red',
      fontWeight: "bold",
      fontSize:20
      
    }



})

export default () => {
  return(
    <Fornecedor>
      <Home />
    </Fornecedor>
  )
}