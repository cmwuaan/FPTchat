import { FetcherExtraArgument } from '../service/types';
import { axiosInstance } from './axiosInstance';
import useSWRMutation, { SWRMutationConfiguration } from 'swr/mutation';

export const useSendGetRequest = <Data, Args = undefined, Error = Record<string, unknown>>(
  endpoint: string,
  options: SWRMutationConfiguration<Data, Error> = {}
) => {
  const fetcher = async (url: string, { arg }: FetcherExtraArgument<Args>) => {
    try {
      const requestUrl = arg ? `${url}?query=${arg}` : url;
      const response = await axiosInstance.get<Data>(requestUrl);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return useSWRMutation(endpoint, fetcher, options);
};
