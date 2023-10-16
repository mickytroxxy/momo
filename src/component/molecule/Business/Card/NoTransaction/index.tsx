import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Icon, Text} from '@atom';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {fontFamily} from '@/style/theme';

const NoTransaction = () => {
  return (
    <View style={styles.flowContainer}>
        <View style={{justifyContent:'center'}}><Icon name='InfoNoIcon' color='black'/></View>
        <Text fontSize={gpsh('12')} style={{fontFamily: fontFamily('Light')}}>No transactions yet.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: gpsw('13'),
    backgroundColor:'#F2F2F2',
    paddingHorizontal:gpsh('24'),
    borderRadius:gpsh('18'),
    height:gpsh('58')
  },
  title: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
  },
  value: {
    fontFamily: fontFamily('Bold'),
    color: 'black',
    fontSize: gpsw('18'),
    lineHeight: gpsh('23.4'),
  },
});

export default NoTransaction;
