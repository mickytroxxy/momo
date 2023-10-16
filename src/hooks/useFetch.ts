import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const BASE_URL = ' https://momoapimdev.mtn.com/api/ae/biz/';
type RequestTypes = {

} 
const setHeaders = (accessToken:any) => {
  if(accessToken){
    console.log(accessToken,'--------')
    //axios.defaults.headers.common['Cookie'] = accessToken;
  }
};
const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { accessToken } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    //setHeaders(accessToken)
  }, []);
  const fetchData = async (endPoint: string, method: "POST" | "GET" | "UPDATE" | "DELETE", data?: object) => {
    setIsLoading(true);
    try{
      const url = BASE_URL + endPoint;
      const response = await axios({ method, url, data});
      return response.data;
    }catch (error) {
      if(!axios.isCancel(error)) {
        console.log(error);
      }
      return null;
    }finally {
      setIsLoading(false);
    }
  };

  return { isLoading, fetchData };
};

export default useFetch;