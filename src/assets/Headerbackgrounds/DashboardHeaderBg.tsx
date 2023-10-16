import {headerDashboardHeader} from '@/style-dictionary-dist/momoStyle';
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
  const gradientColors = getColorFromGradient(headerDashboardHeader);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={320}
      height={165}
      fill="none"
      {...props}>
      <Path
        fill="url(#a)"
        d="M0 0h320v149.051l-5.203 1.013a810.002 810.002 0 0 1-307.663.359L0 149.051V0Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={160}
          x2={160}
          y1={0}
          y2={114.69}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={gradientColors[0]} />
          <Stop offset={1} stopColor={gradientColors[1]} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export default SvgComponent;
