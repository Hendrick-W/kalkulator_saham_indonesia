import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.logo}>
      <Image source={require('../assets/logo_kalkulator_saham_indonesia.png')}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo:{
    flex:1,
    marginTop:20,
    padding:10,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default SplashScreen
