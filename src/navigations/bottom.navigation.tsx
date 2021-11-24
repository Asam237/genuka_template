import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Items } from "../screens/items/Items.screen";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        children={() => <Items />}
        name="Home"
        options={{
          tabBarLabel: "Home",
          headerLeftLabelVisible: false,
          header: () => null,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesomeIcon
                icon={faHome}
                size={25}
                style={{ color: "red" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHome}
                size={25}
                style={{ color: "#cecece" }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        children={() => <Text> Favoris</Text>}
        name="Setting"
        options={{
          tabBarLabel: "Favoris",
          tabBarShowLabel: false,
          tabBarLabelStyle: { color: "red" },
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesomeIcon
                icon={faHeart}
                size={25}
                style={{ color: "red" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                size={25}
                style={{ color: "#cecece" }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        children={() => <Text> Favoris</Text>}
        name="Cart"
        options={{
          tabBarLabel: "Cart",
          tabBarShowLabel: false,
          tabBarLabelStyle: { color: "red" },
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesomeIcon
                icon={faShoppingCart}
                size={25}
                style={{ color: "red" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faShoppingCart}
                size={25}
                style={{ color: "#cecece" }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        children={() => <Text> Favoris</Text>}
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarShowLabel: false,
          tabBarLabelStyle: { color: "red" },
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesomeIcon
                icon={faUser}
                size={25}
                style={{ color: "red" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faUser}
                size={25}
                style={{ color: "#cecece" }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
