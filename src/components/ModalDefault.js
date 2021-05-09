import React, {useState} from 'react'
import { StyleSheet, Text, View, Modal, Pressable, useWindowDimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
  defaultsBrokerDetail,
} from '../config/actions'

const ModalDefault = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const window = useWindowDimensions();

  const defaultBrokerDetail = () => {
    dispatch(defaultsBrokerDetail())
  }

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
            <Text style={styles.modalText}>Anda yakin ingin list broker Anda kembali menjadi list broker dari developer (yang hanya ada 6)?</Text>
            <View style={{flexDirection:'row', justifyContent:'space-around', width: "70%"}}>
              <Pressable
                style={({pressed}) => [{backgroundColor: pressed ? "#ddd" : "#8c2020"},styles.button, {height: window.height * 0.07, width: window.width * 0.2}]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Tidak</Text>
              </Pressable>
              <Pressable
                style={({pressed}) => [{backgroundColor: pressed ? "#ddd" : "#2196F3"},styles.button, {height: window.height * 0.07, width: window.width * 0.2}]}
                onPress={() =>{ 
                  defaultBrokerDetail()
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle}>Iya</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={({pressed}) => [{backgroundColor: pressed ? "#ddd" : "#8c2020"},styles.button, {height: window.height * 0.065, width: window.width * 0.45}]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Reset</Text>
      </Pressable>
    </View>
  )
}

export default ModalDefault

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
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
    justifyContent:'center',
    alignItems:'center',
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
