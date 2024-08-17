import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

import Classes from './Layout.module.scss';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

export const Layout: FC<LayoutProps> = (props) => {
  const { children, className } = props;
  const layoutClassNames = classNames(className, Classes.Layout);
  return <div className={layoutClassNames}>{children}</div>;
};
