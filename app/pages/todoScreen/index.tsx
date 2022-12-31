import React, { FC, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IStackNavigation } from '../../types/IStackNavigation';
import { LogoIcon } from '../../assets/logoIcon';
import { List } from '../../components/List';
import { PlusIcon } from '../../assets/plusIcon';
import { getStyle } from './styles';

export const TodoScreen: FC<Props> = () => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: IStackNavigation = useNavigation();
  const onPress = () => {
    navigation.navigate('AddTodoScreen');
  };

  return (
    <View style={styles.container}>
      <LogoIcon />
      <List />
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.addIcon,
          { opacity: pressed ? 0.5 : 1 },
        ]}>
        <PlusIcon />
      </Pressable>
    </View>
  );
};
