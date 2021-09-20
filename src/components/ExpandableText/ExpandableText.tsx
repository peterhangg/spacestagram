import * as React from 'react';
import { shortenedSummary } from '../../utils/helper';
import { ContentSummary, ExpandButton } from './styles';

interface ExpandableTextProps {
  TextSummary: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ TextSummary }) => {
  const [collapse, setCollapse] = React.useState<boolean>(true);
  return (
    <>
      {TextSummary.split(' ').length > 50 && collapse ? (
        <ContentSummary>
          {shortenedSummary(TextSummary)}
          <span>
            <ExpandButton type="button" onClick={() => setCollapse(false)}>
              ...more
            </ExpandButton>
          </span>
        </ContentSummary>
      ) : (
        <ContentSummary>{TextSummary}</ContentSummary>
      )}
    </>
  );
};

export default ExpandableText;
