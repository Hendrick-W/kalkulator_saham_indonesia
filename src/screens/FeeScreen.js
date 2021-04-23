import React, {useState, useCallback} from 'react'
import { 
  StyleSheet, Text, View, SafeAreaView, FlatList
} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import BrokerList from '../components/BrokerList'

import {
  addBrokerDetail, defaultsBrokerDetail,
} from '../config/actions'

const FeeScreen = () => {
  const [textInput, setTextInput] = useState("")
  const onChangeText = useCallback( (value) => {
    setTextInput(value)
  }, [])
  const listBroker = useSelector(state=>state.broker.data)
  const dispatch = useDispatch();
  
  const addingBrokerDetail = () => {
    console.log('Add teruslah')
    //dispatch(addBrokerDetail({}))
  }
  const defaultBrokerDetail = () => {
    console.log('Default broker')
    dispatch(defaultsBrokerDetail())
  }
  console.log(listBroker)
  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin:20}}>
        <Text style={{marginBottom:10, fontSize: 16, fontWeight:'700'}}>Nama aplikasi, sekuritas, atau broker:</Text>
        <SearchBar onChangeText={onChangeText} value={textInput}/>
      </View>
      <View style={styles.listBroker}>
        <FlatList
          data={listBroker}
          renderItem={({item, index}) => {
            return <BrokerList
              index = {item.index}
              sekuritas = {item.sekuritas}
              kode_broker = {item.kode_broker}
              aplikasi = {item.aplikasi}
              fee_beli = {item.fee_beli}
              fee_jual = {item.fee_jual}
              fee_beli_intra = {item.fee_beli_intra}
              fee_jual_intra = {item.fee_jual_intra}
            />
          }}
          keyExtractor={(item, index)=>index.toString()}
        />
      </View>
      <View>
        <View style={{width: "50%", flexDirection:'row'}}>
          <Button onPress={defaultBrokerDetail} title={"Default"} backgroundColor="#ff595e"/>
          <Button onPress={addingBrokerDetail} title={"Tambah Broker"} backgroundColor="#4DC7A4"/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FeeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  listBroker:{
    borderWidth: 1, 
    height: "60%",
    margin: 10,
    borderRadius: 20,
    overflow:'hidden',
    padding: 5
  }
})
