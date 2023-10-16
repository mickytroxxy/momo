import {View, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useTypedDispatch, useTypedSelector} from '@/store/store';
import {
  AlertMessageType,
  removeMessage,
  selectMessage,
} from '@/features/alert/alertSlice';
import icon from '@/constants/icon';
import {Box, Icon, Text} from '@/component/atom';
import {ScaledSheet} from 'react-native-size-matters';
import {
  alertCornerRadius,
  alertError,
  alertInfo,
  alertSuccess,
  alertWarning,
} from '@/style-dictionary-dist/momoStyle';
import {getFontSizeByWindowWidth} from '@/style/theme';
import { gpsw } from '@/utils/parseTokenStyle';

export const AlertContent = ({
  message,
  onHide,
}: {
  message: AlertMessageType;
  onHide: any;
}) => {
  const {duration, type, zIndex, title, close} = message;
  const {WarningIcon, InfoIcon, XIcon, SuccessIcon} = icon;
  const animationValue = useRef(new Animated.Value(0)).current;
  const dispatch = useTypedDispatch();

  let alertColor = alertSuccess;
  switch (type) {
    case 'error':
      alertColor = alertError;
      break;
    case 'warning':
      alertColor = alertWarning;
      break;
    case 'info':
      alertColor = alertInfo;
      break;
    case 'success':
      alertColor = alertSuccess;
      break;

    default:
      break;
  }

  function renderIcon() {
    return (
      <Box>
        {type === 'error' || type === 'warning' ? (
          <Icon color="white" name="WarningIcon" size={24} />
        ) : type === 'success' ? (
          <Icon color="white" name="SuccessIcon" size={24} />
        ) : (
          <Icon color="white" name="InfoIcon" size={24} />
        )}
      </Box>
    );
  }

  function renderMessage() {
    return (
      <Box
        flex={0.9}
        style={{
          marginTop: -2,
        }}>
        {title && (
          <Text
            fontSize={getFontSizeByWindowWidth(14)}
            lineHeight={getFontSizeByWindowWidth(18)}
            mb={'vxxs'}
            color={'white'}>
            {title}
          </Text>
        )}
        <Text
          fontSize={getFontSizeByWindowWidth(10)}
          lineHeight={getFontSizeByWindowWidth(13)}
          fontFamily="MTNBrighterSans-Regular"
          numberOfLines={2}
          color={'white'}>
          {message.message}
        </Text>
      </Box>
    );
  }

  const animationSequence = [
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }),
  ];
  if (!close) {
    animationSequence.push(
      Animated.delay(duration),
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    );
  }
  useEffect(() => {
    Animated.sequence(animationSequence).start(() => {
      !close && onHide();
    });

    return () => {};
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: alertColor,
          // alignItems: 'flex-start',
          alignItems: title ? 'flex-start' : 'center',
          opacity: animationValue,
          zIndex: 100 - zIndex!,
        },
      ]}>
      <Box
        style={{
          alignItems: title ? 'flex-start' : 'center',
          gap: gpsw(10)
        }}
        flexDirection={'row'}>
        {renderIcon()}
        {renderMessage()}
      </Box>
      {close && (
        <TouchableOpacity
          style={{
            // backgroundColor: 'red',
            height: '100%',
            width: '12%',
            // paddingLeft: 5,
            justifyContent: title ? 'flex-start' : 'center',
            // justifyContent: 'flex-start',
            alignSelf: 'stretch',
          }}
          onPress={() => {
            dispatch(removeMessage(message));
          }}>
          <Icon name="XIcon" color="white" size={18} />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const Alert = () => {
  const dispatch = useTypedDispatch();
  const messages = useTypedSelector(selectMessage);
  return (
    <>
      {messages.map((messg, index) => {
        const {message, duration} = messg;
        const msg: AlertMessageType = {
          ...messg,
          duration: duration * (index + 1),
          zIndex: (index + 1) * 10,
        };
        return (
          <AlertContent
            onHide={() => {
              dispatch(removeMessage(msg));
            }}
            key={message}
            message={msg}
          />
        );
      })}
      {/* </View> */}
    </>
  );
};

export default Alert;

const styles = ScaledSheet.create({
  safeArea: {
    backgroundColor: 'orange',
  },
  container: {
    flex: 1,
    flexGrow: 1,
    padding: getFontSizeByWindowWidth(12),
    // padding: 13,
    paddingRight: getFontSizeByWindowWidth(13),
    // paddingRight: 18,
    // paddingBottom: 20,
    margin: 10,
    position: 'absolute',
    bottom: '20@ms',
    left: 0,
    right: 0,
    backgroundColor: 'orange',
    borderRadius: gpsw(alertCornerRadius),
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    // height: 200
  },
  title: {color: 'white', fontWeight: 'bold'},
  description: {color: 'white'},
});

// ...StyleSheet.absoluteFillObject,
