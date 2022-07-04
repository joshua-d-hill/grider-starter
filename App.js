import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import ComponentsScreen from './src/screens/ComponentsScreen'
import TrialScreen from './src/screens/TrialScreen'
import ListScreen from './src/screens/ListScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Trial: TrialScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "Adventurer's Handbook",
    },
  }
);

export default createAppContainer(navigator);
