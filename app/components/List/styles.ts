import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginTop: 20,
    },
    itemStyle: {
      width: '100%',
      shadowColor: '#171717',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 8,
    },
  });
  return styles;
};
