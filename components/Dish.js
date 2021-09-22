import React from 'react';
import { View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {COLORS, FONTS, icons, images} from '../constants';

const Dish = ({meal})=>{   
    const getMealPrice = id => {
      const idPrice = parseFloat(id);
      const price = idPrice / 1000;
      return price.toFixed(3);
    };
    const image = {uri: meal.item.strMealThumb};
    return (
      <View
        style={{
          marginRight: 5,
          marginBottom: 10,
          backgroundColor: COLORS.white,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.8,
          shadowRadius: 1.65,
          elevation: 6,
          borderRadius: 6,
        }}>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12, 
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
          }}>
          <ImageBackground
            resizeMode="cover"
            source={image}
            style={{
              width: 170,
              height: 170,
              borderRadius: 6,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: -3,
              },
              shadowOpacity: 0.58,
              shadowRadius: 10,

              elevation: 3,
            }}>
            <Image
              source={images.inner_shadow}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                bottom: 0,
                left: 0,
              }}
            />
            <View
              style={{flex: 1, justifyContent: 'space-between', padding: 10}}>
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.primary,
                  backgroundColor: COLORS.white,
                  alignSelf: 'flex-end',
                  fontWeight: 'bold',
                  lineHeight: 18,
                  padding: 1.5,
                  borderRadius: 5,
                }}>
                {meal.item.tags}
              </Text>
              <View style={{width: '100%'}}>
                <Text style={{...FONTS.body3, color: COLORS.white}}>
                  {meal.item.area}
                </Text>
                <Text
                  style={{
                    color: COLORS.primary,
                    ...FONTS.body3,
                    fontWeight: 'bold',
                  }}>
                  {meal.item.strMeal}
                </Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                backgroundColor: 'transparent',
                height: 10,
                width: '100%',
                shadowOffset: {
                  width: 0,
                  height: -29,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 10,
              }}></View>
          </ImageBackground>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <Image
            source={icons.clock}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
            }}
          />
          <Text>${getMealPrice(meal.item.idMeal)},00 MXN</Text>
        </View>
      </View>
    )
}

export default Dish;
