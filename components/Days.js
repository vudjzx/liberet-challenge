import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES} from '../constants';
import Day from '../components/Day';
const Days = () => {
  const [day, setDay] = useState(28);
  const days = [
    {day: 'Dom', date :28},
    {day: 'Lun', date :29},
    {day: 'Mar', date :30},
    {day: 'Mié', date :1},
    {day: 'Jue', date :2},
    {day: 'Vie', date :3},
    {day: 'Sáb', date :4},
  ]
  
  
  return(
    <View style={styles.mainContainer}>
      {days.map((element)=>(
        <TouchableOpacity key={element.date} onPress={()=>setDay(element.date)}>
          <Day 
            color={day == element.date? COLORS.primary:COLORS.white}
            day={day}
            element={element}
            />
        </TouchableOpacity>
      ))}
    </View>
  )};
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
});
export default Days;
