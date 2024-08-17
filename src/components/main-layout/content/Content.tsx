import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

type ContentProps = HTMLAttributes<HTMLDivElement>;

export const Content: FC<ContentProps> = (props) => {
  const { children, className } = props;
  const contentClassNames = classNames(className);
  return <div className={contentClassNames}>{children}</div>;
};
