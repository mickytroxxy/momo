import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity} from 'react-native';
import {Box, Icon, Text} from '../../atom';
// import { Box, Text } from '@/component/atom';
import icon from '@/constants/icon';
import {
  controlsCheckboxInactive,
  controlsCheckboxSelected,
  controlsCheckboxUnchecked,
} from '@/style-dictionary-dist/momoStyle';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';

interface CheckboxProps {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (newValue: boolean) => void;
  gap?: number;
  labelStyle?: StyleProp<TextStyle>;
}
const CheckBox = ({
  label,
  disabled,
  checked,
  onChange = () => {},
  gap = 16,
  labelStyle,
}: CheckboxProps) => {
  let Ikon;
  console.log('checked', checked);
  switch (checked) {
    case true:
      Ikon = disabled ? (
        <Icon
          name="DisabledcheckIcon"
          size={20}
          color={controlsCheckboxUnchecked}
        />
      ) : (
        <Icon name="CheckIcon" size={20} color={controlsCheckboxSelected} />
      );
      break;
    case false:
      Ikon = disabled ? (
        <Icon
          name="DisabledemptycheckIcon"
          size={20}
          color={controlsCheckboxInactive}
        />
      ) : (
        <Icon
          name="EmptyCheckIcon"
          size={20}
          color={controlsCheckboxUnchecked}
        />
      );
      break;

    default:
      break;
  }
  return (
    // <BorderlessButton
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        if (disabled) return;
        onChange(checked);
      }}
      style={{justifyContent: 'center'}}>
      <Box
        flexDirection="row"
        gap={'hsm'}
        alignItems={'center'}
        style={[
          !!label && {
            gap: gsw(gap),
          },
        ]}>
        {Ikon}
        <Text
          fontSize={gsw(16)}
          lineHeight={gsh(24)}
          style={[
            {
              fontFamily: 'MTNBrighterSans-Regular',
              color: '#5F5F5F',
            },
            labelStyle,
          ]}>
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default CheckBox;

{
  /* <Box
          height={20}
          width={20}
          marginRight="s"
          alignItems="center"
          justifyContent="center"
          borderRadius={4}
          borderWidth={checked ? 0 : 2}
          style={{
            borderColor: disabled
              ? controlsCheckboxInactive
              : controlsCheckboxUnchecked,
            backgroundColor: checked
              ? disabled
                ? controlsCheckboxUnchecked
                : controlsCheckboxSelected
              : 'white',
          }}>
          {checked && <Icon name="check" color="white" size={16} />}
        </Box> */
}
