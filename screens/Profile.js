import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS, images, SIZES} from '../constants';
import {AppContext} from '../context/AppProvider';

const Profile = () => {

  const {currentDay, category, currentTime} = useContext(AppContext);
  const [stateDay] = currentDay;
  const [stateCategory] = category;
  const [stateTime] = currentTime;
  return (
    <View style={styles.container}>
      <Text style={{...FONTS.h1, color: "#4D4D4D"}}>Hello, John Doe</Text>
      <View style={styles.imageContainer}>
        <Image source={images.avatar_5} style={{height: 150, width: 150}} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          Day selected: {stateDay < 5 ? `0${stateDay}` : stateDay}
        </Text>
        <Text style={styles.textStyle}>
          Time selected: {stateTime}
        </Text>
        <Text style={styles.textStyle}>
          Category selected: {stateCategory}
        </Text>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    ...FONTS.h2,
    color: '#4D4D4D',
  },
  textContainer: {
    borderRadius: 15,
    alignItems: 'flex-start',
    padding: 10
  },
  imageContainer: {
    borderRadius: 100 / 2,
    height: 180,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
});
export default Profile;
