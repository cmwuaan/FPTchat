import { FC } from 'react';
import Classes from './QuickChat.module.scss';

interface QuickChatProps {
  title: string;
  description: string;
}

export const QuickChat: FC<QuickChatProps> = (props) => {
  const { title, description } = props;

  return (
    <div className={Classes.QuickChatContainer}>
      <h5 className={Classes.Title}>{title}</h5>
      <p className={Classes.Description}>{description}</p>
    </div>
  );
};
