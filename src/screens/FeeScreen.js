import React, {useState, useCallback, useEffect} from 'react'
import { 
  StyleSheet, Text, View, SafeAreaView, FlatList,
} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import SearchBar from '../components/SearchBar'
import BrokerList from '../components/BrokerList'
import ModalBroker from '../components/ModalBroker'
import ModalDefault from '../components/ModalDefault'
import ModalDeleteBroker from '../components/ModalDeleteBroker'
import ModalEditBroker from '../components/ModalEditBroker'

import {isEmptyString} from '../utils/helper'

const FeeScreen = () => {
  const [textInput, setTextInput] = useState("")
  const listBroker = useSelector(state=>state.broker.data)
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false)
  const [modalEditVisible, setModalEditVisible] = useState(false)
  const [indexDeleteBroker, setIndexDeleteBroker] = useState(0)
  const [indexEditBroker, setIndexEditBroker] = useState(0)
  const [indexBroker, setIndexBroker] = useState(0)

  const onChangeText = useCallback((value) => {
    setTextInput(value)
  }, [])

  const handleModalDeleteVisible = useCallback(() => {
    setModalDeleteVisible(!modalDeleteVisible)
  }, [modalDeleteVisible])

  const handleModalEditVisible = useCallback(()=> {
    setModalEditVisible(!modalEditVisible)
  }, [modalEditVisible])

  const handleIndexBroker = useCallback((value) => {
    setIndexBroker(value)
  }, [modalEditVisible, modalDeleteVisible])

  console.log("list btokr", listBroker)
  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin:20}}>
        <Text style={{marginBottom:10, fontSize: 16, fontWeight:'700'}}>Nama aplikasi, sekuritas, atau broker:</Text>
        <SearchBar onChangeText={onChangeText} value={textInput}/>
      </View>
      <View style={styles.listBroker}>
        <Text style={{textAlign:'center'}}>Total sekuritas/broker: {listBroker.length}</Text>
        <FlatList
          data={isEmptyString(textInput) ? listBroker : listBroker.filter(item => {
            return item.sekuritas.toLowerCase().includes(textInput.toLowerCase()) || item.aplikasi.toLowerCase().includes(textInput.toLowerCase())
          })}
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
              handleModalDeleteVisible = {handleModalDeleteVisible}
              handleModalEditVisible = {handleModalEditVisible}
              handleIndexBroker = {handleIndexBroker}
            />
          }}
          keyExtractor={(item, index)=>index.toString()}
        />
      </View>
      <View style={{flexDirection:'row', marginTop: 10,}}>
        <ModalDefault/>
        <ModalBroker/>
      </View>
      <ModalDeleteBroker visible={modalDeleteVisible} handleModalDeleteVisible={handleModalDeleteVisible} index={indexBroker}/>
      <ModalEditBroker visible={modalEditVisible} handleModalEditVisible={handleModalEditVisible} index={indexBroker}/>
    </SafeAreaView>
  )
}

export default FeeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  listBroker:{
    borderWidth: 10, 
    height: "60%",
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 0,
    borderRadius: 20,
    overflow:'hidden',
    padding: 5,
  }
})
