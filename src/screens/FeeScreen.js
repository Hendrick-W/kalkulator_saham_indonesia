import React, {useState, useCallback} from 'react'
import { 
  StyleSheet, Text, View, SafeAreaView, FlatList
} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import BrokerList from '../components/BrokerList'
import ModalBroker from '../components/ModalBroker'
import ModalDefault from '../components/ModalDefault'

import {
  addBrokerDetail, defaultsBrokerDetail,
} from '../config/actions'


const FeeScreen = () => {
  const [textInput, setTextInput] = useState("")
  const listBroker = useSelector(state=>state.broker.data)
  const [showList, setShowList] = useState(listBroker)
  const dispatch = useDispatch();
  
  const addingBrokerDetail = () => {
    console.log('Add teruslah')
    //dispatch(addBrokerDetail({}))
  }
  const defaultBrokerDetail = () => {
    console.log('Default broker')
    dispatch(defaultsBrokerDetail())
  }
  const onChangeText = useCallback( (value) => {
    setTextInput(value)
    if(value.length > 0){
      setShowList(listBroker.filter(item => {
        return item.sekuritas.toLowerCase().includes(value.toLowerCase()) || item.kode_broker.toLowerCase().includes(value.toLowerCase()) || item.aplikasi.toLowerCase().includes(value.toLowerCase())
      }))
    } else {
      setShowList(listBroker)
    }
  }, [])
  console.log(listBroker)
  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin:20}}>
        <Text style={{marginBottom:10, fontSize: 16, fontWeight:'700'}}>Nama aplikasi, sekuritas, atau broker:</Text>
        <SearchBar onChangeText={onChangeText} value={textInput}/>
      </View>
      <View style={styles.listBroker}>
        <FlatList
          data={showList}
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
      <View style={{ height:100, flexDirection:'row'}}>
        <ModalDefault/>
        <ModalBroker/>
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
    borderWidth: 10, 
    height: "60%",
    margin: 10,
    borderRadius: 20,
    overflow:'hidden',
    padding: 5,
  }
})
