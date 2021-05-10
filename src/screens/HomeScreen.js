import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, BackHandler } from 'react-native'
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
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
  useEffect(() => {
    admob()
    .setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.G,

      // Indicates that you want your content treated as child-directed for purposes of COPPA.
      tagForChildDirectedTreatment: false,

      // Indicates that you want the ad request to be handled in a
      // manner suitable for users under the age of consent.
      tagForUnderAgeOfConsent: false,
    })
    .then(() => {
      // Request config successfully set!
    });
  }, [])
  return (
    <SafeAreaView style={styles.mainContainer}>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    <View style={styles.container}>
      <Title title={"Kalkulator Profit/Loss Saham Indonesia"}/>
      <View style={styles.buttonContainer}>
        <Button onPress={navigateToProfitScreen} title={"Profit/Loss Transaksi"} backgroundColor="#8ac926"/>
        <Button onPress={navigateToFeeTransaksi} title={"Fee Transaksi"} backgroundColor="#1982c4"/>
      </View>
      <View style={{position:'absolute', bottom:0, alignItems:'center'}}>
        <Text>Versi: 1.0.0</Text>
        <Button title={"Exit App"} onPress={exitApp} backgroundColor="#ff595e"/>
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
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
