// import {nodeApi} from '../axios';
import decrypt from '@/utils/encryption/decrypt';

// import {nodeApi} from '../axios';
// import {nodeApi} from '../index';
import { apiSlice } from '../index2';

export const accessplatformApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signInData: builder.mutation<any, any>({
      query: body => {
        console.log('body ', body)
        return {
          url: '/accessplatform/login',
          responseHandler: response => response.text(),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            loginrequest: {
              identity: body.mobileNo,
              credential: {
                secret: body.pin,
                type: 'pincode',
              },
            },
          },
        };
      },
      transformResponse: async responseData => {
        console.log('responseData', responseData);
        // const de = await decrypt(responseData);
        // console.log('de', JSON.parse(de as string));
        // return JSON.parse(de as string);
        // const {Sessionid = ''} = responseData;
        // callback(Sessionid);
        return responseData;
      },
      transformErrorResponse: (errorResponse: any) => {
        console.log('errorResponse', errorResponse);
        // return decrypt(errorResponse.data);
        return errorResponse.data;
      },
    }),
  }),
});

export const {useSignInDataMutation} = accessplatformApi;
