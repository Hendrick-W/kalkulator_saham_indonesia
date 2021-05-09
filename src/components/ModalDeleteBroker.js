import React, {useState} from 'react'
import { StyleSheet, Text, View, Modal, Pressable, useWindowDimensions } from 'react-native'
import { useDispatch } from 'react-redux'
import {
  deleteBroker,
} from '../config/actions'

const ModalDeleteBroker = ({visible, index, handleModalDeleteVisible}) => {
  const dispatch = useDispatch();
  const window = useWindowDimensions();

  const handleDelete = (index) => {
    dispatch(deleteBroker(index))
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          handleModalDeleteVisible();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Anda yakin ingin menghilangkan data ini?</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', width: window.width * 0.5}}>
              <Pressable
                style={({pressed}) => [{backgroundColor: pressed ? "#ddd" : "#8c2020"},styles.button, {height: window.height * 0.07, width: window.width * 0.2}]}
                onPress={() =>
                  handleModalDeleteVisible()
                }
              >
                <Text style={styles.textStyle}>Tidak</Text>
              </Pressable>
              <Pressable
                style={({pressed}) => [{backgroundColor: pressed ? "#ddd" : "#2196F3"},styles.button, {height: window.height * 0.07, width: window.width * 0.2}]}
                onPress={() =>{ 
                  handleDelete(index)
                  handleModalDeleteVisible()
                }}
              >
                <Text style={styles.textStyle}>Iya</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalDeleteBroker

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
