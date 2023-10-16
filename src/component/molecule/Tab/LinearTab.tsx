import useDimension from '@/hooks/useDimension';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {gpmsh, gpsw} from '@/utils/parseTokenStyle';
import {Box} from '@atom';
import {useTheme} from '@shopify/restyle';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Platform,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  findNodeHandle,
} from 'react-native';
import {NativeViewGestureHandler} from 'react-native-gesture-handler';

type LinearTabType = {
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
  ref: React.RefObject<View> | null;
  renderScene: () => JSX.Element;
}
const LinearTab = ({
  tabData,
  pH,
  gap,
  headerStyle = {},
  spaceEvenly,
}: LinearTabType) => {
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
          marginTop: gpmsh('10'),
          width: widths,
          left: 0,
          backgroundColor: '#ffcb05',
          borderTopLeftRadius: gpsw(20),
          borderTopRightRadius: gpsw(20),
          // borderBottomLeftRadius: 6,
          // borderBottomRightRadius: 6,
          transform: [
            {
              translateX,
            },
          ],
        }}
      />
    );
  };
  return (
    <Box 
    flexGrow={1}
    >
      <Box
        ref={containerRef}
        // bg={'red40'}
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: pH,
            marginLeft: 10,
            // flex: 1,
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
              key={`${title}-${index}`}
              hitSlop={{bottom: 20}}>
              <Box
                ref={ref}
                // pt={'vxxs'}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  // flex:1
                }}>
                <Animated.Text
                  style={{
                    color: textColor,
                    fontFamily: 'MTNBrighterSans-Bold',
                    fontSize: gsw(12),
                    lineHeight: gsh(15.6),
                    textAlign: 'center',
                    textTransform: 'uppercase',
                  }}>
                  {title}
                </Animated.Text>
              </Box>
            </TouchableOpacity>
          );
        })}
      </Box>

      {/* Details */}
      <Box
        flexGrow={1}
        style={{
          backgroundColor: 'white',
          marginTop: gpmsh(14),
          borderRadius: 15,
          paddingTop: gap,
        }}>
        <Animated.FlatList
          ref={tabRef}
          data={tabData}
          horizontal
          bounces={false}
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment={'center'}
          scrollEnabled={Platform.OS === 'ios'}
          showsHorizontalScrollIndicator={false}
          style={{
            flex: 1,
          }}
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

export default LinearTab;
