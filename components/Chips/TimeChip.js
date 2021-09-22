import React, {useContext, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, icons} from '../../constants';
import Time from './Time';
import {AppContext} from '../../context/AppProvider';
const TimeChip = () => {
  const {currentTime} = useContext(AppContext);
  const [time, changeTime] = currentTime;
  const [modalVisible, setModalVisible] = useState(false);
  const times = ['11:00 am - 12:00 pm', '1:00 pm - 2:00 pm', '2:00 pm - 3:00 pm']


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalCenterView}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={icons.clock}
                style={{width: 20, height: 20, tintColor: COLORS.primary}}
              />
              <Text style={[styles.modalText, {marginLeft: 3}]}>
                Elige un horario de entrega
              </Text>
            </View>
            <View>
              {
                times.map((element, index) => (
                  <Time
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    element={element}
                    key={index}
                  />
                ))
              }
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(!modalVisible)}>
        <Image
          style={{width: 25, height: 25, tintColor: COLORS.primary}}
          source={icons.clock}
        />
        <Text style={styles.textStyle}>{time}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCenterView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52,52,52, 0.8)',
    height: '100%',
    marginRight: 0,
    marginLeft: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClose: {
    backgroundColor: COLORS.white,
  },
  textStyle: {
    color: COLORS.black,
    textAlign: 'center',
    marginLeft: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default TimeChip;
