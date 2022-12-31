import React, { FC, useMemo } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/task';
import { getStyle } from './styles';

interface Props {
  todo: string;
  setTodo: (todo: string) => void;
}

export const AddComponent: FC<Props> = ({ todo, setTodo }) => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useDispatch();

  const onSubmitTask = () => {
    // let counter = 1;
    if (todo.trim().length === 0) {
      Alert.alert('Добавьте название задачи');
      setTodo('');
      return;
    }

    dispatch(
      addTask({
        // id: counter,
        task: todo,
      }),
    );
    setTodo('');
    // counter = counter + 1;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Текст новой задачи"
        onChangeText={setTodo}
        value={todo}
      />
      <Pressable
        style={[styles.btn, { opacity: todo ? 1 : 0.6 }]}
        onPress={onSubmitTask}>
        <Text style={styles.btnText}>Добавить</Text>
      </Pressable>
    </View>
  );
};
