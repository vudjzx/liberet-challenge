import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, icons} from '../../constants';

const TimeChip = () => {
  const [time, setTime] = useState('11:00 am - 12:00 pm');
  const changeTime = time => {
    setTime(time);
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={[
            styles.centeredView,
            {backgroundColor: 'rgba(52,52,52, 0.8)', height: '100%'},
          ]}>
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
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonClose,
                  {
                    marginBottom: 5,
                    backgroundColor:
                      time == '11:00 am - 12:00 pm'
                        ? COLORS.primary
                        : COLORS.white,
                  },
                ]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  changeTime('11:00 am - 12:00 pm');
                }}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color:
                        time == '11:00 am - 12:00 pm'
                          ? COLORS.white
                          : COLORS.black,
                    },
                  ]}>
                  11:00 am - 12:00 am
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonClose,
                  {
                    marginBottom: 5,
                    backgroundColor:
                      time == '1:00 pm - 2:00 pm'
                        ? COLORS.primary
                        : COLORS.white,
                  },
                ]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  changeTime('1:00 pm - 2:00 pm');
                }}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color:
                        time == '1:00 pm - 2:00 pm'
                          ? COLORS.white
                          : COLORS.black,
                    },
                  ]}>
                  1:00 pm - 2:00 pm
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonClose,
                  {
                    marginBottom: 5,
                    backgroundColor:
                      time == '2:00 pm - 3:00 pm'
                        ? COLORS.primary
                        : COLORS.white,
                  },
                ]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  changeTime('2:00 pm - 3:00 pm');
                }}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color:
                        time == '2:00 pm - 3:00 pm'
                          ? COLORS.white
                          : COLORS.black,
                    },
                  ]}>
                  2:00 pm - 3:00 pm
                </Text>
              </TouchableOpacity>
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
