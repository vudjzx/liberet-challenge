import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FONTS, images} from '../constants';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image source={images.avatar_5} style={{height: 150, width: 150}} />
      <Text style={{...FONTS.h1, color: '#4D4D4D', marginTop: 10}}>
        Profile view
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Profile;
