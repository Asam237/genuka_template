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
            </Stack.Navigator>
        </NavigationContainer>
    )
}