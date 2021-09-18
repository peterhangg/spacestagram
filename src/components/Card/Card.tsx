import * as React from 'react';
import { IAPOD } from '../../type';
import {
  Button,
  ButtonContainer,
  CardImageStyles,
  CardStyles,
  ContentContainer,
  ContentSummary,
  ExpandButton,
  HeaderContainer,
  HeaderUser,
  ImageContainer,
  PostTitle,
  ProfileIcon,
  ProfileIconContainer,
} from './styles';
import Shopify from '../../assets/shopify.svg';
import Dots from '../../assets/dots.svg';
import Heart from '../../assets/heart.png';
import RedHeart from '../../assets/red-heart.png';
import ShareIcon from '../../assets/share.png';

interface CardProps {
  nasaImage: IAPOD
}

const Card: React.FC<CardProps> = ({ nasaImage }) => {
  const [favourite, setFavourite] = React.useState<boolean>(false);
  const [collapse, setCollapse] = React.useState<boolean>(true);
  const shortenedSummary = (string: string): string => {
    const textArr = string.split(' ');
    return textArr.length > 50
      ? `${textArr.slice(0, 50).join(' ')}`
      : textArr.join(' ');
  };
  return (
    <CardStyles>
      <HeaderContainer>
        <ProfileIconContainer>
          <ProfileIcon src={Shopify} alt="Shopify Icon" />
        </ProfileIconContainer>
        <HeaderUser>Shopify</HeaderUser>
        <div>
          <ProfileIcon src={Dots} alt="" />
        </div>
      </HeaderContainer>
      <ImageContainer>
        <CardImageStyles src={nasaImage.url} alt={nasaImage.title} />
      </ImageContainer>
      <ButtonContainer>
        <Button type="button" onClick={() => setFavourite(!favourite)}>
          <img src={favourite ? RedHeart : Heart} alt="heart icon" />
        </Button>
        <Button type="button">
          <img src={ShareIcon} alt="share icon" />
        </Button>
      </ButtonContainer>
      <ContentContainer>
        <PostTitle>{`${nasaImage.title} - ${nasaImage.date}`}</PostTitle>
        {nasaImage.explanation.split(' ').length > 50 && collapse ? (
          <>
            <p>
              <ContentSummary>
                {shortenedSummary(nasaImage.explanation)}
              </ContentSummary>
              <ExpandButton type="button" onClick={() => setCollapse(false)}>
                ...more
              </ExpandButton>
            </p>
          </>
        ) : (
          <p>{nasaImage.explanation}</p>
        )}
      </ContentContainer>
    </CardStyles>
  );
};

export default Card;
