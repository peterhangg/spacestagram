import * as React from 'react';
import { DotContainer, LoaderOverLay, Dot } from './styles';

const Loader: React.FC = () => (
  <LoaderOverLay>
    <DotContainer>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
      <Dot delay=".3s" />
      <Dot delay=".4s" />
    </DotContainer>
  </LoaderOverLay>
);

export default Loader;
