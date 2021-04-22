import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = ({title}) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize: 40,
    textAlign:'center',
    textDecorationLine:'underline',
    textDecorationStyle:'dashed',
    fontWeight:'500'
  }
})

export default Title;