import TouchableOpacity from '@/component/atom/TouchableOpacity';
import icon from '@/constants/icon';
import Calendars from '@/screens/main/Transfer/Calendar';
import {
  fontFamily,
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Icon, Text} from '@atom';
import {useTheme} from '@shopify/restyle';
import dayjs from 'dayjs';
import React, {
  ForwardedRef,
  Fragment,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  ActivityIndicator,
  Animated,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  Text as Txt,
} from 'react-native';
import {useClickOutside} from 'react-native-click-outside';
import {ScrollView} from 'react-native-gesture-handler';

interface DropdownItemType {
  label: string;
  value: string;
}

interface Props<T> {
  // type Props<T = string> = {
  placeHolder?: string;
  displayKey?: any;
  hasError?: any;
  data?: Array<DropdownItemType>;
  // onSelect?: (item: {label: string; value: string}) => void;
  onSelect?: (value: T) => void;
  renderItem?: any;
  INPUT_HEIGHT?: number;
  search?: boolean;
  loading?: boolean;
  testId?: string;
  value: T;
  location?: boolean;
  calendar?: boolean;
  required?: boolean;
  label?: string;
  clearError?: any;
}
export type selectRenderItemType = {
  item: any;
  onItemPress: (item: any) => void;
  selected: string;
};
export type DropdownRef = {
  close: () => void;
};
export default forwardRef(function <T extends string>(
  {
    placeHolder = 'Select your option *',
    hasError,
    data = [],
    onSelect,
    renderItem,
    INPUT_HEIGHT = gsh(56),
    search,
    loading,
    testId,
    value,
    location,
    clearError,
  }: Props<T>,
  ref: ForwardedRef<DropdownRef>,
) {
  const [visible, setVisible] = useState(false);
  Platform.OS;
  const inputRef = useRef<TextInput>(null);
  const {colors} = useTheme<Theme>();
  const dropdownButton = useRef<any>(null);
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [filteredData, setfilteredData] = useState<any[]>(data);
  const [selected, setSelected] = useState<any>(value);
  // const refs = useClickOutside<Txt>(() => console.log('sjj'));
  const refs = useClickOutside<Txt>(() => setVisible(false));
  const {SearchIcon, DropIcon, LocationIcon, CalendarIcon} = icon;
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);
  // console.log('selected', selected);
  console.log('hasError', hasError);
  const indicator = new Animated.Value(0);

  const openDropdown = async (): Promise<void> => {
    setVisible(true);
  };

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const onItemPress = (item: any): void => {
    console.log('item', item);

    if (search || location) {
      Keyboard.dismiss();
    }
    // This is for the managing the state in this component
    setSelected(item.value);
    // setSelected(item[displayKey]);
    setSearchText(`${item.label} ${location ? `, ${item?.value}` : ''}`);
    // This is for the managing the state in the custom or outside the Component
    onSelect && onSelect(item.value);
    setVisible(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const renderDropdown = () => {
    const indicatorSize =
      scrollViewWholeHeight > scrollViewVisibleHeight
        ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
          scrollViewWholeHeight
        : scrollViewVisibleHeight;

    const difference =
      scrollViewVisibleHeight > indicatorSize
        ? scrollViewVisibleHeight - indicatorSize
        : 1;
    return (
      <Box
        width="101.2%"
        style={[styles.dropdown, {top: gsw(27), right: -1, left: -2}]}>
        <Box
          bg={'red100'}
          width="100%"
          alignSelf="center"
          backgroundColor="white"
          borderTopLeftRadius={0}
          borderTopRightRadius={0}
          borderWidth={2}
          borderTopWidth={0}
          borderColor={hasError ? 'red100' : visible ? 'momoBlue' : 'black'}
          paddingBottom={'vs'}
          borderRadius={15}
          style={[{maxHeight: gsh(335)}]}
          pt={'vl'}>
          {!loading ? (
            <>
              <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                keyboardShouldPersistTaps="handled"
                onContentSizeChange={(width, height) => {
                  setScrollViewWholeHeight(height);
                }}
                onLayout={({
                  nativeEvent: {
                    layout: {x, y, width, height},
                  },
                }) => {
                  setScrollViewVisibleHeight(height);
                }}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {y: indicator}}}],
                  {useNativeDriver: false},
                )}>
                {(search ? filteredData : data || []).map((item, index) => {
                  return (
                    <Fragment key={`${index}-key`}>
                      {renderItem({
                        item,
                        onItemPress,
                        // selected: selected?.[displayKey],
                        selected,
                      })}
                    </Fragment>
                  );
                })}
                {(search ? filteredData : data).length === 0 && (
                  <Box pl={'hs'}>
                    <Text color={'lightGrey'}>Nothing to show</Text>
                  </Box>
                )}
              </ScrollView>
              {/* Custom Scrollbar */}
              {filteredData.length > 5 && (
                <Box
                  style={{
                    width: 5,
                    height: '100%',
                    position: 'absolute',
                    top: '7%',
                    bottom: 0,
                    right: gsw(5),
                  }}>
                  <Animated.View
                    style={{
                      width: 5,
                      borderRadius: 5,
                      height: indicatorSize,
                      backgroundColor: colors.momoBlue,
                      transform: [
                        {
                          translateY: Animated.multiply(
                            indicator,
                            scrollViewVisibleHeight / scrollViewWholeHeight,
                          ).interpolate({
                            inputRange: [0, difference],
                            outputRange: [0, difference],
                            extrapolate: 'clamp',
                          }),
                        },
                      ],
                    }}
                  />
                </Box>
              )}
            </>
          ) : (
            <Box>
              <ActivityIndicator />
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  useImperativeHandle(
    ref,
    () => ({
      close: () => {
        setVisible(false);
      },
      focus: () => {
        inputRef.current?.focus();
      },
      blur: () => {
        inputRef.current?.blur();
      },
    }),
    [visible],
  );

  return (
    <>
      <Box
        flexDirection="row"
        backgroundColor="transparent"
        alignItems="center"
        borderWidth={1}
        borderColor={hasError ? 'red100' : visible ? 'momoBlue' : 'black'}
        borderRadius={15}
        ref={refs}
        collapsable={false}
        height={INPUT_HEIGHT}>
        <Box
          flexDirection={'row'}
          borderWidth={1}
          flex={1}
          // ref={refs}
          borderColor={
            !visible && !isFocused && !hasError
              ? 'transparent'
              : hasError
              ? 'red100'
              : 'momoBlue'
          }
          borderRadius={14}
          borderBottomLeftRadius={14}
          borderBottomRightRadius={14}
          height={'100%'}>
          {visible && !search && renderDropdown()}
          {search &&
            (visible || isFocused) &&
            searchText.length >= 0 &&
            renderDropdown()}
          <TouchableOpacity
            testID={testId}
            onPress={toggleDropdown}
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: gsw(15),
              borderRadius: 15,
              height: '100%',
            }}>
            {
              <>
                <Box flexDirection={'row'} alignItems={'center'}>
                  <Box>
                    {selected && (
                      <Text
                        style={{
                          fontFamily: fontFamily('Light'),
                          fontSize: gpsw('12'),
                          lineHeight: gpsh('15.6'),
                          color: hasError ? '#C2334D' : '#525252',///come
                        }}>
                        {data[0].label}
                      </Text>
                    )}
                    <Text
                      fontSize={gsw(14)}
                      color={
                        hasError ? 'red100' : selected ? 'momoBlue' : 'black'
                      }
                      fontFamily={fontFamily(selected ? 'Bold' : 'Regular')}>
                      {selected || placeHolder}
                      {/* {selected?.[displayKey] || placeHolder} */}
                    </Text>
                  </Box>
                </Box>
                <Icon
                  name={visible ? 'ArrowUpIcon' : 'ArrowDownIcon'}
                  size={24}
                  color={hasError ? '#C2334D' : visible ? '#004F71' : 'black'}
                />
              </>
            }
          </TouchableOpacity>
        </Box>
      </Box>
      {hasError && (
        <Text
          px={'hm'}
          // @ts-ignore
          zIndex={-2}
          color={'red100'}
          style={{
            alignSelf: 'flex-start',
            fontFamily: 'MTNBrighterSans-Regular',
            fontSize: gsw(8),
            lineHeight: gpsh('10'),
            marginTop: gpsh('5'),
          }}
          textAlign={'left'}>
          {hasError?.message === 'Required'
            ? 'Select an option from the list'
            : hasError?.message}
        </Text>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    shadowColor: '#000000',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
