import {BeneficiariesData} from '@/fixtures/dummyData';
import {Box} from '@atom';
import {FlatList} from 'react-native';
import BeneficiaryItem from '../Component/BeneficiaryItem';

const Beneficiaries = () => {
  let MomoUserBeneficiaries = BeneficiariesData.filter((item) => item.type == 'momo user')

  return (
    <FlatList
      data={MomoUserBeneficiaries}
      contentContainerStyle={{
        paddingBottom: 20
      }}
        renderItem={({item}) => <BeneficiaryItem {...item} />}
    />
  );
};

export default Beneficiaries;
