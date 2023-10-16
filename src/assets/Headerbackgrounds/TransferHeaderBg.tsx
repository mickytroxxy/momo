import {globalMoMoGradient} from '@/style-dictionary-dist/momoStyle';
import getColorFromGradient from '@/utils/getColorFromGradient';
import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => {
  const gradientColors = getColorFromGradient(globalMoMoGradient);
  console.log('gradientColors', gradientColors);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={320}
      height={114}
      fill="none"
      {...props}>
      <Path
        fill="url(#a)"
        d="M0 0h320v99.368l-55.413 7.19a809.976 809.976 0 0 1-207.195.164L0 99.368V0Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={160}
          x2={160}
          y1={-70.667}
          y2={120}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={gradientColors[0]} />
          <Stop offset={0.49} stopColor={gradientColors[1]} />
          <Stop offset={1} stopColor={gradientColors[2]} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export default SvgComponent;
