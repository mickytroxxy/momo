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
    // xmlns="http://www.w3.org/2000/svg"
    width={320}
    height={229}
    fill="none"
    {...props}>
    <Path
      fill="url(#a)"
      d="M0 0h320v207.016a613.063 613.063 0 0 1-318.134.498L0 207.016V0Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={160}
        x2={160}
        y1={-147.222}
        y2={250}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#4D849C" />
        <Stop offset={0.49} stopColor="#004F71" />
        <Stop offset={1} stopColor="#003654" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
