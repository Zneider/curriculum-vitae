import React from 'react';
import Row from '../atoms/Row';
import { LeftColumn } from '../atoms/Column';
import Space from '../atoms/Space';

const SpaceRow = () => (
  <Row>
    <LeftColumn>
      <Space />
    </LeftColumn>
  </Row>
);

export default SpaceRow;
