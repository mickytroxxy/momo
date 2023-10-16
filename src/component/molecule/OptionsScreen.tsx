import {IllustrationImages} from '@/constants/images';
import {getFontSizeByWindowWidth} from '@/style/theme';
import {useNavigation} from '@react-navigation/native';
import Box from '../atom/Box';
import Illustration from '../atom/Illustrations';
import QuickAction from './Card/QuickAction';

export type OptionsType = {
  id: number;
  name: string;
  Icon: any;
  route?: string;
  onPress?: Function;
};

type OptionsScreenType = {
  options: OptionsType[];
  IllustrationType: 'CallCenter' | 'Referral' | 'Settings';
};

export default function OptionsScreen({
  options,
  IllustrationType,
}: OptionsScreenType) {
  const navigation = useNavigation();

  const {CallCenter, ProfileAccess} = IllustrationImages;

  const _renderAction = (item: OptionsType) => {
    const {name, Icon, route, id, onPress} = item;
    return (
      <Box elevation={0.2} shadowColor={'red40'} key={id} my={'vxxs'}>
        <QuickAction
          variant="shadow"
          onPress={() => {
            route ? navigation.navigate(route) : onPress && onPress();
          }}
          key={id}
          title={name}
          icon={Icon}
        />
      </Box>
    );
  };

  const _renderIllustrationImage = () => {
    if (IllustrationType === 'CallCenter') {
      return <Illustration name="CallCenterSVG" />;
    } else if (IllustrationType === 'Referral') {
      return <CallCenter />;
    } else if (IllustrationType === 'Settings') {
      return <Illustration name="ProfileAccessSVG" />;
    } else {
      return <CallCenter />;
    }
  };

  return (
    <Box
      flex={1}
      bg={'white'}
      justifyContent={'space-between'}
      alignItems={'stretch'}
      style={{padding: getFontSizeByWindowWidth(20)}}>
      <Box style={{alignSelf: 'center', marginTop: '10%'}}>
        {_renderIllustrationImage()}
      </Box>
      <Box>{options.map(item => _renderAction(item))}</Box>
    </Box>
  );
}
