import {DarkStatusBar} from '@/component/molecule/StausBar';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {ConfirmPaymentScreenProps} from '@/typings/navigation';
import {
  Box,
  Button,
  Icon,
  Illustration,
  SafeAreaContainer,
  Text,
  TouchableOpacity,
} from '@atom';
import {BackHeadingX, ConfirmDetailContainer, ConfirmItemDetail, CurvedHeader} from '@molecule';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';

const MapKey = {
  name: 'Name',
  phoneNumber: 'Mobile number',
  accountNumber : 'Account number',
  paymentType: 'Payment type',
  searchBank: 'Send to',
  amount: 'Amount',
  reason: 'Reason',
};
type MapKeyType = keyof typeof MapKey;
const Fufilled = ({data}: any) => {
  const {navigate} = useNavigation<ConfirmPaymentScreenProps['navigation']>();
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
          Transaction successful
        </Text>
        <Text variant={'regular16'} textAlign={'center'} color={'grey'}>
          {`Your transaction of ₦ ${data?.amount} \n to ${data?.phoneNumber}  \n was successful.`}
        </Text>
        <TouchableOpacity
          // onPress={() => navigate('transferscreen')}
          flexDirection={'row'}
          mt={'vm'}
          gap={'hxxs'}
          alignSelf={'center'}
          alignItems={'center'}>
          <Icon name="ShareIcon" size={20} />
          <Text variant={'regular16'}>Share</Text>
        </TouchableOpacity>
        <Box
          style={{
            marginTop: 33,
          }}>
          <Button
            onPress={() =>
              navigate('bottomtab', {
                screen: 'Transfer',
                params: {
                  screen: 'transferscreen',
                },
              })
            }
            label="done"
          />
        </Box>
      </Box>
    </Box>
  );
};

const ConfirmPayment = () => {
  const {goBack} = useNavigation<ConfirmPaymentScreenProps['navigation']>();
  const [showSuccess, setshowSuccess] = useState(false);
  const {
    params: {data},
  } = useRoute<ConfirmPaymentScreenProps['route']>() ?? {};
  console.log('data', data);

  return showSuccess ? (
    <SafeAreaContainer bg={'white'} flex={1} flexGrow={1}>
      <Fufilled data={data} />
    </SafeAreaContainer>
  ) : (
    <SafeAreaContainer bg={'white'} flex={1} flexGrow={1}>
      <BackHeadingX title="Confirm payment" />
      <Box px={'hm'} pt={'vm'} flex={1} bg={'white'} >
        <ConfirmDetailContainer>
          {Object.entries(data).map(([key, value]) => {
            if (key in MapKey && value !== '') {
              return (
                <ConfirmItemDetail
                  key={key}
                  title={MapKey[key as MapKeyType]}
                  value={value}
                />
              );
            }
            return null;
          })}
          <ConfirmItemDetail title={'Txn fees'} value={'₦ 50'} />
        </ConfirmDetailContainer>
        <Box
          px={'hsm'}
          pt={'hsm'}
          mt={'vm'}
          bg={'extraLightGrey'}
          borderWidth={gsh(1)}
          borderColor={'transparent'}
          borderRadius={gsh(9)}>
          <ConfirmItemDetail
            title={'Total Cost'}
            value={`₦ ${parseInt(data.amount.split(' ').join('')) + 50}`}
            bold
          />
        </Box>

        <Box justifyContent={'flex-end'} flex={1} pb={'vxl'}>
          <Box gap={'vs'}>
            <Button onPress={() => setshowSuccess(true)} label="pay" />
            <Button onPress={() => goBack()} label="edit" variant="secondary" />
          </Box>
        </Box>
      </Box>
    </SafeAreaContainer>
  );
};

export default ConfirmPayment;
