import * as React from 'react';
import {
  HeaderContainer,
  HeaderUser,
  ProfileIcon,
  ProfileIconContainer,
} from './styles';
import Shopify from '../../assets/shopify.svg';
import Dots from '../../assets/dots.svg';

const CardHeader: React.FC = () => (
  <HeaderContainer>
    <ProfileIconContainer>
      <ProfileIcon src={Shopify} alt="Shopify Icon" />
    </ProfileIconContainer>
    <HeaderUser>Shopify</HeaderUser>
    <div>
      <ProfileIcon src={Dots} alt="" />
    </div>
  </HeaderContainer>
);

export default CardHeader;
