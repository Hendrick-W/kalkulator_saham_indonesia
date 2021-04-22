import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ToastAndroid, BackHandler } from 'react-native'
import {useSelector} from 'react-redux'

import Button from '../components/Button'
import Title from '../components/Title'

const HomeScreen = ({navigation}) => {
  const navigateToFeeTransaksi = () => {
    navigation.navigate('Fee')
  }
  const navigateToProfitScreen = () => {
    navigation.navigate('Profit')
  }
  const exitApp = () => {
    BackHandler.exitApp()
  }
  return (
    <SafeAreaView style={styles.container}>
      <Title title={"Kalkulator Saham Indonesia"}/>
      <View style={styles.buttonContainer}>
        <Button onPress={navigateToProfitScreen} title={"Profit Transaksi"} backgroundColor="#4DC7A4"/>
        <Button onPress={navigateToFeeTransaksi} title={"Fee Transaksi"} backgroundColor="#00bcd4"/>
      </View>
      <View style={{position:'absolute', bottom:0, alignItems:'center'}}>
        <Text>Versi: 1.0.0</Text>
        <Button title={"Exit App"} onPress={exitApp} backgroundColor="#ff5c5c"/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#faebd7'
  },
  buttonContainer:{
    width: "80%",
    height: "50%",
    borderWidth: 1,
    borderRadius: 25,
    overflow:'hidden',
    marginTop: 20,
    justifyContent:'center',
  }
})

export default HomeScreen
