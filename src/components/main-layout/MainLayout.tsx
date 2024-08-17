import { FC, ReactNode } from 'react';
import { Layout } from '../layout/Layout';
import Classes from './MainLayout.module.scss';
import { Sidebar } from './sidebar/Sidebar';
import { Content } from './content/Content';
import { Header } from './header/Header';

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className={Classes.MainLayout}>
      <Sidebar />
      <Content className={Classes.ContentLayout}>
        <Header />
        {children}
      </Content>
    </Layout>
  );
};
