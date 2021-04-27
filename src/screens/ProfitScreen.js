import React, { useState } from 'react'
import { 
  StyleSheet, SafeAreaView, Text, View, TextInput, Switch, Pressable, Alert, TouchableWithoutFeedback, Keyboard
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

  const [totalBeli, setTotalBeli] = useState()
  const [totalJual, setTotalJual] = useState()
  const [totalTransaksi, setTotalTransaksi] = useState()
  const [presentase, setPresentase] = useState()

  // console.log(selectedBroker, isIntraDay)

  const handleHargaBeli = (value) => {
    if(value.length == 1 || value == '' || (value.match(/\./g) || []).length == 1) {
      setHargaBeli(
        value.replace(/[^0-9\.]/g, '')
      )
    } else {
      if(value.match(/(?:^| )\d+(\.\d+)?(?=$| )|(?:^| )\.\d+(?=$| )/gm) || value === '') setHargaBeli(value)
    }
  }
  const handleHargaJual = (value) => {
    if(value.length == 1 || value == '' || (value.match(/\./g) || []).length == 1) {
      setHargaJual(
        value.replace(/[^0-9\.]/g, '')
      )
    } else {
      if(value.match(/(?:^| )\d+(\.\d+)?(?=$| )|(?:^| )\.\d+(?=$| )/gm) || value === '') setHargaJual(value)
    }
  }
  const handleJumlahLot = (value) => {
    setJmlLot(
      value.replace(/[^0-9]/g, '')
    )
  }
  const handleIntraDay = () => {
    setIntraDay(previousState => !previousState)
  }
  const handleReset = () => {
    Keyboard.dismiss()
    setHargaBeli()
    setHargaJual()
    setJmlLot()
    setIntraDay(false)
    setSelectedBroker(-1)
    setTotalBeli()
    setTotalJual()
    setTotalTransaksi()
  }

  const handleHitung = () => {
    Keyboard.dismiss()
    if (hargaBeli === undefined || hargaBeli === "" || hargaJual === undefined || hargaJual === "" || jmlLot === undefined || jmlLot === "" || selectedBroker === -1){
      Alert.alert(
        "Pesan",
        "Pastikan Harga Beli, Harga Jual, Jumlah Lot, dan Aplikasi/Broker telah terisi dan dipilih",
        [
          {
            text : "Ok",
            style: "cancel"
          }
        ]
      )
    } else {
      const fee_beli = isIntraDay ? listBroker[selectedBroker].fee_beli_intra/100 + 1 : listBroker[selectedBroker].fee_beli/100 + 1
      const total_beli = Math.ceil(hargaBeli * jmlLot * 100 * fee_beli)
      
      const fee_jual = isIntraDay ? 1 - listBroker[selectedBroker].fee_jual_intra/100 : 1 - listBroker[selectedBroker].fee_jual/100
      const total_jual = Math.ceil(hargaJual * jmlLot * 100 * fee_jual)

      const total_transaksi = total_jual - total_beli;
      const presentase_profit_loss = +((total_transaksi / total_beli * 100).toFixed(2))

      setTotalBeli(total_beli)
      setTotalJual(total_jual)
      setTotalTransaksi(total_transaksi)
      setPresentase(presentase_profit_loss)
    }

  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
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
              keyboardType='decimal-pad'
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
              keyboardType='decimal-pad'
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
        <Text style={{color:"red", fontWeight:'100', textAlign:'center'}}>*Fee ini bisa berbeda dengan keadaan Bapak/Ibu sekarang, silakan ganti di halaman "Fee Transaksi"</Text>
        </>
        }
      </View>
      <View style={styles.buttonGroup}>
        <Pressable style={[styles.button, styles.buttonReset]} onPress={handleReset}>
          <Text style={styles.textStyle}>Reset</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.buttonHitung]} onPress={handleHitung}>
          <Text style={styles.textStyle}>Hitung</Text>
        </Pressable>
      </View>
      <View style={styles.tableContainer}>
        <View style={{flexDirection:'row'}}>
          <View style={[styles.headerBuy]}>
            <Text style={styles.textStyle}>Total Beli</Text>
          </View>
          <View style={[styles.headerSell]}>
            <Text style={styles.textStyle}>Total Jual</Text>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={styles.netValue}>
            <Text style={{ textAlign: "center", fontSize: 20}}>{isNaN(totalBeli) === false ? `Rp ${totalBeli}` : ''}</Text>
          </View>
          <View style={styles.netValue}>
            <Text style={{ textAlign: "center", fontSize: 20}}>{isNaN(totalJual) === false ? `Rp ${totalJual}` : ''}</Text>
          </View>
        </View>
        <View style={{backgroundColor: totalTransaksi > 0 ? '#00C9A7' : totalTransaksi < 0 ? '#C34A36' : "#B0A8B9"}}>
          <Text style={styles.textStyle}>Profit/Loss/Netral</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={styles.netValue}>
            <Text style={{ textAlign: "center", fontSize: 20}}>{isNaN(totalTransaksi) === false ? `Rp ${totalTransaksi}` : ''}</Text>
          </View>
        </View>
      </View>

    </SafeAreaView>
    </TouchableWithoutFeedback>
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
    fontSize: 20
  },
  tableContainer: {
    backgroundColor:'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginTop: 5,
    marginBottom: 0,
  },
  headerBuy: {
    flex: 1,
    backgroundColor: '#00C9A7',
    borderRadius: 3
  },
  headerSell: {
    flex: 1,
    backgroundColor: '#C34A36',
    borderRadius: 3
  },
  netValue: {
    flex: 1,
    borderWidth: 1,
    height: 40
  },
  totalTransaksi: {
    flex: 1
  }
})