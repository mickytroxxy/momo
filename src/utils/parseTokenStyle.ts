import {
  getFontSizeByWindowHeight,
  getFontSizeByWindowWidth,
  moderateScale,
  moderateVerticalScale,
} from '@/style/theme';

export const gpsw = (size: string | number) => {
  const parsedSize = typeof size === 'string' ? parseInt(size) : size;
  return getFontSizeByWindowWidth(parsedSize);
};

export const gpsh = (size: string | number) => {
  const parsedSize = typeof size === 'string' ? parseInt(size) : size;
  return getFontSizeByWindowHeight(parsedSize);
};

export const gpmsw = (size: string | number) => {
  const parsedSize = typeof size === 'string' ? parseInt(size) : size;
  return moderateScale(parsedSize);
};

export const gpmsh = (size: string | number) => {
  const parsedSize = typeof size === 'string' ? parseInt(size) : size;
  return moderateVerticalScale(parsedSize);
};

// export default {
//   gsw,
//   gsh,
// };
