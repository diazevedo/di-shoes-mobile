import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#1e3799' },
        headerTintColor: '#FFF',
        headerBackTitleVisible: false, //it does not show the text "back"
        headerTitleAlign: 'center', //It is for ANDROID that puts the text in the left
      },
      initialRouteName: 'Home',
    }
  )
);

export default Routes;
