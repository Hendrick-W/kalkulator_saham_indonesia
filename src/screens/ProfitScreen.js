import React, { useState } from 'react'
import { 
  StyleSheet, SafeAreaView, Text, View, TextInput, Switch, TouchableOpacity,
} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {useSelector, useDispatch} from 'react-redux'

const ProfitScreen = () => {
  const [hargaBeli, setHargaBeli] = useState()
  const [hargaJual, setHargaJual] = useState()
  const [jmlLot, setJmlLot] = useState()
  const [isIntraDay, setIntraDay] = useState(false)
  const [selectedBroker, setSelectedBroker] = useState(-1)
  const listBroker = useSelector(state=>state.broker.data);
  const [selectedLanguage, setSelectedLanguage] = useState();
  console.log(selectedBroker)
  const handleHargaBeli = (value) => {
    setHargaBeli(
      value.replace(/[^0-9]/g, '')
    )
  }
  const handleHargaJual = (value) => {
    setHargaJual(
      value.replace(/[^0-9]/g, '')
    )
  }
  const handleJumlahLot = (value) => {
    setJmlLot(
      value.replace(/[^0-9]/g, '')
    )
  }
  const handleIntraDay = () => {
    setIntraDay(previousState => !previousState)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
      <Text style={styles.title}>Hitung Profit/Loss Transaksi</Text>
        <View style={styles.attributeContainer}>
          <Text style={styles.textInputTitle}>Harga Beli (Rp)</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              value={hargaBeli}
              placeholder="Contoh: 800, 1000, atau 2500"
              keyboardType='numeric'
              onChangeText={handleHargaBeli}
            />
          </View>
        </View>
        <View style={styles.attributeContainer}>
          <Text style={styles.textInputTitle}>Harga Jual (Rp)</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              value={hargaJual}
              placeholder="Contoh: 800, 1000, atau 2500"
              keyboardType='numeric'
              onChangeText={handleHargaJual}
            />
          </View>
        </View>
        <View style={styles.attributeContainer}>
          <Text style={styles.textInputTitle}>Jumlah lot</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              value={jmlLot}
              placeholder="Contoh: 1, 50, atau 100"
              keyboardType='numeric'
              onChangeText={handleJumlahLot}
            />
          </View>
        </View>
        <View style={[styles.attributeContainer, {flexDirection:'row', justifyContent:'space-between'}]}>
          <Text style={[styles.textInputTitle, {color: isIntraDay ? "#000" : "#BDC7C9" }]}>Intraday/One day trade</Text>
          <Switch
            trackColor={{false: "#767577", true: "#81b0ff"}}
            thumbColor={isIntraDay ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={handleIntraDay}
            value={isIntraDay}
          />
        </View>
        <View style={[styles.attributeContainer]}>
          <Text style={styles.textInputTitle}>Aplikasi/Broker</Text>
          <Picker
            selectedValue={selectedBroker}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedBroker(itemValue)}}
            mode='dropdown'
          >
            <Picker.Item label="Silakan dipilih...." value={-1} color="#BDC7C9"/>
            {listBroker.map((item) => {
              return <Picker.Item key={`${item.index}`} label={`${item.aplikasi}/${item.sekuritas}`} value={`${item.index}`} />
            })}
          </Picker>
        </View>
        {selectedBroker != -1 &&<> 
        <View style={[styles.descriptionContainer]}>
          {
            isIntraDay === false &&
            <>
            <View style={styles.feeInfo}>
              <Text style={{color:"#767577", fontWeight:'bold'}}>Fee Beli</Text>
              <Text style={{color:"#767577"}}>{listBroker[selectedBroker].fee_beli}%</Text>
            </View>
            <View style={styles.feeInfo}>
              <Text style={{color:"#767577", fontWeight:'bold'}}>Fee Jual</Text>
              <Text style={{color:"#767577"}}>{listBroker[selectedBroker].fee_jual}%</Text>
            </View>
            </>
          }
          {
            isIntraDay === true &&
            <>
            <View style={styles.feeInfo}>
              <Text style={{color:"#767577", fontWeight:'bold'}}>Fee Beli (Intraday)</Text>
              <Text style={{color:"#767577"}}>{listBroker[selectedBroker].fee_beli_intra}%</Text>
            </View>
            <View style={styles.feeInfo}>
              <Text style={{color:"#767577", fontWeight:'bold'}}>Fee Jual (Intraday)</Text>
              <Text style={{color:"#767577"}}>{listBroker[selectedBroker].fee_jual_intra}%</Text>
            </View>
            </>
          }
        </View>
        <Text style={{color:"red", fontWeight:'100', textAlign:'center'}}>*Fee ini bisa berbeda-beda sesuai dengan keadaan Bapak/Ibu, silakan ganti di halaman "Fee Transaksi"</Text>
        </>
        }
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={[styles.button, styles.buttonReset]}>
          <Text style={styles.textStyle}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonHitung]}>
          <Text style={styles.textStyle}>Hitung</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ProfitScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EBE1D7'
  },
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 2,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
    },
  textInput: {
    height: 40,
    padding: 5,
    fontSize: 14,
  },
  textInputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    textAlign:'center'
  },
  descriptionContainer: {
    marginHorizontal: 75,
  },
  feeInfo: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 3,
    width: 170,
  },
  buttonReset: {
    backgroundColor: "#ff595e",
  },
  buttonHitung: {
    backgroundColor: "#4DC7A4",
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  },
})