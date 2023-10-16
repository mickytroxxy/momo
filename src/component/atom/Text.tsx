import {createText} from '@shopify/restyle';
import {Theme} from '../../typings/globalTheme';
const Text = createText<Theme>();
export type TextProps = React.ComponentProps<typeof Text>;

// export default Text;

export default ({children, ...rest}: TextProps) => {
  return (
    <Text allowFontScaling={false} {...rest}>
      {children}
    </Text>
  );
};
