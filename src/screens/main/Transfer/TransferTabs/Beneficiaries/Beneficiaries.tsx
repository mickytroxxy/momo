import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import {BeneficiariesData} from '@/fixtures/dummyData';
import {Theme} from '@/typings/globalTheme';
import {MoMoUserScreenProps} from '@/typings/navigation';
import {Box, Button, ButtonIcon, ScrollView, TouchableOpacity} from '@atom';
import {Card, Pills, TransactionCard} from '@molecule';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@shopify/restyle';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

const BeneficiariesAll = () => {
  const {navigate, goBack} = useNavigation<MoMoUserScreenProps['navigation']>();
  const {spacing} = useTheme<Theme>();
  const [filteredData, setFilteredData] = useState(BeneficiariesData);
  const [transactTabs, setTransactTabs] = useState<
    'All' | 'MoMo User' | 'Bank Transfer'
  >('All');

  const handleFilter = (filterType: string) => {
    switch (filterType) {
      case 'All':
        setFilteredData(BeneficiariesData);
        setTransactTabs('All');
        break;
      case 'MoMo User':
        setFilteredData(BeneficiariesData.filter(v => v.type == 'momo user'));
        setTransactTabs('MoMo User');
        break;
      case 'Bank Transfer':
        setFilteredData(
          BeneficiariesData.filter(v => v.type == 'bank transfer'),
        );
        setTransactTabs('Bank Transfer');
        break;
      default:
        break;
    }
  };

  const transactTypeData = ['All', 'MoMo User', 'Bank Transfer'];

  return (
    <SafeAreaContainer flex={1}>
      <Card variant={'shadow'}>
        <ScrollView horizontal bg={'white'} py={'vm'}>
          {transactTypeData.map(type => {
            return (
              <Box key={type.toString()} mx={'hsm'}>
                <Pills
                  onPress={() => handleFilter(type)}
                  pillType="filter"
                  label={type}
                  position="left"
                  outline={transactTabs !== type}
                />
              </Box>
            );
          })}
        </ScrollView>
      </Card>
      <FlatList
        data={filteredData}
        contentContainerStyle={{
          paddingHorizontal: spacing.hm,
          paddingVertical: spacing.vm,
          gap: spacing.vxs,
          flexGrow: 1,
          paddingBottom: 100,
        }}
        renderItem={({
          item: {
            name,
            phoneNumber,
            type: transactionType,
            reason,
            transactiondate,
          },
          index,
        }) => {
          return (
            <TouchableOpacity activeOpacity={0.9}  >
              <TransactionCard
                key={`${index}-${name}`}
                title={name}
                beneficiary
                date={transactiondate}
                type={transactionType}
                onPress={() => navigate('beneficiarydetailscreen', {
                  data: {
                    name,
                    phoneNumber,
                    transactionType,
                    reason
                  }
                })}
              />
            </TouchableOpacity>
          );
        }}
      />

      <Box position={'absolute'} bottom={(120)} right={(20)}>
        <ButtonIcon
          icon="Plus"
          title="Beneficiary"
          onPress={() => navigate('addbeneficiary')}
        />
      </Box>
    </SafeAreaContainer>
  );
};

export default BeneficiariesAll;
