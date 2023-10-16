import { View, Text } from 'react-native'
import React from 'react'
import { Card} from '@molecule';
import { Icon } from '@atom';
import { gpsh } from '@/utils/parseTokenStyle';
import { Image } from 'react-native';
const PhotoClosed = () => {
  return (
    <View style={{padding:24}}>
      <Card style={{width:'100%',aspectRatio:1,overflow:'hidden',borderRadius:30}}>
        <View style={{position:'absolute',top:gpsh('12'),right:gpsh('12'),zIndex:2}}><Icon name='BusinessCloseIcon' size={28} /></View>
        <Image resizeMode='cover' style={{width:'100%'}} source={require('../../../../../assets/images/photoclosed.jpeg')}/>
      </Card>
    </View>
  )
}

export default PhotoClosed