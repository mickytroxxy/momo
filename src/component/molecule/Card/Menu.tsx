import {BoxProps} from '@/component/atom/Box';
import {getFontSizeByWindowHeight as gsh} from '@/style/theme';
import {gpsw} from '@/utils/parseTokenStyle';
import React, {Fragment, ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Card from './Card';
import MenuContent from './MenuContent';
import VerticalSeparator from './VerticalSeparator';
import {SvgIconType} from '@/constants/icon';

export type MenuContentType = {
  icon: SvgIconType;
  label: string;
  screen?: string | any;
  onPress?: any;
  route?: string;
};
type menuType = BoxProps & {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  variant?: 'noShadow' | 'shadow';
  content: MenuContentType[];
};
const Menu = ({
  children,
  style,
  variant = 'noShadow',
  content,
  ...props
}: menuType) => {
  return (
    <Card
      variant={variant}
      style={[
        {
          // width: gpsw(cardsMenuWidth),
          paddingVertical: gsh(16),
          flexDirection: 'row',
          // width
        },
        style,
      ]}
      {...props}>
      {content.map((item, index) => [
        <MenuContent key={index} {...item} />,
        index !== content.length - 1 && (
          <VerticalSeparator key={`separator-${index}`} />
        ),
      ])}
    </Card>
  );
};

export default Menu;
