import * as React from 'react';
import ExpandableText from '../ExpandableText';
import { ContentContainer, PostTitle } from './styles';

interface CardContentProps {
  cardTitle: string;
  cardDate: string;
  cardSummary: string
}

const CardContent: React.FC<CardContentProps> = ({ cardTitle, cardDate, cardSummary }) => (
  <ContentContainer>
    <PostTitle>{`${cardTitle} - ${cardDate}`}</PostTitle>
    <ExpandableText TextSummary={cardSummary} />
  </ContentContainer>
);

export default CardContent;
