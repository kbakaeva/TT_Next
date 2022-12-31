import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    input: {
      width: '100%',
      borderRadius: 8,
      height: 44,
      backgroundColor: '#FFFFFF',
      padding: 8,
      shadowColor: '#171717',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
      fontSize: 24,
      lineHeight: 28,
    },
    btn: {
      backgroundColor: '#000000',
      height: 44,
      width: '100%',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
      marginTop: 10,
      shadowColor: '#171717',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
    },
    btnText: {
      color: '#FFFFFF',
      fontSize: 24,
      lineHeight: 28,
    },
  });
  return styles;
};
