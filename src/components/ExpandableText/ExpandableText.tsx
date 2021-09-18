import * as React from 'react';
import { shortenedSummary } from '../../utils/helper';
import { ContentSummary, ExpandButton } from './styles';

interface ExpandableTextProps {
  ImageExplanation: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ ImageExplanation }) => {
  const [collapse, setCollapse] = React.useState<boolean>(true);
  return (
    <>
      {ImageExplanation.split(' ').length > 50 && collapse ? (
        <p>
          <ContentSummary>
            {shortenedSummary(ImageExplanation)}
          </ContentSummary>
          <ExpandButton type="button" onClick={() => setCollapse(false)}>
            ...more
          </ExpandButton>
        </p>
      ) : (
        <p>{ImageExplanation}</p>
      )}
    </>
  );
};

export default ExpandableText;
