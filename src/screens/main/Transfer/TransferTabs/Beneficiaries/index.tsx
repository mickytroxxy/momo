import TransactionCard from '@/component/molecule/Card/TransactionCard';
import {BeneficiariesData} from '@/fixtures/dummyData';
import {
  getFontSizeByWindowWidth as gsw,
  getFontSizeByWindowHeight as gsh,
} from '@/style/theme';
import {MoMoUserScreenProps, TransferScreenProps} from '@/typings/navigation';
import {
  Box,
  Button,
  ButtonIcon,
  ScrollView,
  Text,
  TextButton,
  TouchableOpacity,
} from '@atom';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const Beneficiaries = () => {
  const {navigate} = useNavigation<TransferScreenProps['navigation']>();
  const handlePress = (v: any) =>
    navigate('beneficiarydetailscreen', {
      data: {
        name: v.name,
        phoneNumber: v.phoneNumber,
        transactionType: v.type,
        reason: v.reason,
      },
    });
  function renderEmptyState() {
    return (
      <Box
        alignSelf={'center'}
        style={{
          paddingHorizontal: gsw(35),
        }}>
        <Text variant={'regular12'} textAlign={'center'}>
          It looks like you haven't added any beneficiaries yet. Please add at
          least one beneficiary to continue.
        </Text>
      </Box>
    );
  }
  return (
    <>
      <ScrollView
        width={'100%'}
        flexGrow={1}
        flex={1}
        py={'vsm'}
        contentContainerStyle={{
          paddingBottom: 50
        }}
        >
        {BeneficiariesData.length > 0 ? (
          <Box px={'hm'}>
            <TextButton
              onPress={() => navigate('beneficiariesscreen')}
              title="See All"
              mb={'vsm'}
              alignSelf={'flex-end'}
            />
            <Box gap={'vxs'}>
              {BeneficiariesData.slice(0, 3).map((v, index) => (
                <TransactionCard
                  key={`${index}-${v.name}`}
                  onPress={() => handlePress(v)}
                  title={v.name}
                  beneficiary
                  date={v?.transactiondate}
                  type={v.type}
                />
              ))}
            </Box>
          </Box>
        ) : (
          renderEmptyState()
        )}
      </ScrollView>
      <Box position={'absolute'} top={gsh(225)} right={gsw(20)}>
        <ButtonIcon
          icon="Plus"
          title="Beneficiary"
          onPress={() => navigate('addbeneficiary')}
        />
      </Box>
    </>
  );
};

export default Beneficiaries;
