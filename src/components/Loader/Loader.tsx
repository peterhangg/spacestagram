import * as React from 'react';
import { DotWrapper, LoaderOverLay, Dot } from './styles';

const Loader: React.FC = () => (
  <LoaderOverLay>
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
      <Dot delay=".3s" />
      <Dot delay=".4s" />
    </DotWrapper>
  </LoaderOverLay>
);

export default Loader;
