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
            <View style={{width:"50%"}}>
              <Text>Aplikasi:</Text>
              <TextInput
                style={{margin:10, borderWidth:1}}
                placeholder="Nama Aplikasi"
              />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around', width: "70%"}}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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
  }
})
