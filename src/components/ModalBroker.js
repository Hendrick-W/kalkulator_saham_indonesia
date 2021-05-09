import React, {useState} from 'react'
import { 
  StyleSheet, Text, View, Modal, Pressable, TextInput, Alert, TouchableWithoutFeedback, Keyboard, useWindowDimensions
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addBrokerDetail } from '../config/actions'
import { isEmptyString } from '../utils/helper'

const ModalBroker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [aplikasi, setAplikasi] = useState('');
  const [sekuritas, setSekuritas] = useState('');
  const [feeBeli, setFeeBeli] = useState('');
  const [feeJual, setFeeJual] = useState('');
  const [feeBeliIntra, setFeeBeliIntra] = useState('');
  const [feeJualIntra, setFeeJualIntra] = useState('');
  const window = useWindowDimensions();

  const dispatch = useDispatch();

  const handleInputAplikasi = (value) => {
    setAplikasi(value)
  }
  const handleInputSekuritas = (value) => {
    setSekuritas(value)
  }
  const handleFeeBeli = (value) => {
    if(value.length == 1 || value == '' || (value.match(/\./g) || []).length == 1) {
      setFeeBeli(
        value.replace(/[^0-9\.]/g, '')
      )
    } else {
      if(value.match(/(?:^| )\d+(\.\d+)?(?=$| )|(?:^| )\.\d+(?=$| )/gm) || value === '') setFeeBeli(value)
    }
  }
  const handleFeeJual = (value) => {
    if(value.length == 1 || value == '' || (value.match(/\./g) || []).length == 1) {
      setFeeJual(
        value.replace(/[^0-9\.]/g, '')
      )
    } else {
      if(value.match(/(?:^| )\d+(\.\d+)?(?=$| )|(?:^| )\.\d+(?=$| )/gm) || value === '') setFeeJual(value)
    }
  }
  const handleFeeBeliIntra = (value) => {
    if(value.length == 1 || value == '' || (value.match(/\./g) || []).length == 1) {
      setFeeBeliIntra(
        value.replace(/[^0-9\.]/g, '')
      )
    } else {
      if(value.match(/(?:^| )\d+(\.\d+)?(?=$| )|(?:^| )\.\d+(?=$| )/gm) || value === '') setFeeBeliIntra(value)
    }
  }
  const handleFeeJualIntra = (value) => {
    if(value.length == 1 || value == '' || (value.match(/\./g) || []).length == 1) {
      setFeeJualIntra(
        value.replace(/[^0-9\.]/g, '')
      )
    } else {
      if(value.match(/(?:^| )\d+(\.\d+)?(?=$| )|(?:^| )\.\d+(?=$| )/gm) || value === '') setFeeJualIntra(value)
    }
  }
  const handleSimpan = () => {
    if(isEmptyString(aplikasi) || isEmptyString(feeBeli) || isEmptyString(feeJual)){
      Alert.alert(
        "Pesan",
        "Pastikan Aplikasi, Fee Beli(%), dan Fee Jual(%) telah terisi",
        [
          {
            text : "Ok",
            style: "cancel"
          }
        ]
      )
    } else {
      dispatch(addBrokerDetail({aplikasi, sekuritas, feeBeli, feeJual, feeBeliIntra, feeJualIntra}))
      handleResetModal()
      setModalVisible(!modalVisible)
    }
  }

  const handleResetModal = () => {
    setAplikasi('');
    setSekuritas('');
    setFeeBeli('');
    setFeeJual('');
    setFeeBeliIntra('');
    setFeeJualIntra('');
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Isilah beberapa bagian di bawah ini:</Text>
            <View style={{flexDirection:'row', justifyContent:"flex-start"}}>
              <View style={styles.titleInput}>
                <View>
                  <Text style={styles.textTitle}>Aplikasi*:</Text>
                </View>
                <View>
                  <Text style={styles.textTitle}>Sekuritas:</Text>
                </View>
                <View>
                  <Text style={styles.textTitle}>Fee Beli(%)*:</Text>
                </View>
                <View>
                  <Text style={styles.textTitle}>Fee Jual(%)*:</Text>
                </View>
                <View>
                  <Text style={styles.textTitle}>Fee Beli (intraday) (%):</Text>
                </View>
                <View>
                  <Text style={styles.textTitle}>Fee Jual (intraday)(%):</Text>
                </View>
              </View>
              <View style={styles.textInput}>
                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="Stockbit, POEMS, BIONS, dll..."
                    value={aplikasi}
                    onChangeText={handleInputAplikasi}
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="Sinarmas, BNI Sekuritas, dll..."
                    value={sekuritas}
                    onChangeText={handleInputSekuritas}
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="0.01, 0.015, 0.017, dll..."
                    value={feeBeli}
                    keyboardType='numeric'
                    onChangeText={handleFeeBeli}
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="0.02, 0.025, 0.027, dll..."
                    value={feeJual}
                    keyboardType='numeric'
                    onChangeText={handleFeeJual}
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="0.01, 0.015, (opsional)"
                    value={feeBeliIntra}
                    keyboardType='numeric'
                    onChangeText={handleFeeBeliIntra}
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="0.02, 0.025, (opsional)"
                    value={feeJualIntra}
                    keyboardType='numeric'
                    onChangeText={handleFeeJualIntra}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around',}}>
              <Pressable
                style={({pressed}) => [{backgroundColor: pressed ? "#ddd" : "#8c2020"},styles.button, {height: window.height * 0.07, width: window.width * 0.3}]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Kembali</Text>
              </Pressable>
              <Pressable
                style={({pressed}) => [{backgroundColor: pressed ? "#ddd" : "#2196F3"},styles.button, {height: window.height * 0.07, width: window.width * 0.3}]}
                onPress={() => {
                  handleSimpan()
                }}
              >
                <Text style={styles.textStyle}>Simpan</Text>
              </Pressable>
            </View>
            <View>
              <Text style={{color:"red", fontSize: 18}}>Ket *: wajib diisi</Text>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={({pressed}) => [{backgroundColor: pressed ? "#ddd" : "#4DC7A4"},styles.button, {height: window.height * 0.065, width: window.width * 0.45}]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Tambah Broker/Sekuritas</Text>
      </Pressable>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default ModalBroker

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalView: {
    margin: 10,
    backgroundColor: "#EBE1D7",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonOpen: {
    width: 180,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize:18,
    textAlign: "center",
    fontWeight:'bold',
  },
  titleInput: {
    justifyContent:'space-around',
    alignItems:'flex-end'
  },
  textInput: {
    justifyContent:'space-around',
    width:'60%',
  },
  textInputContainer: {
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    backgroundColor:"#fff"
  },
  textTitle: {
    fontSize: 16
  }
})
