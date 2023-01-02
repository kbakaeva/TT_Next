import React, { FC } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { TodoScreen } from '../pages/todoScreen/index';
import { AddTodoScreen } from '../pages/addTodo';
import { SplashScreen } from '../pages/splashScreen';

const Stack = createStackNavigator();

export const StackNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Todo"
      screenOptions={() => ({
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.ScaleFromCenterAndroid,
      })}>
      <Stack.Screen
        name="SplashScreen"
        options={{
          // transitionSpec: {
          //   open: { animation: 'timing', config: { duration: 400 } },
          //   close: { animation: 'timing', config: { duration: 400 } },
          // },
          cardStyle: { backgroundColor: 'white' },
        }}
        component={SplashScreen}
      />
      <Stack.Screen
        name="TodoScreen"
        options={{
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 400 } },
            close: { animation: 'timing', config: { duration: 400 } },
          },
          cardStyle: { backgroundColor: 'white' },
        }}
        component={TodoScreen}
      />
      <Stack.Screen
        name="AddTodoScreen"
        options={{
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 400 } },
            close: { animation: 'timing', config: { duration: 400 } },
          },
          cardStyle: { backgroundColor: 'white' },
        }}
        component={AddTodoScreen}
      />
    </Stack.Navigator>
  );
};
