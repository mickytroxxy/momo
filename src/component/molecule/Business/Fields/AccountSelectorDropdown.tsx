import {Text, TouchableOpacity} from '@atom';
import {selectRenderItemType} from '../../Dropdown/DropdownSearch';
import {
  getFontSizeByWindowWidth as gsw,
  getFontSizeByWindowHeight as gsh,
  fontFamily,
} from '@/style/theme';
import {gpsw} from '@/utils/parseTokenStyle';

const AccountSelector = ({
  item,
  onItemPress,
  selected,
}: selectRenderItemType) => {
  console.log('selectedss', selected);
  return (
    <TouchableOpacity
      bg={item.label === selected ? 'extraLightGrey' : 'transparent'}
      height={gsw(66)}
      justifyContent={'center'}
      px={'hs'}
      testID="tes"
      zIndex={200}
      onPress={() => onItemPress(item)}>
      <Text
        fontFamily="MTNBrighterSans-Regular"
        fontSize={gsw(16)}
        style={{
          fontSize: gpsw('12'),
          lineHeight: gpsw('15.6'),
          fontFamily: fontFamily('Light'),
          color: "#525252"
        }}>
       Account Name
      </Text>
      <Text
        style={{
          fontSize: gpsw('14'),
          lineHeight: gpsw('18'),
          color: '#004F71',
          fontFamily: fontFamily('Bold'),
          
        }}>
        GHc 000000.00
      </Text>
    </TouchableOpacity>
  );
};

export default AccountSelector;
