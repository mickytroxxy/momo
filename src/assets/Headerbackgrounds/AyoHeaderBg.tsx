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
        y1={-106}
        y2={180}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#4D849C" />
        <Stop offset={0.49} stopColor="#004F71" />
        <Stop offset={1} stopColor="#003654" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
