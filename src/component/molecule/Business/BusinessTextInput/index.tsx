import {Theme} from '@/typings/globalTheme';
import {useTheme} from '@shopify/restyle';
import React, {useEffect, useState} from 'react';
import {KeyboardTypeOptions,TextInput,View,TouchableOpacity} from 'react-native';
import {Icon, Text} from '@/component/atom';
import { gpsh, gpsw } from '@/utils/parseTokenStyle';
import { fontFamily } from '@/style/theme';

type PropsType = {
    onChangeText: (args:any) => void;
    leftComponent?:() => any;
    rightComponent?:() => any;
    value?:string;
    placeholder?:string;
    required?:boolean;
    errorInfo?:{
        status:boolean;
        message:string;
    }
    textAlign?:'left' | 'right';
    isPassword?:boolean;
    keyboardType?:KeyboardTypeOptions;
    setIsFocused?:(args:boolean) => any
}
const errorColor = "#C2334D"
export const BusinessTextInput = (props:PropsType) => {
    const {colors} = useTheme<Theme>();
    const [isFocus,setIsFocus] = useState<boolean>(false);
    const [value,setValue] = useState<any>('');
    const [secureText,setSecureText] = useState(false)
    useEffect(() => {
        props.value && setValue(props.value);
    },[props.value])
    return (
        <View style={{flex:1}}>
            {(value && !isFocus) && <View style={{backgroundColor:colors.white,marginTop:-10,padding:4,left:16,zIndex:10,position:'absolute'}}><Text fontFamily={'MTNBrighterSans-Medium'} fontSize={12} variant={'extraSmall'} style={{color:(props.errorInfo?.status ? errorColor : colors.grey)}}>{props.placeholder} {props.required && '*'}</Text></View>}
            <View style={{flexDirection:'row',height:66,borderWidth: isFocus ? 2 : 1,borderRadius:20,borderColor: isFocus ? (props.errorInfo?.status ? errorColor : colors.momoBlue) : (props.errorInfo?.status ? errorColor : colors.grey)}}>
                <View style={{justifyContent:'center',marginLeft:16}}>{props.leftComponent && props.leftComponent()}</View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <TextInput
                        onFocus={() => {
                            setIsFocus(!isFocus);
                            props.setIsFocused && props.setIsFocused(!isFocus);
                        }}
                        value={value}
                        placeholder={`${props.placeholder} ${props.required ? '*' : ''}`} onChangeText={(value) => {
                            props.onChangeText(value);
                            setValue(value)
                        }}
                        secureTextEntry={secureText}
                        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                        onBlur={() => {
                            setIsFocus(false);
                            props.setIsFocused && props.setIsFocused(false);
                        }}
                        style={{fontFamily:'MTNBrighterSans-Regular',color:(props.errorInfo?.status ? errorColor : colors.black),marginTop:5,fontWeight:'600',fontSize:16,width:'100%',textAlign:props.textAlign ? props.textAlign : 'left'}}
                    />
                </View>
                <View style={{justifyContent:'center',marginRight:gpsh('16')}}>
                    {props.rightComponent && props.rightComponent()}
                    {props.isPassword &&
                        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                            {!secureText ? <Icon name='EyeslashIcon' stroke={(props.errorInfo?.status ? errorColor : colors.black)} /> : <Icon name='EyeIcon'  />}
                        </TouchableOpacity>
                    }
                </View>
            </View>
            {props.errorInfo?.status && <Text fontSize={12} fontFamily={fontFamily('Regular')} style={{color:errorColor,marginTop:5,marginLeft:gpsw('15')}}>{props.errorInfo?.message}</Text>}
      </View>
    );
};