import React from 'react'
import { StyleSheet, TextInput, useWindowDimensions } from 'react-native'

const SearchBar = ({onChangeText=()=>{}, value=""}) => {
  const window = useWindowDimensions()
  return (
    <TextInput
      style={[styles.textInput, {height: window.height * 0.07}]}
      onChangeText={onChangeText}
      value={value}
      placeholder={"Stockbit, Mirae, PD, Philips...."}
    />
  )
}

export default SearchBar

const styles = StyleSheet.create({
  textInput:{
    borderWidth:1,
    borderRadius: 20,
    padding:5,
    fontSize: 18,
  }
})
