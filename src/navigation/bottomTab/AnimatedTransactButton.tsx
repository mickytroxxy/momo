import React, {useRef} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {gpsh} from '@/utils/parseTokenStyle';
import {Icon} from '@atom';

const SIZE = gsh(51);

const fWidth = gsw(-110); //70 + 50
const fHeight = gsh(-70);
const sHeight = gsh(-102);
const tHeight = gsh(-70);
const tWidth = gsw(90); // 50 + 50

const AddButton = ({mode, toggleView}: any) => {
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
        bottom: 0,
      }}>
      <Animated.View
        style={[
          firstX,
          firstY,
          styles.floatingIconContainer,
          opacity,
          {
            position: 'absolute',
            gap: gpsh('12'),
          },
        ]}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE / 2,
            height: SIZE / 2,
            borderRadius: SIZE / 4,
            // backgroundColor: '#48A2F8',
          }}>
          <Icon name="DollarDownIcon" size={44} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          secondY,
          opacity,
          styles.floatingIconContainer,
          {position: 'absolute', gap: gpsh('12')},
        ]}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE / 2,
            height: SIZE / 2,
            borderRadius: SIZE / 4,
            // backgroundColor: '#48A2F8',
          }}>
          <Icon name="TransactIcon" size={44} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          thirdX,
          thirdY,
          styles.floatingIconContainer,
          opacity,
          {
            position: 'absolute',
            gap: gpsh('12'),
            alignItems: 'center',
          },
        ]}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE / 2,
            height: SIZE / 2,
            borderRadius: SIZE / 4,
            // backgroundColor: '#48A2F8',
          }}>
          <Icon name="WalletIcon" size={44} />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
        onPress={toggleView}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: gsh(48),
          width: gsh(48),
          borderRadius: gsh(35),
          backgroundColor: '#FFCB05',
        }}>
        <View
          style={{
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View style={[opacity2]}>
            <Icon name="TransactIcon" size={31} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  floatingIconContainer: {
    height: gpsh('70'),
    width: gpsh('70'),
    borderRadius: gpsh('35'),
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
