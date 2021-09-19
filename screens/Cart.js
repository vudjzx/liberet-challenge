import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS, icons} from '../constants';

const Cart = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={icons.cart}
        style={{width: 150, height: 150, tintColor: COLORS.primary}}
      />
      <Text style={{...FONTS.h1, color: '#4D4D4D', marginTop: 10}}>
        Shopping cart view
      </Text>
    </View>
  );
};

export default Cart;
