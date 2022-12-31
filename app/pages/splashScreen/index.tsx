import React, { FC, useMemo, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { LogoIcon } from '../../assets/logoIcon';
import { launcher } from '../../redux/launcher/actions';
import { getStyle } from './styles';

export const SplashScreen: FC<Props> = ({ }) => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(launcher());
  }, []);

  return (
    <View style={styles.container}>
      <LogoIcon />
    </View>
  );
};
