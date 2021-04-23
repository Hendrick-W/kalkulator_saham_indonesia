import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BrokerList = ({
  index, sekuritas, kode_broker, aplikasi, fee_beli, fee_jual, fee_beli_intra, fee_jual_intra,}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
        <Text style={styles.broker}>{aplikasi} / {sekuritas.length < 10 ?
          `${sekuritas}`:
          `${sekuritas.substring(0,9)}...`
        }
      </Text>
        <View style={{flexDirection:'row', width: 120, justifyContent:'space-between', alignContent:'center'}}>
          <TouchableOpacity style={styles.edit}>
            <Text style={{fontSize:16, fontWeight:'700'}}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delete}>
            <Text style={{fontSize:16, fontWeight:'700'}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around', flex:1}}>
        <View style={{flex:1, borderRightColor:"#6a4c93", borderRightWidth: 1,borderTopColor:"#6a4c93", borderTopWidth: 1, padding:10}}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Fee Beli</Text>
            <Text>Fee Jual</Text>
          </View>
          <View style={{}}>
            <Text></Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>{fee_beli}%</Text>
            <Text>{fee_jual}%</Text>
          </View>
        </View>
        <View style={{flex:1, borderLeftColor:"#6a4c93", borderLeftWidth: 1, borderTopColor:"#6a4c93", borderTopWidth: 1,padding:10}}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Fee Beli</Text>
            <Text>Fee Jual</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Text>(Day Trade)</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>{fee_beli_intra}%</Text>
            <Text>{fee_jual_intra}%</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default BrokerList

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    marginTop:10,
    height: 150,
    borderRadius: 10,
    overflow:'hidden',
    padding: 5,
  },
  broker:{
    fontSize:18,
    fontWeight:"700"
  },
  edit: {
    width: 50,
    backgroundColor: "#ffca3a",
    alignItems: 'center',
    justifyContent: 'center'
  },
  delete: {
    width: 50,
    backgroundColor: "#ff595e",
    alignItems: 'center',
    justifyContent: 'center'
  }

})
