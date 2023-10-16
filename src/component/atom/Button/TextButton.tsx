import React from 'react';
import TouchableOpacity, {TouchableOpacityProps} from '../TouchableOpacity';
import Text from '../Text';
import {StyleProp, TextStyle} from 'react-native';

type TextButtonType = TouchableOpacityProps & {
  onPress: () => void;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
};
const TextButton = ({onPress, title, titleStyle, ...props}: TextButtonType) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Text style={[titleStyle]} color={'momoBlue'} variant={'regular12'}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
