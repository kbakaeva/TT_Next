import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const PlusIcon: FC<{}> = () => {
  return (
    <Svg width={56} height={56} fill="none">
      <Path
        d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28Zm-2-38a2 2 0 0 1 4 0v8h8a2 2 0 0 1 0 4h-8v8a2 2 0 0 1-4 0v-8h-8a2 2 0 0 1 0-4h8v-8Z"
        fill="#222F3E"
      />
    </Svg>
  );
};
