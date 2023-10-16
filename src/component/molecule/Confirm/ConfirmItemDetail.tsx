import {getFontSizeByWindowWidth as gsw} from '@/style/theme';
import {Box, Text} from '@atom';

const ConfirmItemDetail = ({title, value, bold}: any) => {
  return (
    <Box flexDirection={'row'} mb={'vsm'}>
      <Box width={gsw(103)} mr={'hsm'}>
        <Text variant={bold ? 'medium12' : 'regular12'}>{title}</Text>
      </Box>
      <Text variant={bold ? 'medium12' : 'regular12'} color={'black'}>
        {title === 'Amount' ? `${value}` : value}
      </Text>
    </Box>
  );
};

export default ConfirmItemDetail;
