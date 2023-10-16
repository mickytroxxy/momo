import { View, Text } from 'react-native'
import React from 'react'
import { Header, TopHeaderContent } from '@molecule';
import { moderateScale } from 'react-native-size-matters';
import { globalSunshineYellow, globalWhite } from '@/style-dictionary-dist/momoStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@atom';
import { gpmsw, gpsh } from '@/utils/parseTokenStyle';
const TopHeader = () => {
  return (
    <View style={{}}>
      <Header
        style={{
          paddingVertical: moderateScale(13),
          height:gpsh('64'),
          justifyContent:'center'
        }}>
        <TopHeaderContent
          left={{leftComp: <TouchableOpacity onPress={() => {}}><Icon stroke='white' name='BusinessBackIcon' /></TouchableOpacity>}}
          center={{centerComp: <Icon name='MomoIcon' width={36} height={37} />}}
          titleStyle={{color: globalSunshineYellow}}
        />
      </Header>
      <View style={{marginTop:60}}>
        <Header
          style={{
            paddingVertical: moderateScale(13),
            height:gpsh('64'),
            justifyContent:'center'
          }}>
          <TopHeaderContent
            left={{leftComp: <TouchableOpacity onPress={() => {}}><Icon name='BusinessBackIcon' /></TouchableOpacity>}}
            title='Main Account'
            titleStyle={{color: globalWhite}}
            
          />
        </Header>
      </View>

      <View style={{marginTop:60}}>
        <Header
          style={{
            paddingVertical: moderateScale(13),
            height:gpsh('64'),
            justifyContent:'center'
          }}>
          <TopHeaderContent
            left={{leftComp: <TouchableOpacity onPress={() => {}}><Icon name='BusinessBackIcon' /></TouchableOpacity>}}
            title='Main Account'
            titleStyle={{color: globalWhite}}
            right={{
              rightComp: (
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginRight:10}}>
                    <TouchableOpacity onPress={() => {}}>
                      <Icon name='SearchIcon' color='white' height={35} width={30} />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Icon name='BusinessMoreIcon' color='white' height={35} width={30} />
                  </View>
                </View>
              ),
            }}
          />
        </Header>
      </View>
    </View>
  )
}

export default TopHeader