import useDimension from '@/hooks/useDimension';
import {Theme} from '@/typings/globalTheme';
import {gpmsh, gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, ScrollView, Text} from '@atom';
import {useTheme} from '@shopify/restyle';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  findNodeHandle,
} from 'react-native';
// import Animated from 'react-native-reanimated';

const tabData = [
  {title: 'SUGGESTED'},
  {title: 'PAY'},
  {title: 'RECHARGE'},
  {title: 'CHECKING'},
  {title: 'AGAIN'},
  {title: 'LAST'},
  // {title: 'RECssqHARGE'},
  // {title: 'RECHA42RGE'},
];
type ScrollTabType = {
  gap?: any;
  pH?: any;
  spaceEvenly?: boolean;
  headerStyle?: StyleProp<ViewStyle>;
  tabData: {
    title: string;
    renderScene: () => JSX.Element;
  }[];
};
interface TabItem {
  title: string;
  ref: React.RefObject<View> | null; // Replace 'View' with the type of your component if not a View
  renderScene: () => JSX.Element;
}
const ScrollLinearTab = ({
  tabData,
  pH,
  headerStyle,
  gap,
  spaceEvenly,
}: ScrollTabType) => {
  const {colors} = useTheme<Theme>();
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width, height} = useDimension();
  const [measureLayout, setmeasureLayout] = useState<
    Array<{x: number; y: number; width: number; height: number}>
  >([]);
  const containerRef = useRef<View | null>(null);
  const CONTENT_WIDTH = width;
  const tabRef = useRef<FlatList>(null);
  const tabPosition = Animated.divide(scrollX, CONTENT_WIDTH);
  const tabDatas: TabItem[] = tabData.map(tab => ({
    ...tab,
    ref: React.createRef(),
  }));

  const onFeedTabPress = useCallback((index: number) => {
    tabRef?.current?.scrollToOffset({
      offset: index * CONTENT_WIDTH,
    });
  }, []);

  useEffect(() => {
    let ml: Array<{x: number; y: number; width: number; height: number}> = [];
    tabDatas.forEach(b => {
      const textRefHandle = findNodeHandle(containerRef.current);
      b?.ref?.current?.measureLayout(textRefHandle!, (x, y, width, height) => {
        ml.push({
          x,
          y,
          width,
          height,
        });
        if (ml.length === tabDatas.length) {
          setmeasureLayout(ml);
        }
      });
    });
  }, [containerRef.current]);

  const TabIndicator = () => {
    const inputRange = tabDatas.map((_, i) => i * CONTENT_WIDTH);
    const outputRange = measureLayout.map(measure => measure.x);
    const outputRange2 = measureLayout.map(measure => measure.width);
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange,
      extrapolate: 'clamp',
    });
    const widths = scrollX.interpolate({
      inputRange,
      outputRange: outputRange2,
      extrapolate: 'clamp',
    });
    // console.log('translateX', scrollX);
    return (
      <Animated.View
        style={{
          position: 'absolute',
          height: gpmsh('4'),
          top: '100%',
          marginTop: gpmsh(10),
          width: widths,
          left: 0,
          borderRadius: 20,
          backgroundColor: '#ffcb05',
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          transform: [
            {
              translateX,
            },
          ],
        }}
      />
    );
  };
  // ScrollView
  return (
    <Box
    flexGrow={1}
    >
      <ScrollView
        ref={containerRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={{
          flexGrow: 0,
        }}
        contentContainerStyle={[
          {
            alignItems: 'center',
            paddingHorizontal: pH,
            paddingLeft: pH + 10,
            flexGrow: 1,
            paddingBottom: gpmsh(14),
            flexDirection: 'row'
            // backgroundColor: 'blue'
          },
          headerStyle,
          spaceEvenly && {justifyContent: 'space-between'},
        ]}>
        {/* Tab  Indicator */}
        {measureLayout.length > 0 && <TabIndicator />}
        {tabDatas.map(({title, ref}, index) => {
          const textColor = tabPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [colors.lightGrey, colors.momoBlue, colors.lightGrey],
            extrapolate: 'clamp',
          });
          return (
            <TouchableOpacity
              onPress={() => {
                onFeedTabPress(index);
              }}
              key={`${title}-${index}`}>
              <View
                ref={ref}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Animated.Text
                  style={{
                    color: textColor,
                    fontFamily: 'MTNBrighterSans-Bold',
                    fontSize: gpsw(12),
                    lineHeight: gpsh(15.6),
                    textAlign: 'center',
                    textTransform: 'uppercase',
                  }}>
                  {title}
                </Animated.Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Details */}

      <Box
        flexGrow={1}
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
        }}>
        <Animated.FlatList
          ref={tabRef}
          data={tabDatas}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment={'center'}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={({item: {renderScene}, index}) => {
            return (
              <View
                style={{
                  width: CONTENT_WIDTH,
                  maxWidth: CONTENT_WIDTH,
                  // backgroundColor: '#e828e8',
                  backgroundColor: '#e8e8e8',
                  flexGrow: 1,
                }}>
                {renderScene()}
              </View>
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default ScrollLinearTab;
