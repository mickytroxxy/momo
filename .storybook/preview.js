import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import { View } from 'react-native';

export const decorators = [
  withBackgrounds,
  (Story) => (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <Story />
    </View>
  ),
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    // default: 'plain',
    default: 'hotpink',
    values: [
      {name: 'plain', value: 'white'},
      {name: 'figma', value: '#E8E8E8'},
      {name: 'warm', value: '#004F71'},
      {name: 'cool', value: 'deepskyblue'},
      {name: 'warm', value: 'hotpink'},
    ],
  },
};
