import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen 
        name='splash'
        component={Splash}
      />
      <Screen 
        name='home'
        component={Home}
      />
    </Navigator>
  );
}