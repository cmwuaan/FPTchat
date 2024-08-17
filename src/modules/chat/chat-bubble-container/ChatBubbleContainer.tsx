import { FC } from 'react';
import { ChatBubble } from '../chat-bubble/ChatBubble';
import Classes from './ChatBubbleContainer.module.scss';
import { ConversionType } from '../../../service/types';
import { ConditionalComponent } from '../../../components/conditional-component/ConditionalComponent';

interface Props {
  key?: unknown;
  data: ConversionType;
  isLoading?: boolean;
}

export const ChatBubbleContainer: FC<Props> = ({ data, isLoading }) => {
  return (
    <div className={Classes.ChatBubbleContainer}>
      <ConditionalComponent condition={!data.isBot}>
        <ChatBubble type="question" data={data.text} className={Classes.TopRight} />
      </ConditionalComponent>
      <ConditionalComponent condition={data.isBot}>
        <ChatBubble
          isLoading={isLoading}
          type="answer"
          data={data.text === undefined ? 'Error' : data.text}
          className={Classes.BottomLeft}
        />
      </ConditionalComponent>
    </div>
  );
};
