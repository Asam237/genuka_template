import { createDrawerNavigator } from "@react-navigation/drawer";
import { Login } from "../screens/login/Login.screen";
import { Signup } from "../screens/signup/Signup.screen";

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Login} />
      <Drawer.Screen name="Article" component={Signup} />
    </Drawer.Navigator>
  );
};
