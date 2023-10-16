import {SvgIconType} from '@/constants/icon';
import {Box, SafeAreaContainer} from '@atom';
import {BackHeadingX} from '@molecule';
import QuickAction from '@molecule/Card/QuickAction';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

export type ActionsType = {
  label: string;
  icon: SvgIconType;
  route?: string;
};

const Actions: ActionsType[] = [
  {
    label: 'Agent referral code',
    icon: 'PersonplusIcon',
    route: 'ss',
  },
  {
    label: 'Approvals',
    icon: 'Bell',
    route: 'ss',
  },
  {
    label: 'Balance peek',
    icon: 'Save',
    route: 'ss',
  },
  {
    label: 'Report fraud',
    icon: 'ReportIcon',
    route: 'ss',
  },
  {
    label: 'Contact customer care',
    icon: 'Headphone',
    route: 'ss',
  },
];
const More = () => {
  const {navigate} = useNavigation();
  const _renderAction = (item: ActionsType) => {
    const {label, icon, route} = item;
    return (
      <Box shadowColor={'red40'} key={label}>
        <QuickAction
          variant="shadow"
          onPress={() => {
            // @ts-ignore
            navigate(route);
          }}
          key={label}
          title={label}
          icon={icon}
          iconColor="#004F71"
        />
      </Box>
    );
  };
  return (
    <SafeAreaContainer>
      <BackHeadingX title="More" noCancel />
      <Box pt={'vm'} px={'hm'} flexGrow={1}>
        <Box gap={'vsm'}>{Actions.map(item => _renderAction(item))}</Box>
      </Box>
    </SafeAreaContainer>
  );
};

export default More;
