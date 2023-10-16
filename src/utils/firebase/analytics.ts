import analytics from '@react-native-firebase/analytics';
import {actionType} from '../analytics';

/**
 * Handles logging a custom analytics event to Firebase
 * @param eventName analytics event name
 * @param type type of event
 * @param payload event payload
 */
export const logEvent = async (
  eventName: string,
  actionType: actionType,
  payload: {[key: string]: any},
) => await analytics().logEvent(eventName, {...payload, action: actionType});

export const logScreenChange = async (screenName: string) => {
  await analytics().logScreenView({
    screen_name: screenName,
    screen_class: screenName,
  });
};

export const logScreenLoaded = async (screenName: string, data = {}) => {
  await analytics().logEvent('ScreenLoaded', {
    screen: screenName,
    ...data,
  });
};

export const logCustomEvent = async (name: string, data = {}) => {
  await analytics().logEvent(name, data);
};

export const logClickEvent = async (name: string, data = {}) => {
  await analytics().logEvent(name, {...data, action: 'clicked'});
};

export const logInputFocusEvent = async (name: string, data = {}) => {
  console.log('sho de bi bayii');
  
  await analytics().logEvent(name, {...data, action: 'inputfocus'});
};

export const logInputBlurEvent = async (name: string, data = {}) => {
  await analytics().logEvent(name, {...data, action: 'inputblur'});
};
export const logInputIconPressEvent = async (name: string, data = {}) => {
  await analytics().logEvent(name, {...data, action: 'inputiconpress'});
};

export const logSuccessEvent = async (name: string, data = {}) => {
  await analytics().logEvent(name, {...data, action: 'success'});
};

export const logErrorEvent = async (name: string, data = {}) => {
  await analytics().logEvent(name, {...data, action: 'error'});
};

// Returns the Firebase analytics instance
export const instance = () => analytics();
