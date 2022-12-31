import React, { FC, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { deleteTask } from '../../../redux/task';
import { useDispatch } from 'react-redux';
import { getStyle } from './styles';

interface Props {
  item: any;
}

export const Item: FC<Props> = ({ item }) => {
  const styles = useMemo(() => getStyle(), []);
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const dispatch = useDispatch();
  const onDelete = (id: string) => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };

  const swipetContent = (id: string) => (
    <Pressable onPress={() => onDelete(id)} style={styles.deleteBtn}>
      <Text style={styles.deleteTitle}>Delete</Text>
    </Pressable>
  );

  return (
    <Swipeable
      renderLeftActions={() => swipetContent(item.id)}
      renderRightActions={() => swipetContent(item.id)}>
      <View style={styles.item}>
        <BouncyCheckbox
          isChecked={false}
          size={25}
          fillColor="#000000"
          unfillColor="#FFFFFF"
          iconStyle={styles.iconStyle}
          innerIconStyle={styles.iconStyle}
          onPress={(checked: boolean) => {
            setIsChecked(!checked);
          }}
        />
        <Text
          style={[
            styles.title,
            {
              opacity: isChecked ? 1 : 0.2,
              textDecorationLine: isChecked ? 'none' : 'line-through',
            },
          ]}>
          {item.name}
        </Text>
      </View>
    </Swipeable>
  );
};
