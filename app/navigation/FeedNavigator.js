import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    mode='modal'
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name='Listings' component={ListingsScreen} />
    <Stack.Screen
      name='ListingDetails'
      options={{ headerShown: true }}
      component={ListingDetailScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
