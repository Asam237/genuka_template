import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { ROUTES } from "../constants/routes"

const Stack = createStackNavigator()

export const AuthNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={ROUTES.welcome.name}
                    component={ROUTES.welcome.component}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name={ROUTES.home.name}
                    component={ROUTES.home.component}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name={ROUTES.login.name}
                    component={ROUTES.login.component}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name={ROUTES.signup.name}
                    component={ROUTES.signup.component}
                    options={{
                        header: () => null
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}