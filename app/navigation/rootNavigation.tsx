import React, { FC } from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { StatusBar, View } from 'react-native';
import { StackNavigator } from './stackNavigation';

const navigationRef = createNavigationContainerRef();

export const RootNavigation: FC = () => {
  return (
    <View style={{ flex: 1 }} testID={'RootNavigation'}>
      <StatusBar />
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </View>
  );
};
