import * as React from 'react';
import ExpandableText from '../ExpandableText';
import { ContentContainer, PostTitle } from './styles';

interface CardContentProps {
  CardTitle: string;
  CardDate: string;
  CardSummary: string
}

const CardContent: React.FC<CardContentProps> = ({ CardTitle, CardDate, CardSummary }) => (
  <ContentContainer>
    <PostTitle>{`${CardTitle} - ${CardDate}`}</PostTitle>
    <ExpandableText TextSummary={CardSummary} />
  </ContentContainer>
);

export default CardContent;
