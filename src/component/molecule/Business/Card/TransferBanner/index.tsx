import {Theme} from '@/typings/globalTheme';
import {useTheme} from '@shopify/restyle';
import React from 'react';
import {View,} from 'react-native';
import {Box, Text} from '@/component/atom';
import { Card} from '@molecule';
import { gpmsh, gpsh } from '@/utils/parseTokenStyle';

type PropTypes = {
    renderIcon:() => any;
    headerTitle:string;
    body:string
}

const TransferBanner = ({renderIcon,headerTitle,body}:PropTypes) => {
  const {colors} = useTheme<Theme>();
  return (
    <View>
        <Card style={{height:gpsh('98'),flexDirection:'row',borderRadius:gpsh('20')}} elevation={10}>
            <Box style={{width:100,justifyContent:'center',alignItems:'center',paddingLeft:gpmsh('36')}}>
                {renderIcon()}
            </Box>
            <Box style={{flex:1,paddingLeft:gpmsh('12'),paddingTop:gpsh('20')}}>
                <Text fontFamily={'MTNBrighterSans-Bold'} color={'momoBlue'} fontSize={18}>{headerTitle}</Text>
                <Text fontFamily={'MTNBrighterSans-Regular'} color={'grey'} fontSize={12}>{body}</Text>
            </Box>
        </Card>
        <Box style={{flexDirection:'row',alignItems:'center',marginTop:10,justifyContent:'center'}}>
            <View style={{width:6,height:6,borderRadius:100,backgroundColor:'white',margin:3}}></View>
            <View style={{width:6,height:6,borderRadius:100,backgroundColor:colors.sunshineYellow,margin:3}}></View>
            <View style={{width:6,height:6,borderRadius:100,backgroundColor:'white',margin:3}}></View>
        </Box>
    </View>
  );
};

export default TransferBanner;