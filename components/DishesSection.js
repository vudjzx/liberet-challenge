import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Dish from '../components/Dish';
import {AppContext} from '../context/AppProvider';
const DishesSection = () => {
  const [loading, setLoading] = useState(false);
  const [mealsInfo, setMealsInfo] = useState([]);
  const {category} = useContext(AppContext);
  const [stateCategory, setStateCategory] = category;
  // get all meal info
  useEffect(() => {
    setMealsInfo([]);
    setLoading(true);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${stateCategory}`,
    )
      .then(res => res.json())
      .then(data => {
        data.meals.map(meal => {
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`,
          )
            .then(res => res.json())
            .then(data => {
              let area = data.meals[0].strArea;
              let tags = data.meals[0].strTags
                ? data.meals[0].strTags.split(',')[0]
                : 'Food';
              let strMeal = data.meals[0].strMeal;
              let strMealThumb = data.meals[0].strMealThumb;
              let idMeal = data.meals[0].idMeal;
              let object = {
                area: area,
                tags: tags,
                strMeal: strMeal,
                strMealThumb: strMealThumb,
                idMeal: idMeal,
              };

              setMealsInfo(ch => [...ch, object]);
            });
        });
      })
      .finally(() => setLoading(false));
  }, [stateCategory]);

  const renderDish = meal => {
    return <Dish meal={meal} />
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 180,
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={mealsInfo}
        renderItem={meal => renderDish(meal)}
        keyExtractor={meal => `${meal.idMeal}`}
        numColumns={2}
      />
    </View>
  );
};
export default DishesSection;
