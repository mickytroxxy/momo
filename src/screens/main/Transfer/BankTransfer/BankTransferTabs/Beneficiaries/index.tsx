import { BeneficiariesData } from '@/fixtures/dummyData';
import { Box } from '@atom';
import { FlatList } from 'react-native';
import BeneficiaryItem from './Component/BeneficiaryItem';

const Beneficiaries = () => {
  let BankTransferBeneficiaries = BeneficiariesData.filter((item) => item.type == 'bank transfer')
  return (
    <FlatList
      data={BankTransferBeneficiaries}
      contentContainerStyle={{
        paddingBottom: 20
      }}
      renderItem={({ item }) => <BeneficiaryItem {...item} />}
    />
  );
};

export default Beneficiaries;
