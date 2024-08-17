import { FC } from 'react';
import Classes from './QuickChat.module.scss';
import { Endpoint } from '../../../common/endpoint';
import { ConversionType, GetResponseQuery, ResponseData } from '../../../service/types';
import { useSendGetRequest } from '../../../common/useApiRequest';
import { isUserAskedAtom } from '../../../utils/atom';
import { useSetAtom } from 'jotai';

interface QuickChatProps {
  title: string;
  description: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpdateConversionList: () => void;
  setConversionList: React.Dispatch<React.SetStateAction<ConversionType[]>>;
}

export const QuickChat: FC<QuickChatProps> = ({ title, description, setConversionList }) => {
  const { isMutating: isSendingQuestion, trigger: getAnswerDataTrigger } = useSendGetRequest<
    ResponseData,
    GetResponseQuery['query']
  >(Endpoint.Retrieve, {
    revalidate: false,
  });
  const setIsUserAsked = useSetAtom(isUserAskedAtom);
  const onClick = async () => {
    if (!isSendingQuestion) {
      setConversionList((prev) => [
        ...prev,
        {
          isBot: false,
          text: description,
        },
      ]);

      try {
        const answer = await getAnswerDataTrigger(description);
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
    }
    setIsUserAsked(true);
  };

  return (
    <div className={Classes.QuickChatContainer} onClick={onClick}>
      <h5 className={Classes.Title}>{title}</h5>
      <p className={Classes.Description}>{description}</p>
    </div>
  );
};
