import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      height: 44,
      marginVertical: 5,
      backgroundColor: 'white',
      padding: 8,
      width: '98%',
      shadowColor: '#171717',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
    },
    title: {
      marginLeft: 10,
      fontSize: 24,
      lineHeight: 28,
      color: '#222F3E',
    },
    delete: {
      fontSize: 24,
      color: 'red',
    },
    iconStyle: {
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 8,
    },
    deleteBtn: {
      height: '100%',
      justifyContent: 'center',
    },
    deleteTitle: {
      color: '#F00F00',
      fontSize: 18,
      lineHeight: 22,
      fontWeight: '600',
    },
  });
  return styles;
};
