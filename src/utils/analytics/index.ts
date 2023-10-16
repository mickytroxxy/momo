import * as firebase from '../firebase/analytics';

export type actionType = 'ScreenLoaded' | 'clicked' | 'success' | 'error';

export type eventNameType = '';

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
) => {
  firebase.logEvent(eventName, actionType, payload);
};

export const logScreenChange = async (screenName: string) => {
  firebase.logScreenChange(screenName);
};

export const logScreenLoaded = async (screenName: string, data = {}) => {
  firebase.logScreenLoaded(screenName, data);
};

export const logCustomEvent = async (name: string, data = {}) => {
  firebase.logCustomEvent(name, data);
};

export const logClickEvent = async (name: string, data = {}) => {
  firebase.logClickEvent(name, data);
};
export const logInputFocusEvent = async (name: string, data = {}) => {
  firebase.logInputFocusEvent(name, data);
};

export const logInputBlurEvent = async (name: string, data = {}) => {
  firebase.logInputBlurEvent(name, data);
};

export const logInputIconPressEvent = async (name: string, data = {}) => {
  firebase.logInputIconPressEvent(name, data);
};

export const logSuccessEvent = async (name: string, data = {}) => {
  firebase.logSuccessEvent(name, data);
};

export const logErrorEvent = async (name: string, data = {}) => {
  firebase.logErrorEvent(name, data);
};
