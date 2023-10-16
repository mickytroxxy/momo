import {Theme} from '@/typings/globalTheme';
import {ColorProps, useTheme} from '@shopify/restyle';
import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet,TouchableOpacity,View} from 'react-native';
import {Icon, Text} from '@/component/atom';
import icon from '@/constants/icon';
import {Card } from '@molecule';
import { gpsh } from '@/utils/parseTokenStyle';
import { getFontSizeByWindowWidth } from '@/style/theme';

export type ItemListType = {
    subtitle?:string;
    maintitle:string;
    selected?:boolean;
    value?:any;
    id:number;
}
type PropsType = {
    onSelected: (args:any) => void;
    itemList?:ItemListType[];
    placeholder?:string;
    required?:boolean;
    fontFamily?:string;
    fontColor?:any;
    hasError?:boolean;
    errorMessage?:string;
    fontSize?:number;
}
const {DropdownCloseIcon,DropdownOpenIcon} = icon;
export const BusinessDropdownMulti = (props:PropsType) => {
  const {colors} = useTheme<Theme>();
  const [isItemListShown,setIsItemListShown] = useState<boolean>(false);
  const [listItems,setListItems] = useState<ItemListType[]>([])
  const selectedOption = listItems?.filter(item => item.selected)?.[0];
  const handleChange = useCallback((item:ItemListType) => {
    setListItems(listItems.map(data => data.id === item.id ? {...data,selected:true} : {...data,selected:false}));
    setIsItemListShown(false);
    props.onSelected(item)
  },[listItems])
  useEffect(() => {
    const list:ItemListType[] = props?.itemList || []
    setListItems(list)
  },[props])
  return (
    <View style={{flex:1}}>
        {(selectedOption && props.placeholder) && <View style={{backgroundColor:colors.white,marginTop:-12,padding:4,left:16,zIndex:10,position:'absolute'}}><Text fontFamily={'MTNBrighterSans-Regular'} fontSize={getFontSizeByWindowWidth(10)} variant={'extraSmall'} color={'black'}>{props.placeholder} {props.required && '*'}</Text></View>}
        <TouchableOpacity onPress={() => setIsItemListShown(!isItemListShown)} style={{borderWidth:1,justifyContent:'center',flexDirection:'row',borderColor: isItemListShown ? colors.momoBlue : (!props.hasError ? '#525252' : colors.red80),height:66,borderRadius:15,width:'100%'}}>
            <View style={{flex:1,justifyContent:'center',marginLeft:gpsh('16')}}>
                {selectedOption?.subtitle && <Text fontFamily={'MTNBrighterSans-Regular'} style={{color:(!props.hasError ? 'grey' : colors.red80)}} fontSize={getFontSizeByWindowWidth(12)}>{selectedOption?.subtitle}</Text>}
                <Text fontFamily={props.fontFamily ? props.fontFamily : 'MTNBrighterSans-Regular'} style={{color:!props.hasError ? (props.fontColor ? props.fontColor : 'black') : colors.red80}} fontSize={getFontSizeByWindowWidth(14)}>{selectedOption?.maintitle}</Text>
            </View>
            <View style={{marginRight:gpsh('16'),justifyContent:'center'}}>
                {!isItemListShown ? <DropdownCloseIcon/> : <DropdownOpenIcon/>}
            </View>
        </TouchableOpacity>
        {props.hasError && <Text variant={'extraSmall'} color={'red80'} fontSize={gpsh('10')}>{props.errorMessage}</Text>}
        {isItemListShown &&
            <View style={{marginTop:70,position:'absolute',width:'100%',zIndex:1,backgroundColor:'white'}}>
                <Card elevation={10} borderRadius={15}>
                    {listItems?.map((item,i) => 
                        <TouchableOpacity onPress={()=> handleChange(item)} key={i} style={[{flex:1,justifyContent:'center',backgroundColor:item.selected ? '#E9EFF0' : colors.white,padding:gpsh('16')},i === 0 && styles.selectedIsFirst,i === listItems.length - 1 && styles.selectedIsLast]}>
                            {item.subtitle && <Text fontFamily={'MTNBrighterSans-Regular'} color={'grey'} fontSize={getFontSizeByWindowWidth(12)}>{item.subtitle}</Text>}
                            <Text fontFamily={props.fontFamily ? props.fontFamily : 'MTNBrighterSans-Regular'} color={props.fontColor ? props.fontColor : 'black'} fontSize={getFontSizeByWindowWidth(14)}>{item.maintitle}</Text>
                        </TouchableOpacity>
                    )}
                </Card>
            </View>
        }
    </View>
  );
};



