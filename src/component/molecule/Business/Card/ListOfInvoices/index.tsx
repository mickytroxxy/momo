import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { gpsh } from '@/utils/parseTokenStyle'
import { fontFamily } from '@/style/theme'
import { globalBlack, globalExtraLightGrey, globalWhite } from '@/style-dictionary-dist/momoStyle'

const ListOfInvoices = () => {
  return (
    <View style={{paddingVertical:gpsh('12'),flexDirection:'row',paddingHorizontal:gpsh('20'),backgroundColor:globalWhite,borderBottomWidth:gpsh('1'),borderBottomColor:'#E8E8E8'}}>
      <View style={{flex:1}}>
        <View>
          <Text style={styles.title}>Invoice ID</Text>
          <Text style={styles.titleValue}>1254246</Text>
        </View>
        <View style={{marginTop:gpsh('12')}}>
          <Text style={styles.title}>Status</Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{width:gpsh('8'),height:gpsh('8'),borderRadius:gpsh('100'),backgroundColor:'#0FAF4B',marginTop:gpsh('6')}}></View>
            <View style={{justifyContent:'center',marginLeft:gpsh('20')}}><Text style={styles.titleValue}>Paid</Text></View>
          </View>
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.title}>Due Date</Text>
          <Text style={styles.titleValue}>04/29/2023</Text>
        </View>
        <View style={{marginTop:gpsh('12')}}>
          <Text style={styles.title}>Amount</Text>
          <Text style={styles.titleValue}>GHc 11333999999.00</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    fontFamily:fontFamily('Medium'),
    color:globalBlack,
    fontSize:gpsh('12'),
    letterSpacing:gpsh('-0.5')
  },
  titleValue:{
    fontFamily:fontFamily('Regular'),
    color:'#5F5F5F',
    fontSize:gpsh('12'),
    marginTop:gpsh('3')
  }
});
export default ListOfInvoices