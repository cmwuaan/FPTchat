import { FC } from 'react';

interface Props {
  condition?: boolean;
  children: React.ReactNode;
}

export const ConditionalComponent: FC<Props> = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};