export const BusinessDropdownSingle = (props:PropsType) => {
    const {colors} = useTheme<Theme>();
    const [isItemListShown,setIsItemListShown] = useState<boolean>(false);
    const [listItems,setListItems] = useState<ItemListType[]>([])
    const selectedOption = listItems?.filter(item => item.selected)?.[0]
    const handleChange = useCallback((item:ItemListType) => {
      setListItems(listItems.map(data => data.id === item.id ? {...data,selected:true} : {...data,selected:false}));
      setIsItemListShown(false);
      props.onSelected(item)
    },[listItems])
    useEffect(() => {
      const list:ItemListType[] = props?.itemList || []
      setListItems(list)
    },[])
    return (
        <View style={{}}>
            {(selectedOption && props.placeholder && !isItemListShown) && <View style={{backgroundColor:colors.white,marginTop:-14,padding:4,left:16,zIndex:10,position:'absolute'}}><Text fontFamily={'MTNBrighterSans-Regular'} fontSize={gpsh('12')} variant={'extraSmall'} color={'black'}>{props.placeholder} {props.required && '*'}</Text></View>}
            <TouchableOpacity onPress={() => setIsItemListShown(!isItemListShown)} style={[{justifyContent:'center',flexDirection:'row',backgroundColor:colors.white,borderColor: isItemListShown ? colors.momoBlue : (!props.hasError ? '#525252' : colors.red80),height:66,width:'100%'},!isItemListShown && styles.isHidden, isItemListShown && styles.isNotHidden , props.hasError && {borderWidth:2}]}>
                <View style={{flex:1,justifyContent:'center',marginLeft:gpsh('16')}}>
                    {selectedOption?.subtitle && <Text fontFamily={'MTNBrighterSans-Regular'} style={{color:(!props.hasError ? '#525252' : '#C2334D')}} fontSize={getFontSizeByWindowWidth(12)}>{selectedOption?.subtitle}</Text>}
                    <Text fontFamily={props.fontFamily ? props.fontFamily : 'MTNBrighterSans-Bold'} style={{color:!props.hasError ? (props.fontColor ? props.fontColor : colors.momoBlue) : '#C2334D',fontSize:props.fontSize ? gpsh(props.fontSize.toString()) : gpsh('14')}}>{(props.placeholder && isItemListShown) ? props.placeholder : `${selectedOption ? selectedOption?.maintitle : props.placeholder} ${(!selectedOption && props.required) ? '*' : ''}`}</Text>
                </View>
                <View style={{marginRight:gpsh('16'),justifyContent:'center'}}>
                    {!isItemListShown ? <Icon name='DropdownCloseIcon' size={28}/> : <Icon name='DropdownOpenIcon' size={28}/>}
                </View>
            </TouchableOpacity>
            {props.hasError && <Text variant={'extraSmall'} color={'red100'} fontSize={gpsh('8')} style={{marginLeft:10}}>{props.errorMessage}</Text>}
            {isItemListShown &&
                <View style={[{marginTop:66,backgroundColor:colors.white,position:'absolute',width:'100%',zIndex:1,borderLeftWidth:1.5,borderBottomWidth:1.5,borderRightWidth:1.5,borderColor:colors.momoBlue},styles.selectedIsLast]}>
                    <ScrollView>
                        {listItems?.map((item,i) => 
                            <TouchableOpacity onPress={()=> handleChange(item)} key={i} style={[{flex:1,justifyContent:'center',padding:gpsh('16')},i === listItems.length - 1 && styles.selectedIsLast]}>
                                {selectedOption?.subtitle && <Text fontFamily={'MTNBrighterSans-Regular'} style={{color:'#525252'}} fontSize={getFontSizeByWindowWidth(12)}>{selectedOption?.subtitle}</Text>}
                                <Text fontFamily={props.fontFamily ? props.fontFamily : 'MTNBrighterSans-Bold'} style={{color:props.fontColor ? props.fontColor : 'momoBlue',fontSize:props.fontSize ? gpsh(props.fontSize.toString()) : gpsh('14')}}>{item?.maintitle}</Text>
                            </TouchableOpacity>
                        )}
                    </ScrollView>
                </View>
            }
      </View>
    );
};
const styles = StyleSheet.create({
    selectedIsFirst:{
        borderTopLeftRadius:10,borderTopRightRadius:10
    },
    selectedIsLast:{
        borderBottomLeftRadius:10,borderBottomRightRadius:10
    },
    isHidden:{
        borderWidth:1,borderRadius:15
    },
    isNotHidden:{
        borderWidth:2,borderTopLeftRadius:15,borderTopRightRadius:15,top:2.5
    }
});