import {DarkStatusBar} from '@/component/molecule/StausBar';
import {Box, Button, Icon, Illustration, Text, TouchableOpacity} from '@atom';
import {CurvedHeader} from '@molecule';

type StatusActionType = {
  title: string;
  subtitle: string;
  share: boolean;
  onPress: () => void;
};

const StatusAction = ({title, subtitle, share, onPress}: StatusActionType) => {
  return (
    <Box flex={1} pb={'vxl'}>
      <DarkStatusBar backgroundColor={'#135b7b'} />
      <CurvedHeader name="InfoHeaderBg" h={250} />
      <Box
        style={{
          marginTop: '-65%',
        }}
        alignItems={'center'}>
        <Illustration name="SuccessfulSVG" />
      </Box>
      <Box px={'hm'} flex={1}>
        <Text
          variant={'medium21'}
          mb={'vsm'}
          textAlign={'center'}
          color={'momoBlue'}>
          {title}
        </Text>
        <Text variant={'regular16'} textAlign={'center'} color={'grey'}>
          {subtitle}
        </Text>
        <TouchableOpacity
          // onPress={() => navigate('transferscreen')}
          flexDirection={'row'}
          mt={'vm'}
          gap={'hxxs'}
          alignSelf={'center'}
          alignItems={'center'}>
          {share && <Icon name="ShareIcon" size={20} />}
          {/* <Text variant={'regular16'}>Share</Text> */}
        </TouchableOpacity>
        <Box
          style={{
            marginTop: 33,
          }}>
          <Button onPress={onPress} label="done" />
        </Box>
      </Box>
    </Box>
  );
};

export default StatusAction;
