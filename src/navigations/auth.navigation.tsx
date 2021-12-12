import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "../constants/routes";
import { COLORS } from "../assets/themes/globla.theme";
import { LANGUAGES } from "../constants/languages";

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.welcome.name}
          component={ROUTES.welcome.component}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name={ROUTES.home.name}
          component={ROUTES.home.component}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name={ROUTES.detail.name}
          component={ROUTES.detail.component}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name={ROUTES.login.name}
          component={ROUTES.login.component}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name={ROUTES.signup.name}
          component={ROUTES.signup.component}
          options={{
            headerTitle: LANGUAGES.login.signupTitle,
            headerTitleStyle: {
              fontSize: 14,
            },
            headerStyle: {
              backgroundColor: COLORS.primaryColor,
            },
            headerTintColor: COLORS.secondaryColor,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
