import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
    addIcon: {
      position: 'absolute',
      bottom: 20,
      right: 30,
    },
  });
  return styles;
};
