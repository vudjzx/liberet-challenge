
import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, icons} from '../../constants';

const CategorieList = ({categories,modalVisible,setModalVisible,currentCategory,setCurrentCategory}) =>{

  return(
    categories.map(categorie => (
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
    ))
  )
 
  
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: COLORS.white,
  },
  textStyle: {
    color: COLORS.black,
    textAlign: 'center',
    marginLeft: 5,
  },
   
})

export default CategorieList;
