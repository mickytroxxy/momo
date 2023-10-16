// import {nodeApi} from '../axios';
import encrypt from '@/utils/encryption/encrypt';
import decrypt from '@/utils/encryption/decrypt';

// import {nodeApi} from '../axios';
import {nodeApi} from '../index';
import {URLS} from '@/constants/urls';

const {GET_BALANCE} = URLS;

export const sessionApi = nodeApi.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.query<any, any>({
      query: body => ({
        url: GET_BALANCE,

        method: 'get',
        body: encrypt(body),
      }),
      transformResponse: responseData => {
        console.log('responseData', responseData);
        return decrypt(responseData);
      },
    }),
    login: builder.mutation<any, any>({
      query: body => {
        return {
          url: '/auth/login',
          responseHandler: response => response.text(),
          method: 'post',
          // data: body,
          body,
        };
      },
      transformResponse: async responseData => {
        console.log('responseData', responseData);
        const de = await decrypt(responseData);
        console.log('de', JSON.parse(de as string));
        return JSON.parse(de as string);
      },
      transformErrorResponse: (errorResponse: any) => {
        console.log('errorResponse', errorResponse);
        return decrypt(errorResponse.data);
      },
    }),
    initiate: builder.mutation<any, any>({
      query: body => ({
        url: '/subscriber/initiate',
        responseHandler: response => response.text(),
        method: 'POST',
        // data: body,
        body,
      }),
      transformResponse: responseData => {
        console.log('responseData', responseData);
        return decrypt(responseData);
      },
      transformErrorResponse: (errorResponse: any) => {
        console.log('errorResponse', errorResponse);
        return decrypt(errorResponse.data);
      },
    }),
  }),
});

export const {useGetUserQuery, useLoginMutation, useInitiateMutation} =
  sessionApi;
