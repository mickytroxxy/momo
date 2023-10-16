// @ts-nocheck
import {FavoritesData} from '@/fixtures/dummyData';
import {Box} from '@atom';
import {FlatList} from 'react-native';
// import BeneficiaryItem from '../Component/BeneficiaryItem';

const Favorites = () => {
  return (
    <Box py={'vsm'}>
      {/* <FlatList
        data={FavoritesData}
        renderItem={({item}) => <BeneficiaryItem {...item} />}
      /> */}
    </Box>
  );
};

export default Favorites;
