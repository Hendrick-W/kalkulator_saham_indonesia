import React, {useState} from 'react'
import { StyleSheet, Text, View, Modal, Pressable, TextInput } from 'react-native'

const ModalBroker = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [aplikasi, setAplikasi] = useState('');
  const [sekuritas, setSekuritas] = useState('');
  const [feeBeli, setFeeBeli] = useState('');
  const [feeJual, setFeeJual] = useState('');
  const [feeBeliIntra, setFeeBeliIntra] = useState('');
  const [feeJualIntra, setFeeJualIntra] = useState('');

  return (
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
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="Sinarmas, BNI Sekuritas, dll..."
                    value={sekuritas}
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="0.01, 0.015, 0.017, dll..."
                    value={feeBeli}
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="0.02, 0.025, 0.027, dll..."
                    value={feeJual}
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="0.01, 0.015, (opsional)"
                    value={feeBeliIntra}
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="0.02, 0.025, (opsional)"
                    value={feeJualIntra}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around',}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Kembali</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonSave]}
                onPress={() => setModalVisible(!modalVisible)}
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
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Tambah Broker/Sekuritas</Text>
      </Pressable>
    </View>
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
    backgroundColor: "#4DC7A4",
    width: 180,
  },
  buttonClose: {
    backgroundColor: "#8c2020",
  },
  buttonSave: {
    backgroundColor:"#2196F3"
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
