import * as React from 'react';
import { GlobalStyle } from '../../utils/Global';
import { PageLayoutStyles } from './styles';
import Navbar from '../Navbar';

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <PageLayoutStyles>
    <GlobalStyle />
    <Navbar />
    {children}
  </PageLayoutStyles>
);

export default PageLayout;
