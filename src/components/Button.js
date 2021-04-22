import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({onPress, title, backgroundColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={stylesButton({backgroundColor}).button}>
      <Text style={stylesText.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const stylesButton =({backgroundColor})=> StyleSheet.create({
  button:{
    backgroundColor: backgroundColor,
    padding: 15,
    borderRadius: 10,
    margin:10,
    alignItems: 'center'
  }
})
const stylesText = StyleSheet.create({
  text:{
    fontSize:20
  }
})

export default Button
