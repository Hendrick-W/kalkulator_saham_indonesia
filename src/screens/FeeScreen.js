import React, {useState, useCallback, useEffect} from 'react'
import { 
  StyleSheet, Text, View, SafeAreaView, FlatList
} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import BrokerList from '../components/BrokerList'
import ModalBroker from '../components/ModalBroker'
import ModalDefault from '../components/ModalDefault'

const FeeScreen = () => {
  const [textInput, setTextInput] = useState("")
  const listBroker = useSelector(state=>state.broker.data)
  const [showList, setShowList] = useState(listBroker)
  const dispatch = useDispatch();
  
  const handleShowList = (value) => {
    setShowList(value)
  }

  const onChangeText = useCallback((value) => {
    setTextInput(value)
    if(value.length > 0){
      setShowList(listBroker.filter(item => {
        return item.sekuritas.toLowerCase().includes(value.toLowerCase()) || item.aplikasi.toLowerCase().includes(value.toLowerCase())
      }))
    } else {
      setShowList(listBroker)
    }
  }, [])
  console.log("list btokr", listBroker)
  console.log("show list", showList)
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
      <View style={{flexDirection:'row', marginTop: 10,}}>
        <ModalDefault handleShowList={handleShowList}/>
        <ModalBroker handleShowList={handleShowList}/>
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
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 0,
    borderRadius: 20,
    overflow:'hidden',
    padding: 5,
  }
})
