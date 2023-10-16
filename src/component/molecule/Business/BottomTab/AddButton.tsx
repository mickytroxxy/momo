import {
  bottomNavBusinessFontColour1,
  bottomNavBusinessFontColour2,
  bottomNavBusinessTransactIcon,
} from '@/style-dictionary-dist/momoStyle';
import {
  getFontSizeByWindowHeight,
  getFontSizeByWindowWidth,
} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Icon, Text} from '@atom';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const fWidth = getFontSizeByWindowWidth(-110); //70 + 50
const fHeight = getFontSizeByWindowHeight(-83);
const sHeight = getFontSizeByWindowHeight(-102);
const tHeight = getFontSizeByWindowHeight(-83);
const tWidth = getFontSizeByWindowWidth(85); // 50 + 50

const AddButton = ({mode, toggleView, dummy}: any) => {
  const firstX = useAnimatedStyle(() => {
    return {
      left: withTiming(interpolate(mode.value, [0, 1], [20, fWidth]), {
        duration: 300,
        easing: Easing.linear,
      }),
    };
  });

  const firstY = useAnimatedStyle(() => {
    return {
      top: withTiming(interpolate(mode.value, [0, 1], [0, fHeight]), {
        duration: 300,
        easing: Easing.linear,
      }),
    };
  });

  const secondY = useAnimatedStyle(() => {
    return {
      top: withTiming(interpolate(mode.value, [0, 1], [0, sHeight]), {
        duration: 300,
        easing: Easing.linear,
      }),
    };
  });
  const thirdX = useAnimatedStyle(() => {
    return {
      left: withTiming(interpolate(mode.value, [0, 1], [20, tWidth]), {
        duration: 300,
        easing: Easing.linear,
      }),
    };
  });

  const thirdY = useAnimatedStyle(() => {
    return {
      top: withTiming(interpolate(mode.value, [0, 1], [0, tHeight]), {
        duration: 300,
        easing: Easing.linear,
      }),
    };
  });
  const opacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(interpolate(mode.value, [0, 0.5, 1], [0, 0, 1]), {
        duration: 300,
        easing: Easing.linear,
      }),
    };
  });

  const opacity1 = useAnimatedStyle(() => {
    return {
      opacity: withTiming(
        interpolate(mode.value, [0, 0.3, 0.6, 1], [0, 0, 0, 1]),
        {
          duration: 300,
          easing: Easing.linear,
        },
      ),
    };
  });

  const opacity2 = useAnimatedStyle(() => {
    return {
      opacity: withTiming(
        interpolate(mode.value, [0, 0.3, 0.6, 1], [1, 0, 0, 0]),
        {
          duration: 300,
          easing: Easing.linear,
        },
      ),
    };
  });
  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: gpsh('-29'),
        // bottom: 85,
        // bottom: gpsh(35),
        // bottom: dummy ? 0 : gpsh(35),
        gap: gpsh('10'),
        // top: 0,
        // backgroundColor: 'red',
        alignSelf: 'center',
        zIndex: 1000
        // right: 0,
      }}>
      <Animated.View
        style={[
          firstX,
          firstY,
          opacity,
          {
            position: 'absolute',
            gap: gpsh('12'),
          },
        ]}>
        <TouchableOpacity
          onPress={() => {}}
          style={[
            styles.floatingIconContainer,
            {
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <Icon name="SimIcon" size={parseInt(bottomNavBusinessTransactIcon)} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: gpsw('10'),
            lineHeight: gpsh('13'),
            textAlign: 'center',
            width:gpsw('50'),
            color: bottomNavBusinessFontColour1,
          }}>
          Recharge
        </Text>
      </Animated.View>
      <Animated.View
        style={[secondY, opacity, {position: 'absolute', gap: gpsh('12')}]}>
        <TouchableOpacity
          onPress={() => {}}
          style={[
            styles.floatingIconContainer,
            {
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <Icon
            name="TransactIcon"
            size={parseInt(bottomNavBusinessTransactIcon)}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: gpsw('10'),
            lineHeight: gpsh('13'),
            textAlign: 'center',
            color: bottomNavBusinessFontColour1,
          }}>
          Get Paid
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          thirdX,
          thirdY,
          opacity,
          {
            position: 'absolute',
            gap: gpsh('12'),
            alignItems: 'center',
          },
        ]}>
        <TouchableOpacity
          onPress={() => {}}
          style={[
            styles.floatingIconContainer,
            {
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <Icon
            name="WalletIcon"
            size={parseInt(bottomNavBusinessTransactIcon)}
          />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          style={{
            fontSize: gpsw('10'),
            lineHeight: gpsh('13'),
            textAlign: 'center',
            width: gpsw('79'),
            color: bottomNavBusinessFontColour1,
          }}>
          Make Payments
        </Text>
      </Animated.View>
      <TouchableOpacity
        onPress={toggleView}
        activeOpacity={1}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: getFontSizeByWindowHeight(46),
          width: getFontSizeByWindowHeight(46),
          borderRadius: getFontSizeByWindowHeight(35),
          backgroundColor: '#FFCB05',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View style={[opacity2]}>
            <Icon name="TransactIcon" size={30.67} />
          </Animated.View>
          <Animated.View
            style={[
              opacity1,
              {
                position: 'absolute',
              },
            ]}>
            <Icon name="BottomTabCloseIcon" fill={'#004F71'} size={20} />
          </Animated.View>
        </View>
      </TouchableOpacity>
      {/* <Text
        style={{
          color: bottomNavBusinessFontColour2,
          fontSize: gpsw('10'),
          lineHeight: gpsh('13'),
        }}>
        Transact
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  floatingIconContainer: {
    height: gpsh('46'),
    width: gpsh('46'),
    borderRadius: getFontSizeByWindowWidth(35),
    borderWidth: 4,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCB05',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export {AddButton};
