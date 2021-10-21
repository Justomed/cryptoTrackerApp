import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinsStack';
import FavoritesStack from './src/components/favorites/FavoritesStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from './src/res/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{headerShown: false}}
          tabBarOptions={{
            tintColor: '#fefefe',
            tabStyle: {
              backgroundColor: Colors.blackPearl,
            },
            /*           inactiveBackgroundColor: Colors.blackPearl,
          activeBackgroundColor: Colors.blackPearl,*/
            showLabel: false,
          }}>
          <Tabs.Screen
            name="Coins"
            component={CoinsStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image
                  style={{tintColor: color, width: size, height: size}}
                  source={require('./src/assets/bank.png')}
                />
              ),
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="Favorites"
            component={FavoritesStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image
                  style={{tintColor: color, width: size, height: size}}
                  source={require('./src/assets/star.png')}
                />
              ),
              headerShown: false,
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
