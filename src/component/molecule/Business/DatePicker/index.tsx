import {Theme} from '@/typings/globalTheme';
import {useTheme} from '@shopify/restyle';
import React, {useState} from 'react';
import {Dimensions,StyleSheet,View} from 'react-native';
import {Icon, Text} from '@/component/atom';
import {fontFamily} from '@/style/theme';
import {Card, HorizontalCardSeparator } from '@molecule';
import { Calendar } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { gpsh } from '@/utils/parseTokenStyle';
import { globalBlack, globalMoMoBlue } from '@/style-dictionary-dist/momoStyle';

type PropsType = {
    onDateSelected: (args:any,btn:string) => void;
    btn:string;
    placeholder:string;
}

const DatePicker = (props:PropsType) => {
  const {colors} = useTheme<Theme>();
  const {onDateSelected,placeholder,btn} = props;
  const [isItemListShown,setIsItemListShown] = useState<boolean>(false);
  const getMarked = () => {
    let marked:any = {};
    for(let i = 1; i <= 10; i++) {
      let day = i.toString().padStart(2, '0');
      marked[`2022-12-${day}`] = {
        startingDay: i == 1,
        endingDay: i == 10,
        color: 'yellow',
        textColor: '#aaa',
        disabled: true,
        marked:true,
        dot:false
      };
    }
    return marked;
  };
  return (
    <View>
        <TouchableOpacity onPress={() => setIsItemListShown(!isItemListShown)} style={[{justifyContent:'center',flexDirection:'row',backgroundColor:colors.white,borderColor: isItemListShown ? colors.momoBlue : colors.black,height:66,width:'100%'},!isItemListShown && styles.isHidden, isItemListShown && styles.isNotHidden]}>
            <View style={{flex:1,justifyContent:'center',marginLeft:gpsh('16')}}>
              <Text fontFamily={fontFamily('Regular')} style={{color:colors.black,fontSize: gpsh('16')}}>{placeholder}</Text>
            </View>
            <View style={{marginRight:gpsh('16'),justifyContent:'center'}}>
              <Icon color={isItemListShown ? globalMoMoBlue : globalBlack} name='CalendarIcon'/>
            </View>
        </TouchableOpacity>
        {isItemListShown &&
            <View style={[{marginTop:66,backgroundColor:colors.white,position:'absolute',width:'100%',zIndex:1,borderLeftWidth:1.5,borderBottomWidth:1.5,borderRightWidth:1.5,borderColor:colors.momoBlue},styles.selectedIsLast]}>
                <HorizontalCardSeparator w={1}/>
                <Calendar
                    style={{borderRadius:20}}
                    headerStyle={{backgroundColor:'momoBlue'}}
                    renderHeader={(props) => {
                        const formattedDate = new Date(props).toLocaleString('default', {
                          month: 'long',
                          year: 'numeric',
                        });
                        return(
                          <View><Text color={'black'}>{formattedDate}</Text></View>
                        )
                    }}
                    onDayPress={day => {
                      onDateSelected(day,btn);
                      setIsItemListShown(false)
                      //onDateSelected({show:selectedBtn.btn === 'To',data:rangeData.data.map(data => data.selected === true ? {...data,value:day.dateString,timeStamp:day.timestamp} : data)})
                    }}
                    markingType="period"
                    markedDates={getMarked()}
                    renderArrow={directions => _renderArrow(directions,colors)}
                    
                />
            </View>
        }
    </View>
  );
};
const _renderArrow = (direction: 'left' | 'right',colors:any) => {
  if (direction === 'left') {
    return (
      <Icon name='CalendarLeftIcon' />
    );
  } else {
    return (
      <Icon name="CalendarRightIcon" />
    );
  }
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
export default DatePicker;