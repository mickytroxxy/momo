import {inputDefault} from '@/style-dictionary-dist/momoStyle';
import {
  getFontSizeByWindowHeight,
  getFontSizeByWindowWidth,
} from '@/style/theme';
import { gpmsh } from '@/utils/parseTokenStyle';
import {StyleSheet} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: getFontSizeByWindowWidth(15),
    backgroundColor: '#00000000',
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    // minHeight: getFontSizeByWindowHeight(56),
    fontFamily: 'MTNBrighterSans-Regular',
    fontSize: getFontSizeByWindowHeight(16),
    paddingVertical: 0,
    paddingHorizontal: 0,
    zIndex: 10,
  },
  img: {
    height: 25,
    width: 25,
    alignSelf: 'center',
  },
  toggleButton: {
    zIndex: 11,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: "red",
    paddingVertical: 7,
    // paddingHorizontal: 10
    paddingLeft: 10,
  },
  countdown: {
    position: 'absolute',
    right: 11,
    bottom: 0,
    color: '#49658c',
    fontSize: 10,
  },
});
