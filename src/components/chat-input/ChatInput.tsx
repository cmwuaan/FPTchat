import { FC } from 'react';
import Classes from './ChatInput.module.scss';
import { MdAttachFile } from 'react-icons/md';
import { RiUploadCloud2Fill } from 'react-icons/ri';
import { QuickChat } from '../../modules/chat/quick-chat/QuickChat';
import { quickQuestions } from '../../service/data';
import { ConditionalComponent } from '../conditional-component/ConditionalComponent';
import { useAtomValue } from 'jotai';
import { isUserAskedAtom } from '../../utils/atom';
import { ConversionType } from '../../service/types';

interface Props {
  isLoading?: boolean;
  searchValue: string;
  conversionList: ConversionType[];
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onUpdateConversionList: () => void;
  setSearchValue: (value: string) => void;
  setConversionList: React.Dispatch<React.SetStateAction<ConversionType[]>>;
}

export const ChatInput: FC<Props> = ({
  isLoading,
  searchValue,
  onChangeInput,
  onKeyDownEnter,
  onUpdateConversionList,
  setConversionList,
}) => {
  const isUserAsked = useAtomValue(isUserAskedAtom);

  return (
    <>
      <div className={Classes.InputContainer}>
        <ConditionalComponent condition={!isUserAsked}>
          <div className={Classes.QuickChat}>
            {quickQuestions.map((quickQuestion, index) => (
              <QuickChat
                key={index}
                title={quickQuestion.title}
                description={quickQuestion.description}
                onChangeInput={onChangeInput}
                onUpdateConversionList={onUpdateConversionList}
                setConversionList={setConversionList}
              />
            ))}
          </div>
        </ConditionalComponent>
        <div className={Classes.InputWrapper}>
          <button className={Classes.Button} disabled={isLoading}>
            <MdAttachFile className={Classes.IconButton} />
          </button>
          <input
            placeholder="Bạn đang thắc mắc điều gì?"
            className={Classes.Input}
            type="text"
            value={searchValue}
            onChange={onChangeInput}
            onKeyDown={onKeyDownEnter}
          />
          <button className={Classes.Button} onClick={onUpdateConversionList} disabled={isLoading}>
            <RiUploadCloud2Fill className={Classes.IconButton} />
          </button>
        </div>
      </div>
    </>
  );
};
