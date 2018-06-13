import React from 'react';
import Row from "../atoms/Row";
import { LeftColumn, RightColumn } from "../atoms/Column";
import Label from "../atoms/Label";
import Text from "../atoms/Text";


const ContentRow = ({ label, text }) => (
    <Row>
      <LeftColumn>
        <Label>{label}</Label>
      </LeftColumn>
      <RightColumn>
        <Text>{text}</Text>
      </RightColumn>
    </Row>
  );

  export default ContentRow;
