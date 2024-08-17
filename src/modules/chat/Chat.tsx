import { FC } from 'react';
import Classes from './Chat.module.scss';

import { ConditionalComponent } from '../../components/conditional-component/ConditionalComponent';
import { ChatBubbleContainer } from './chat-bubble-container/ChatBubbleContainer';
import { ConversionType } from '../../service/types';

interface Props {
  conversionList: ConversionType[];
}

export const Chat: FC<Props> = ({ conversionList }) => {
  return (
    <div className={Classes.ChatWrapper}>
      <ConditionalComponent condition={conversionList.length === 0}>
        <div className={Classes.LogoWrapper}>
          <img
            className={Classes.LogoImage}
            src="https://firebasestorage.googleapis.com/v0/b/exe-rag.appspot.com/o/fpt-chat%2Ffptlogo.png?alt=media&token=f4355cdc-02a7-4049-8bb1-2c2b7826aa00"
            alt="Logo"
          />
        </div>
      </ConditionalComponent>
      <ConditionalComponent condition={conversionList.length > 0}>
        <div className={Classes.ChatContent}>
          {conversionList.map((data, index) => (
            <ChatBubbleContainer key={index} data={data} />
          ))}
        </div>
      </ConditionalComponent>
    </div>
  );
};
