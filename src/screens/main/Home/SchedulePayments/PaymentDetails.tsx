import {PaymentDetailsScreenProps} from '@/typings/navigation';
import {Box, Button, SafeAreaContainer} from '@atom';
import {BackHeadingX, CenterModal, ConfirmDetail, Overlay} from '@molecule';
import {StatusAction} from '@organisms';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {useTransferFormState} from '../HomeScreenTab/MoMoTransfer/MoMoTransferContext';

const PaymentDetails = () => {
  const {setTransferFormData} = useTransferFormState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [cancelPayment, setCancelPayment] = useState(false);
  const {navigate} = useNavigation<PaymentDetailsScreenProps['navigation']>();
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleLeftPress = () => {
    handleCloseModal();
    setCancelPayment(true);
  };
  const handleRightPress = () => {
    handleCloseModal();
    // navigate('momotransfer');
  };
  const {
    params: {data},
  } = useRoute<PaymentDetailsScreenProps['route']>();
  return cancelPayment ? (
    <SafeAreaContainer>
      <StatusAction
        title="Payment stopped!"
        subtitle="This payment will not be processed on the next scheduled date."
        onPress={() => {
          //   navigate('schedulepaymentscreen');
          navigate('bottomtab', {
            screen: 'Home',
            params: {
              screen: 'schedulepaymentscreen',
            },
          });
        }}
        share={false}
      />
    </SafeAreaContainer>
  ) : (
    <SafeAreaContainer flex={1}>
      <BackHeadingX title="Payment details" />
      <Box bg={'white'} flex={1}>
        <Box px={'hm'} pt={'vm'}>
          <ConfirmDetail {...{data}} total="₦ 560.00" />
        </Box>
        <Box pb={'hm'} px={'hm'} justifyContent={'flex-end'} flex={1}>
          <Box gap={'vsm'}>
            <Button
              label="Edit"
              onPress={() => {
                setTransferFormData(data);
                navigate('momotransfer');
              }}
            />
            <Button
              label="Stop Payment"
              variant="secondary"
              onPress={handleOpenModal}
            />
          </Box>
        </Box>
      </Box>
      <Overlay open={isModalVisible} setModalVisible={setModalVisible}>
        <CenterModal
          title="Stop payment?"
          body="This payment will not be processed on the next scheduled date. "
          close={handleCloseModal}
          left={{
            title: 'Yes',
            onPress: handleLeftPress,
          }}
          right={{
            title: 'No',
            onPress: handleRightPress,
          }}
        />
      </Overlay>
    </SafeAreaContainer>
  );
};

export default PaymentDetails;
