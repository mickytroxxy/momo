import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={320} height={250} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Circle cx={159.5} cy={-120.5} r={388.5} fill="url(#b)" />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={-229}
        x2={-229}
        y1={-84}
        y2={250}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#004F71" />
        <Stop offset={1} stopColor="#003654" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h320v268H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
