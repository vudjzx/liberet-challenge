
import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../constants';
import {AppContext} from '../../context/AppProvider';
const CategorieList = ({categories, modalVisible, setModalVisible}) => {

  const {category} = useContext(AppContext);
  const [stateCategory, setStateCategory] = category;
  return (
    categories.map(categorie => (
      <TouchableOpacity
        key={categorie.idCategory}
        style={[
          styles.button,
          styles.buttonClose,
          {
            marginBottom: 5,
            backgroundColor:
              stateCategory == categorie.strCategory
                ? COLORS.primary
                : COLORS.white,
            width: 150,
          },
        ]}
        onPress={() => {
          setModalVisible(!modalVisible);
          setStateCategory(categorie.strCategory);
        }}>
        <Text
          style={[
            styles.textStyle,
            {
              color:
                stateCategory == categorie.strCategory
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
