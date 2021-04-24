import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchBar = ({onChangeText=()=>{}, value=""}) => {
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={onChangeText}
      value={value}
      placeholder={"Stockbit, Mirae, PD, Philips...."}
    />
  )
}

export default SearchBar

const styles = StyleSheet.create({
  textInput:{
    height: 60,
    borderWidth:1,
    borderRadius: 20,
    padding:5,
    fontSize: 18,
  }
})
