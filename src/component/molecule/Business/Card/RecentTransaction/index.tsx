import { View, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Text } from '@atom'
import Card from '@/component/molecule/Card/Card'
import { gpsh, gpsw } from '@/utils/parseTokenStyle'
import { fontFamily } from '@/style/theme'
import { globalBlack, globalGrey, globalWhite } from '@/style-dictionary-dist/momoStyle'
const {width} = Dimensions.get('screen')
const RecentTransaction = () => {
    
    return (
        <View style={{paddingVertical:24}}>
            <Card style={styles.container}>
                <View>
                    <Text style={styles.title}>+23 765 4321</Text>
                    <Text style={styles.titleValue}>Airtime | GHc 120</Text>
                </View>
                <View style={{marginTop:gpsh('24')}}>
                    <Button bStyle={{borderWidth:1}} label="Buy Again" size='small' variant="secondary" />
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: gpsw('24'),
      backgroundColor: globalWhite,
      borderRadius: gpsw('15'),
    },
    title: {
      fontFamily: fontFamily('Medium'),
      fontSize: gpsh('14'),
      letterSpacing: -0.5,
      color: globalBlack,
    },
    titleValue: {
      fontFamily: fontFamily('Regular'),
      fontSize: gpsw('12'),
      letterSpacing: -0.5,
      color: "#888",
    }
  });
export default RecentTransaction