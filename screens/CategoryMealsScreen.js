import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { MEALS } from "./../data/dummy-data";

const CategoryMealScreen = (props) => {
  const { catId } = props.route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <MealList listData={displayedMeals} navigation={props.navigation} />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.push("Settings")}
      />
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
      <Button title="Go Back" onPress={() => props.navigation.pop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
