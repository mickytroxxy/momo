import { View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Card from '@/component/molecule/Card/Card'
import { Box, Button, Icon, Text } from '@atom'
import { Theme, fontFamily } from '@/style/theme'
import { gpsh, gpsw } from '@/utils/parseTokenStyle'
import { globalBlack, globalGrey, globalMoMoBlue, globalWhite } from '@/style-dictionary-dist/momoStyle'
import QuickAction from '@/component/molecule/Card/QuickAction'
import icon from '@/constants/icon';
import { useTheme } from '@shopify/restyle'
import { BusinessDropdownSingle } from '../../DropDown/BusinessDropdown'
const {RightOutlineIcon,CalenderLeftNav,AdbIIcon,FbnIcon,BankOfAfricaIcon,AbsaIcon,StanbicIcon,UbaIcon} = icon;
const DropdownCard = () => {
    const {colors} = useTheme<Theme>();
    const [hasError,setHasError] = useState(false);
    return (
        <View style={{padding:gpsh('24')}}>
          <Box>
            <BusinessDropdownSingle hasError={hasError} errorMessage='Insufficient balance for this transaction' itemList={[{maintitle:'GHc 64878.00',subtitle:'Main Account',id:1,selected:true},{maintitle:'GHc 5568.00',subtitle:'MoMo Pay Account',id:2,selected:false},{maintitle:'GHc 00.00',subtitle:'MoMo Pay Account 2',id:3,selected:false}]} onSelected={(selected) => {
              //setTransferToData(transferToData.map(item => item.id === selected.id ? {...item,selected:true} : {...item,selected:false}))
            }}/>
          </Box>

            <Box zIndex={-1} style={{marginTop:30}}>
              <Box zIndex={-1} mt={'vsm'}>
                <Button
                  onPress={() => setHasError(true)}
                  variant="primary"
                  label="Trigger Error 4 insufficient Balance"
                />
              </Box>
              <Box zIndex={-1} mt={'vsm'}>
                <Button
                  onPress={() => setHasError(false)}
                  variant="primary"
                  label='Clear Error'
                />
              </Box>
            </Box>
        </View>
    )
}
const styles = StyleSheet.create({
  MainTitle: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('18'),
    letterSpacing: -0.5,
    color: globalBlack,
    paddingVertical:gpsh('7')
  },
  MainTitle2: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('16'),
    letterSpacing: -0.5,
    color: globalBlack,
    paddingVertical:gpsh('0')
  },
  SubTitle: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    letterSpacing: -0.5,
    color: globalMoMoBlue,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15,
  },
  title: {
    fontFamily: fontFamily('Medium'),
    fontSize: gpsw('12'),
    letterSpacing: -0.5,
    color: globalBlack,
  },
  titleValue: {
    fontFamily: fontFamily('Light'),
    fontSize: gpsw('12'),
    letterSpacing: -0.5,
    color: globalGrey,
  },
  total: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    letterSpacing: -0.5,
    color: 'rgba(28, 27, 31, 1)',
  },
  totalValue: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    letterSpacing: -0.5,
    color: 'rgba(28, 27, 31, 1)',
    textTransform: 'uppercase',
  },
});
export default DropdownCard