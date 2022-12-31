import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: 28,
      lineHeight: 32,
      fontWeight: '500',
      color: '#999999',
      marginLeft: 10,
    },
  });
  return styles;
};
