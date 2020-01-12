import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './components/Header';
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
        header: Header,
        // cardStyle: {
        //   backgroundColor: '#000',
        // },
        // headerStyle: { backgroundColor: '#000' },
        // headerLeft: Header,
        // headerTintColor: '#FFF',
        // headerBackTitleVisible: false, //it does not show the text "back"
        // headerTitleAlign: 'center', //It is for ANDROID that puts the text in the left
        // headerTitle: () => false,
      },
    }
  )
);

export default Routes;
