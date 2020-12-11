import React from 'react';
import Row from '../atoms/Row';
import { LeftColumn, RightColumn } from '../atoms/Column';
import { Label } from '../atoms/Label';
import Text from '../atoms/Text';

const NameAndAddressRow = ({ name, address }) => (
  <Row>
    <LeftColumn>
      <Label>Navn og adresse på arbejdsgiver</Label>
    </LeftColumn>
    <RightColumn>
      <Text>
        {name}
        <br />
        <address>
        {address}
        </address>
      </Text>
    </RightColumn>
  </Row>
);

export default NameAndAddressRow;
