import React, { Component } from 'react';
import styled from 'styled-components';
import { LeftColumnFirst, LeftColumn, RightColumn } from './components/atoms/Column';
import Row from './components/atoms/Row';
import Label from './components/atoms/Label';
import Text from './components/atoms/Text';
import Work from './components/Work/Work';
import { Header, SubHeader } from './components/atoms/Header';
import Education from './components/Education/Education';
import SpaceRow from './components/molecules/SpaceRow';
import data from './data.json';

const Container = styled.div`
  width: 210mm;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20mm;
  justify-content: space-around;
  @media screen {
    margin: 0 auto;
  }
  background-color: white;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Row>
          <LeftColumnFirst>
            <Header>Curriculum Vitae</Header>
          </LeftColumnFirst>
        </Row>
        <Row>
          <LeftColumn>
            <SubHeader>Personlig information</SubHeader>
          </LeftColumn>
        </Row>
        {data.profile.fields.map(field => (
          <Row key={`profile_${field.key}`}>
            <LeftColumn>
              <Label>{field.key}</Label>
            </LeftColumn>
            <RightColumn>
              <Text>{field.value}</Text>
            </RightColumn>
          </Row>
        ))}
        <SpaceRow />
        <Row>
          <LeftColumn>
            <SubHeader>Erhvervserfaring</SubHeader>
          </LeftColumn>
        </Row>
        {data.workExperience.map((work, idx) => <Work key={`work_${idx}`} work={work} />)}
        <Row>
          <LeftColumn>
            <SubHeader>Uddannelse</SubHeader>
          </LeftColumn>
        </Row>
        {data.education.map((education, idx) => <Education key={`work_${idx}`} education={education} />)}
      </Container>
    );
  }
}

export default App;
