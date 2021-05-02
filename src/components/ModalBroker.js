import React, {useState} from 'react'
import { StyleSheet, Text, View, Modal, Pressable, TextInput } from 'react-native'

const ModalBroker = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
                  <Text>Aplikasi:</Text>
                </View>
                <View>
                  <Text>Sekuritas:</Text>
                </View>
                <View>
                  <Text>Fee Beli:</Text>
                </View>
                <View>
                  <Text>Fee Jual:</Text>
                </View>
                <View>
                  <Text>Fee Beli (intraday):</Text>
                </View>
                <View>
                  <Text>Fee Jual (intraday):</Text>
                </View>
              </View>
              <View style={styles.textInput}>
                <View style={styles.styleInput}>
                  <TextInput
                    placeholder="Test"
                  />
                </View>
                <View style={styles.styleInput}>
                  <TextInput
                    placeholder="Test"
                  />
                </View>
                <View style={styles.styleInput}>
                  <TextInput
                    placeholder="Test"
                  />
                </View>
                <View style={styles.styleInput}>
                  <TextInput
                    placeholder="Test"
                  />
                </View>
                <View style={styles.styleInput}>
                  <TextInput
                    placeholder="Test"
                  />
                </View>
                <View style={styles.styleInput}>
                  <TextInput
                    placeholder="Test"
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
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
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
    textAlign: "center"
  },
  titleInput: {
    justifyContent:'space-around',
    alignItems:'flex-end'
  },
  textInput: {
    justifyContent:'space-around',
    width:'60%',
  },
  styleInput: {
    borderWidth:1,
    borderRadius:20,
    margin: 5,
  }
})
