import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen015375Navigator from '../features/BlankScreen015375/navigator';
import BlankScreen115374Navigator from '../features/BlankScreen115374/navigator';
import BlankScreen015371Navigator from '../features/BlankScreen015371/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen015375: { screen: BlankScreen015375Navigator },
BlankScreen115374: { screen: BlankScreen115374Navigator },
BlankScreen015371: { screen: BlankScreen015371Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
