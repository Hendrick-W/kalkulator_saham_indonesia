import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const BrokerList = ({
  index, sekuritas, aplikasi, fee_beli, fee_jual, fee_beli_intra, fee_jual_intra, handleModalDeleteVisible, handleModalEditVisible, handleIndexBroker}) => {
  const window = useWindowDimensions();
  return (
    <View style={[styles.container, {height: window.height * 0.2}]}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
        <Text style={styles.broker}>{aplikasi} / {sekuritas.length < 15 ?
          `${sekuritas}`:
          `${sekuritas.substring(0,15)}...`
        }
      </Text>
        <View style={{flexDirection:'row', alignContent:'center'}}>
          <TouchableOpacity style={styles.edit}
            onPress={()=>{
              handleModalEditVisible()
              handleIndexBroker(index)
            }}
          >
            <Icon name="edit" color="#818385" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delete}
            onPress={() => {
              handleModalDeleteVisible()
              handleIndexBroker(index)
            }}
          >
            <Icon name="delete" color="#818385" size={30}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around', flex:1}}>
        <View style={{flex:1, borderRightColor:"#6a4c93", borderRightWidth: 1,borderTopColor:"#6a4c93", borderTopWidth: 1, padding:10}}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{...styles.fee, backgroundColor:"#a7bf50", flex:1}}>
              <Text style={styles.textFee}>Fee Beli</Text>
            </View>
            <View style={{...styles.fee, backgroundColor:"#f2e291", flex:1}}>
              <Text style={styles.textFee}>Fee Jual</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
              <Text style={styles.textNumFee}>{fee_beli}%</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
              <Text style={styles.textNumFee}>{fee_jual}%</Text>
            </View>
          </View>
        </View>
        <View style={{flex:1, borderLeftColor:"#6a4c93", borderLeftWidth: 1, borderTopColor:"#6a4c93", borderTopWidth: 1,padding:10}}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{...styles.fee, backgroundColor:"#a7bf50", flex:1}}>
              <Text style={styles.textFee}>Fee Beli</Text>
            </View>
            <View style={{...styles.fee, backgroundColor:"#f2e291", flex:1}}>
              <Text style={styles.textFee}>Fee Jual</Text>
            </View>
          </View>
          <View style={{alignItems:'center'}}>
            <View style={styles.day_trade}>
              <Text style={styles.text_day_trade}>(Day Trade)</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
              <Text style={styles.textNumFee}>{fee_beli_intra}%</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
              <Text style={styles.textNumFee}>{fee_jual_intra}%</Text>
            </View>
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
    marginTop:20,
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
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:10,
  },
  delete: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fee:{
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    borderRadius:25,
    margin:1
  },
  textFee: {
    fontSize: 16,
    fontWeight:'700',
    fontVariant:['small-caps'],
  },
  textNumFee: {
    fontSize: 18,
    fontVariant:['tabular-nums'],
  },
  text_day_trade: {
    fontSize: 15,
    fontWeight:'bold',
  }

})
