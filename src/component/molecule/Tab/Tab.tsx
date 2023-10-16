import useDimension from '@/hooks/useDimension';
import {Theme} from '@/typings/globalTheme';
import {useTheme} from '@shopify/restyle';
import React, {useCallback, useRef} from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {Box} from '../../atom';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';

type TabProp = {
  gap?: any;
  mH?: any;
  mT?: any;
  tabData: {
    title: string;
    renderScene: () => JSX.Element;
  }[];
};
const Tab = ({mH = 0, mT = 0, tabData, gap = 0}: TabProp) => {
  const {width} = useDimension();
  const CONTENT_WIDTH = width;
  const TAB_HEADER_CONTAINER_WIDTH = CONTENT_WIDTH - mH * 2;
  const TABS_PADDING = 8;
  const TAB_NUMBER = tabData.length;
  const TAB_WIDTH = (TAB_HEADER_CONTAINER_WIDTH - TABS_PADDING) / TAB_NUMBER;
  const {colors} = useTheme<Theme>();
  const scrollX = useSharedValue(0);
  const tabRef = useRef<FlatList<typeof tabData> | null>(null);
  const tabPosition = useDerivedValue(() => {
    return scrollX.value / CONTENT_WIDTH;
  });

  const onTabPress = useCallback((index: number) => {
    tabRef?.current?.scrollToOffset({
      offset: index * CONTENT_WIDTH,
    });
  }, []);

  const TabIndicator = () => {
    const tabIndicatorStyle = useAnimatedStyle(() => {
      const translateX = interpolate(
        scrollX.value,
        tabData.map((_: any, i: any) => i * CONTENT_WIDTH),
        tabData.map((_: any, i: any) => i * TAB_WIDTH),
        Extrapolate.CLAMP,
      );

      return {
        transform: [{translateX}],
      };
    });
    return (
      <Box
        style={{
          position: 'absolute',
          height: '83.33%',
          // right: 0,
          // left: 0,
          paddingLeft: 4,
        }}>
        <Animated.View
          style={[styles.tabIndicator, tabIndicatorStyle, {width: TAB_WIDTH}]}
        />
      </Box>
    );
  };

  const renderTabHeader = ({title}: {title: string}, index: number) => {
    const textColorStyle = useAnimatedStyle(() => {
      const textColor = interpolateColor(
        tabPosition.value,
        [index - 1, index, index + 1],
        [colors.grey, colors.momoBlue, colors.grey],
      );
      return {
        color: textColor,
      };
    });

    return (
      <TouchableOpacity
        key={`${title}-${index}`}
        style={[styles.tabBar, {width: TAB_WIDTH}]}
        onPress={() => {
          onTabPress(index);
        }}>
        <View
          key={`${title}-${index}`}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            // flex: 1,
          }}>
          <Animated.Text
            style={[
              styles.tabHeaderText,
              // textColorStyle
            ]}>
            {title}
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTabContent = ({item, index}: {item: any; index: number}) => {
    return (
      <Box
        // bg={'lightGrey'}
        style={{
          flexGrow: 1,
        }}
        width={CONTENT_WIDTH}>
        {item.renderScene()}
      </Box>
    );
  };

  return (
    <Box flexGrow={1}>
      <View
        style={[
          styles.tabHeaderContainer,
          {
            marginHorizontal: mH,
            marginTop: mT
          },
        ]}>
        <TabIndicator />
        {/* Tab Header */}
        {tabData.map(renderTabHeader)}
      </View>
      {/* Tab Content */}
      <Box style={[styles.mainContainer, {paddingTop: gap}]}>
        <Animated.FlatList
          // @ts-ignore
          ref={tabRef}
          data={tabData}
          horizontal
          pagingEnabled
          scrollEventThrottle={32}
          snapToAlignment={'center'}
          style={{
            flex:1
          }}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          // scrollEnabled={Platform.OS === 'ios'}
          showsHorizontalScrollIndicator={false}
          onScroll={useAnimatedScrollHandler(event => {
            scrollX.value = event.contentOffset.x;
          })}
          renderItem={renderTabContent}
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  tabIndicator: {
    height: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  tabHeaderText: {
    textAlign: 'center',
    fontFamily: 'MTNBrighterSans-Medium',
    fontSize: gsw(12),
    lineHeight: gsh(15.6),
    color: '#004F71',
  },
  tabHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    paddingHorizontal: 4,
  },
  tabBar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: gsh(36),
    flex: 1,
    // backgroundColor: "red",
  },
  mainContainer: {
    borderColor: '#5f5f5f',
    flexGrow: 1,
  },
});

export default Tab;
