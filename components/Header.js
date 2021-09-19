import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from '../constants';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        paddingTop: 10,
        ...styles.shadow,
        backgroundColor: COLORS.white,
        marginBottom: 2,
      }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.pin}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: '#F49897',
          }}
        />
      </TouchableOpacity>
      <View
        style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
        <View
          style={{
            width: '70%',
            height: '100%',
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius,
          }}>
          <Text style={{...FONTS.h3, color: COLORS.darkgray}}>
            Select location...
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.list}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
export default Header;
