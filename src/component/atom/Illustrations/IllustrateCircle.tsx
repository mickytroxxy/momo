import {IllustrateType} from '@/constants/illustration';
import {gpsh} from '@/utils/parseTokenStyle';
import React from 'react';
import {View} from 'react-native';
import Illustration1 from './Illustrate1';

type IllustrateCircleType = {
  //   children: ReactNode;
  name: IllustrateType;
  w: number;
  h: number;
};
const IllustrateCircle = ({name, w, h}: IllustrateCircleType) => {
  return (
    <View
      style={{
        position: 'relative',
        width: gpsh('230'),
        height: gpsh('230'),
        // backgroundColor: 'green',
        borderRadius: gpsh('115'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 2,
      }}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#F2F2F2',
          borderRadius: gpsh('127'),
          width: gpsh('216'),
          height: gpsh('216'),
          // zIndex: 100
        }}
      />
      <Illustration1 {...{w, h, name}} />
      {/* {children} */}
    </View>
  );
};

export default IllustrateCircle;
