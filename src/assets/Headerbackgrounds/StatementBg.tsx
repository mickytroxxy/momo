import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={320}
    height={211}
    fill="none"
    {...props}>
    <Path
      fill="url(#a)"
      d="M0 0h320v191.283a660.19 660.19 0 0 1-318.115.465L0 191.283V0Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={160}
        x2={160}
        y1={-136.033}
        y2={231}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#4D849C" />
        <Stop offset={0.49} stopColor="#004F71" />
        <Stop offset={1} stopColor="#003654" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
