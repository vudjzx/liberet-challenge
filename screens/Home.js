import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Days from '../components/Days';
import ChipContainer from '../components/Chips/ChipContainer';
import {COLORS} from '../constants';
import DishesSection from '../components/DishesSection';
const Home = ({navigation}) => {
  // test data
  const [currentCategory, setCurrentCategory] = useState('Beef');
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Days />
      <ChipContainer
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <DishesSection
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});
export default Home;
