import React, {useState} from 'react'
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import {
  deleteBroker,
} from '../config/actions'

const ModalDeleteBroker = ({visible, index, handleModalDeleteVisible}) => {
  const dispatch = useDispatch();

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
            <View style={{flexDirection:'row', justifyContent:'space-around', width: "70%"}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() =>
                  handleModalDeleteVisible()
                }
              >
                <Text style={styles.textStyle}>Tidak</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
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
    height:50,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonOpen: {
    backgroundColor: "#8c2020",
    width: 180,
  },
  buttonClose: {
    backgroundColor: "#8c2020",
    width:70,
  },
  buttonDelete: {
    backgroundColor:"#2196F3",
    width:70,
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
