import React, {useState, useCallback} from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import SearchBar from '../components/SearchBar'
import Button from '../components/Button'

import {addBrokerDetail} from '../config/actions'

const FeeScreen = () => {
  const [textInput, setTextInput] = useState("")
  const onChangeText = useCallback( (value) => {
    setTextInput(value)
  }, [])
  const listBroker = useSelector(state=>state.broker.data)
  const dispatch = useDispatch();
  const addingBrokerDetail = () => {
    dispatch(addBrokerDetail({
      sekuritas: 'Ajaib Sekuritas Asia',
      kode_broker:'XC',
      aplikasi: 'Ajaib',
      fee_beli: 0.0015,
      fee_jual: 0.0025,
      fee_beli_intra: 0,
      fee_jual_intra:0
    }))
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
            return <Text>{item.sekuritas}</Text>
          }}
          keyExtractor={(item, index)=>index.toString()}
        />
      </View>
      <View>
        <View style={{width: "50%"}}>
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
    backgroundColor: '#faebd7'
  },
  listBroker:{
    borderWidth: 1, 
    height: "50%",
    margin: 10,
    borderRadius: 20,
    overflow:'hidden',
    padding: 5
  }
})
