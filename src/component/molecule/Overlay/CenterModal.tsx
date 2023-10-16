import {Box, Button, Icon, Text, TouchableOpacity} from '@atom';
import {getFontSizeByWindowHeight as gsh} from '@/style/theme';

type CenterModalType = {
  title: string;
  body: string;
  close?: () => void;
  left?: {
    title: string;
    onPress: () => void;
  };
  right?: {
    title: string;
    onPress: () => void;
  };
};

const CenterModal = ({title, body, left, right, close}: CenterModalType) => {
  return (
    <Box px={'hm'}>
      <Box px={'hm'} gap={'vm'} py={'vm'} borderRadius={gsh(9)} bg={'white'}>
        {/* Header */}
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text variant={'medium18'}>{title}</Text>
          <Icon onPress={close} name="HeaderXIcon" size={16} color="black" />
        </Box>
        {/* Body */}
        <Text variant={'regular16'} lineHeight={gsh(20.8)} color={'grey'}>
          {body}
        </Text>
        {/* Footer */}
        <Box justifyContent={'space-between'} flexDirection={'row'} gap={'hsm'}>
          {left && (
            <Button onPress={left.onPress} flex={1} label={left.title} />
          )}
          {right && (
            <Button
              onPress={right.onPress}
              flex={1}
              variant="secondary"
              label={right.title}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CenterModal;
