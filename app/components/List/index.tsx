import React, { FC, useMemo } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Item } from './Item';
import { getStyle } from './styles';

export const List: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const todos = useSelector((state: any) => state.tasks);

  return (
    <FlatList
      style={styles.container}
      data={todos}
      renderItem={({ item }) => <Item {...{ item }} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.itemStyle}
    />
  );
};
