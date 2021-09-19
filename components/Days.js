import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES} from '../constants';

const Days = () => {
  const [day, setDay] = useState(28);
  const changeDay = id => {
    day != id ? setDay(id) : setDay(null);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Dom</Text>
        <TouchableOpacity
          onPress={() => changeDay(28)}
          style={{
            backgroundColor: day == 28 ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            padding: 4,
          }}>
          <Text style={{color: day == 28 ? COLORS.white : COLORS.black}}>
            28
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Lun</Text>
        <TouchableOpacity
          onPress={() => changeDay(29)}
          style={{
            backgroundColor: day == 29 ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            padding: 4,
          }}>
          <Text style={{color: day == 29 ? COLORS.white : COLORS.black}}>
            29
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Mar</Text>
        <TouchableOpacity
          onPress={() => changeDay(30)}
          style={{
            backgroundColor: day == 30 ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            padding: 4,
          }}>
          <Text style={{color: day == 30 ? COLORS.white : COLORS.black}}>
            30
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Mié</Text>
        <TouchableOpacity
          onPress={() => changeDay(1)}
          style={{
            backgroundColor: day == 1 ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            padding: 4,
          }}>
          <Text style={{color: day == 1 ? COLORS.white : COLORS.black}}>
            01
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Jue</Text>
        <TouchableOpacity
          onPress={() => changeDay(2)}
          style={{
            backgroundColor: day == 2 ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            padding: 4,
          }}>
          <Text style={{color: day == 2 ? COLORS.white : COLORS.black}}>
            02
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Vie</Text>
        <TouchableOpacity
          onPress={() => changeDay(3)}
          style={{
            backgroundColor: day == 3 ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            padding: 4,
          }}>
          <Text style={{color: day == 3 ? COLORS.white : COLORS.black}}>
            03
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Sáb</Text>
        <TouchableOpacity
          onPress={() => changeDay(4)}
          style={{
            backgroundColor: day == 4 ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            padding: 4,
          }}>
          <Text style={{color: day == 4 ? COLORS.white : COLORS.black}}>
            04
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  container: {
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Days;
