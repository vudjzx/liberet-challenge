import React, {useState, useEffect} from 'react';
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
import {FlatList} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons} from '../../constants';

const ServiceChip = ({currentCategory, setCurrentCategory}) => {
  // get categories
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => setCategories(data.categories));
  });

  const [categories, setCategories] = useState([]);
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
            {
              backgroundColor: 'rgba(52,52,52, 0.8)',
              height: '100%',
              marginRight: 0,
              marginLeft: 0,
            },
          ]}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={icons.cutlery}
                style={{width: 20, height: 20, tintColor: COLORS.primary}}
              />
              <Text style={[styles.modalText, {marginLeft: 3}]}>
                Elige una categoría
              </Text>
            </View>
            {categories.map(categorie => (
              <TouchableOpacity
                key={categorie.idCategory}
                style={[
                  styles.button,
                  styles.buttonClose,
                  {
                    marginBottom: 5,
                    backgroundColor:
                      currentCategory == categorie.strCategory
                        ? COLORS.primary
                        : COLORS.white,
                    width: 150,
                  },
                ]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setCurrentCategory(categorie.strCategory);
                }}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color:
                        currentCategory == categorie.strCategory
                          ? COLORS.white
                          : COLORS.black,
                    },
                  ]}>
                  {categorie.strCategory}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(!modalVisible)}>
        <Image
          style={{width: 25, height: 25, tintColor: COLORS.primary}}
          source={icons.cutlery}
        />
        <Text style={styles.textStyle}>{currentCategory}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
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

export default ServiceChip;
