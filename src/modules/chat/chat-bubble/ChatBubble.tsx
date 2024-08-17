import classNames from 'classnames';
import Classes from './ChatBubble.module.scss';
import { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ConditionalComponent } from '../../../components/conditional-component/ConditionalComponent';

interface Props {
  data: string;
  className?: string;
  speed?: number;
  type: 'question' | 'answer';
  isLoading?: boolean;
}

export const ChatBubble: FC<Props> = ({ data, className, speed = 50, type, isLoading }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: number;

    if (type === 'answer') {
      if (currentIndex < data.length) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + data[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, speed);
      }
      return () => clearTimeout(timeout);
    } else {
      setCurrentText(data);
    }
  }, [currentIndex]);

  return (
    <>
      <ConditionalComponent condition={isLoading}>
        <div className={classNames(Classes.ChatBubble, className)}>Answering...</div>
      </ConditionalComponent>
      <ConditionalComponent condition={!isLoading}>
        <ReactMarkdown className={classNames(Classes.ChatBubble, className)}>{currentText}</ReactMarkdown>
      </ConditionalComponent>
    </>
  );
};
