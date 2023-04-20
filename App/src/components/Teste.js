import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { DataContext, Fornecedor } from '../context/dataContext';

const Teste = () => {
    const data = useContext(DataContext);
    return (
    <text>{data}</text>
  )
}

export default () => {
  return(
    <Fornecedor>
      <Teste />
    </Fornecedor>
  )
}