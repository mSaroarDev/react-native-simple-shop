import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  DetailsScreen: { productId: number };
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    DetailsScreen: DetailsScreen,
  }
});

const Navigation = createStaticNavigation(RootStack)

function App() {
  return <Navigation />;
}

export default App;
