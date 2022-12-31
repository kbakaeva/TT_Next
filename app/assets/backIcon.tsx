import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const BackIcon: FC<{}> = () => {
  return (
    <Svg width={22} height={24} fill="none">
      <Path
        d="M21.74 10.5H5.203l7.595-8.385L10.869 0 0 12l10.87 12 1.915-2.115L5.204 13.5h16.535v-3Z"
        fill="#222F3E"
      />
    </Svg>
  );
};
