import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import TimeChip from './TimeChip';
import ServiceChip from './ServiceChip';
import ChipPlatillos from './ChipPlatillos';

const ChipContainer = ({currentCategory, setCurrentCategory}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{minHeight: 65}}>
      <TimeChip />
      <ServiceChip
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <ChipPlatillos />
    </ScrollView>
  );
};

export default ChipContainer;
