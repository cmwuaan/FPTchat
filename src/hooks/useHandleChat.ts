import { useState } from 'react';
import { ConversionType, GetResponseQuery, ResponseData } from '../service/types';
import { useSendGetRequest } from '../common/useApiRequest';
import { Endpoint } from '../common/endpoint';
import { useSetAtom } from 'jotai';
import { isUserAskedAtom } from '../utils/atom';

export const useHandleChat = () => {
  const [searchValue, setSearchValue] = useState('');
  const setIsUserAsked = useSetAtom(isUserAskedAtom);
  const [conversionList, setConversionList] = useState<ConversionType[]>([
    {
      isBot: true,
      text: 'Bạn đang thắc mắc điều gì?',
    },
  ]);
  const { isMutating: isSendingQuestion, trigger: getAnswerDataTrigger } = useSendGetRequest<
    ResponseData,
    GetResponseQuery['query']
  >(Endpoint.Retrieve, {
    revalidate: false,
  });

  const onResetInput = () => {
    setSearchValue('');
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onUpdateConversionList = () => {
    if (!isSendingQuestion) {
      setConversionList((prev) => [
        ...prev,
        {
          isBot: false,
          text: searchValue,
        },
      ]);
      handleResponseData(searchValue);
    }
    onResetInput();
    setIsUserAsked(true);
  };

  const onKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (searchValue.trim() !== '') {
        onUpdateConversionList();
        return;
      }
    }
  };

  const handleResponseData = async (searchValue: string) => {
    try {
      const answer = await getAnswerDataTrigger(searchValue);
      if (!isSendingQuestion) {
        setConversionList(
          (prev) =>
            prev &&
            prev.concat({
              isBot: true,
              text: answer.data,
            })
        );
      } else {
        console.log('Loading...');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    searchValue,
    conversionList,
    isSendingQuestion,
    setSearchValue,
    setConversionList,
    onChangeInput,
    onKeyDownEnter,
    onUpdateConversionList,
  };
};
