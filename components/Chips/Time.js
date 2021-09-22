import React, {useContext} from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import {AppContext} from '../../context/AppProvider';
import {COLORS} from '../../constants';
const Time = ({modalVisible, setModalVisible, element}) => {

  const {currentTime} = useContext(AppContext);
  const [time, changeTime] = currentTime;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles.buttonClose,
        {
          marginBottom: 5,
          backgroundColor:
            time == element
              ? COLORS.primary
              : COLORS.white,
        },
      ]}
      onPress={() => {
        setModalVisible(!modalVisible);
        changeTime(element);
      }}>
      <Text
        style={[
          styles.textStyle,
          {
            color:
              time == element
                ? COLORS.white
                : COLORS.black,
          },
        ]}>
        {element}
      </Text>
    </TouchableOpacity>
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
export default Time;
