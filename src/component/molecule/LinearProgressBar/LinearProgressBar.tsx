import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import {InView} from 'react-native-intersection-observer';
import {Box, Text} from '../../atom';
import {getFontSizeByWindowHeight as gsh} from '@/style/theme';
import {
  progressBg,
  progressGf,
  progressHeight,
} from '@/style-dictionary-dist/momoStyle';
import {gpsh} from '@/utils/parseTokenStyle';

type LinearProgressBarType = {
  progress: number;
  total: number;
  barColor?: string;
  backgroundColor?: string;
  height?: any;
  title?: string;
  unit?: string;
};

const LinearProgressBar = ({
  progress: pro,
  total,
  barColor = progressGf,
  backgroundColor = progressBg,
  height = progressHeight,
  title,
  unit,
}: LinearProgressBarType) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 500, // You can adjust the animation duration as needed
      useNativeDriver: false,
    }).start();
  }, [animatedValue, progress]);

  const barWidth = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });
  const handleStartAnimation = (inView: boolean) => {
    inView ? setProgress(pro / total) : setProgress(0); // Set the progress to 1 to trigger the animation
  };

  useFocusEffect(
    React.useCallback(() => {
      setProgress(pro / total);

      return () => setProgress(0);
    }, []),
  );
  const complete = progress * 100 === total;
  return (
    // <IOScrollView>
    <InView
      onChange={(inView: boolean) => {
        handleStartAnimation(inView);
      }}>
      <View>
        {title && (
          <Box
            flexDirection={'row'}
            mb={'vxs'}
            justifyContent={'space-between'}>
            <Text
              color={'momoBlue'}
              lineHeight={18}
              style={{
                fontSize: 13,
              }}>
              {title}
            </Text>
            <Text
              color={'grey'}
              lineHeight={18}
              style={{
                fontSize: 13,
              }}>
              <Text
                color={'momoBlue'}
                lineHeight={18}
                style={{
                  fontSize: 13,
                }}>
                {pro}
              </Text>
              /{total}
              {unit}
            </Text>
          </Box>
        )}
        <View
          style={{
            height: gsh(height),
            backgroundColor,
            overflow: 'hidden',
          }}>
          <Animated.View
            style={[
              {
                height: gpsh(height),
                width: barWidth,
                backgroundColor: barColor,
              },
              !complete && {
                borderTopRightRadius: gpsh(height) / 2,
                borderBottomRightRadius: gpsh(height) / 2,
              },
            ]}
          />
        </View>
      </View>
    </InView>
    // </IOScrollView>
  );
};

export default LinearProgressBar;
