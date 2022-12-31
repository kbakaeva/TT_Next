import React, { FC, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AddComponent } from '../../components/AddComponent';
import { IStackNavigation } from '../../types/IStackNavigation';
import { getStyle } from './styles';
import { BackIcon } from '../../assets/backIcon';

export const AddTodoScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: IStackNavigation = useNavigation();
  const [todo, setTodo] = useState<string>('');
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.header,
        ]}>
        <BackIcon />
        <Text style={styles.headerTitle}>Вернуться</Text>
      </Pressable>
      <AddComponent {...{ todo, setTodo }} />
    </View>
  );
};
