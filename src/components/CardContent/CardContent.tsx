import * as React from 'react';
import { dateConverter } from '../../utils/helper';
import ExpandableText from '../ExpandableText';
import { ContentContainer, PostTitle, PostDate } from './styles';

interface CardContentProps {
  cardTitle: string;
  cardDate: string;
  cardSummary: string
}

const CardContent: React.FC<CardContentProps> = ({ cardTitle, cardDate, cardSummary }) => {
  const date = dateConverter(cardDate);

  return (
    <ContentContainer>
      <PostTitle>{`${cardTitle}`}</PostTitle>
      <PostTitle>
        Captured on:
        {' '}
        <PostDate>{date}</PostDate>
      </PostTitle>
      <ExpandableText TextSummary={cardSummary} />
    </ContentContainer>
  );
};

export default CardContent;
