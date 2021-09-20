import * as React from 'react';
import EmptyLikeImg from '../../assets/empty-likes.svg';
import {
  EmptyLikesContainer,
  ImageWrapper,
  LinkStyles,
  Text,
  Image,
} from './styles';

const EmptyLikes: React.FC = () => (
  <EmptyLikesContainer>
    <div>
      <ImageWrapper>
        <Image src={EmptyLikeImg} alt="Empty Likes" />
      </ImageWrapper>
      <Text>Your liked images are saved here!</Text>
      <Text>
        Go like an image
        {' '}
        <LinkStyles to="/">here.</LinkStyles>
      </Text>
    </div>
  </EmptyLikesContainer>
);

export default EmptyLikes;
