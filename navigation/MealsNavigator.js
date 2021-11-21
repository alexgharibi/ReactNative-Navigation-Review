import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import { Platform, Button } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "./../screens/FiltersScreen";

const HomStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MealsNavigator = () => {
  return (
    <HomStack.Navigator>
      <HomStack.Screen
        name="Home"
        component={CategoriesScreen}
        options={(navData) => {
          return {
            title: "Meal Categories",
            headerLeft: () => (
              <Button
                onPress={() => navData.navigation.toggleDrawer()}
                title="Info"
                color="black"
              />
            ),
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? colors.primaryColor : "white",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : colors.primaryColor,
          };
        }}
      />
      <HomStack.Screen
        name="Notifications"
        component={CategoryMealScreen}
        options={(navigationData) => {
          const { catId } = navigationData.route.params;
          const selectedcategories = CATEGORIES.find((cat) => cat.id === catId);
          return {
            title: selectedcategories.title,
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? colors.primaryColor : "white",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : colors.primaryColor,
            headerBackTitle: "You",
          };
        }}
      />
      <HomStack.Screen
        name="Settings"
        component={MealDetailScreen}
        options={(navigationData) => {
          const { mealId } = navigationData.route.params;
          const selectedcategories = MEALS.find((meal) => meal.id === mealId);
          return {
            title: selectedcategories.title,
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? colors.primaryColor : "white",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : colors.primaryColor,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="black"
              />
            ),
          };
        }}
      />
    </HomStack.Navigator>
  );
};

const FavStack = createNativeStackNavigator();

const FavoriteNavigator = () => {
  return (
    <FavStack.Navigator>
      <FavStack.Screen name="Favorites" component={FavoritesScreen} />
      <FavStack.Screen name="Settings" component={MealDetailScreen} />
    </FavStack.Navigator>
  );
};

const FilStack = createNativeStackNavigator();

const FilterNavigator = () => {
  return (
    <FilStack.Navigator>
      <FilStack.Screen
        name="Filter"
        component={FiltersScreen}
        options={(navData) => {
          return {
            title: "Fil",
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? colors.primaryColor : "white",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : colors.primaryColor,
            headerRight: () => (
              <Button
                onPress={navData.route.params.save}
                title="Save"
                color="black"
              />
            ),
          };
        }}
      />
    </FilStack.Navigator>
  );
};

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
          tabBarActiveTintColor: colors.accentColor,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavoriteNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
          tabBarActiveTintColor: colors.accentColor,
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ drawerActiveTintColor: colors.accentColor }}
    >
      <Drawer.Screen
        name="MealsFav"
        component={MealsFavTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Filters"
        component={FilterNavigator}
        options={{
          drawerLabel: "Filters!!!!",
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;

//dfdfdfdf
