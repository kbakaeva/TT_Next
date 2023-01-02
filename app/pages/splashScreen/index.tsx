import { useNavigation } from '@react-navigation/native';
import React, { FC, useMemo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { IStackNavigation } from '../../types/IStackNavigation';
import { LogoIcon } from '../../assets/logoIcon';
import { getStyle } from './styles';

export const SplashScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: IStackNavigation = useNavigation();

  const onTodo = () => {
    return navigation.navigate('TodoScreen');
  };
  setTimeout(onTodo, 2000);

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <LogoIcon />
      </View>
      <ActivityIndicator size={'large'} color={'#FF003C'} />
    </View>
  );
};
