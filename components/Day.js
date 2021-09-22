import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';
const Day = ({element, color}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>{element.day}</Text>
      <View
        style={{
          backgroundColor: color,
          borderRadius: SIZES.radius,
          padding: 4,
        }}>
        <Text style={{color: color == COLORS.primary ? COLORS.white : COLORS.black}}>
          {element.date < 5 ? `0${element.date}` : element.date}
        </Text>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default Day;
