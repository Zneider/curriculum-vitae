import React, { Component } from 'react';
import styled from 'styled-components';
import { LeftColumnFirst, LeftColumn, RightColumn } from './components/atoms/Column';
import Row from './components/atoms/Row';
import { Label, LabelBold } from './components/atoms/Label';
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
        <Row>
          <LeftColumn>
            <SubHeader>Personlige færdigheder og kompetencer</SubHeader>
          </LeftColumn>
        </Row>
        <Row>
          <LeftColumn>
            <LabelBold>Sprog</LabelBold>
          </LeftColumn>
        </Row>
        <Row>
          <LeftColumn>
            <Label>Engelsk tale</Label>
          </LeftColumn>
          <RightColumn>
            <Text>Samtale: God</Text>
            <Text>Præsentation: Over middel</Text>
          </RightColumn>
        </Row>
        <Row>
          <LeftColumn>
            <Label>Engelsk skrift</Label>
          </LeftColumn>
          <RightColumn>
            <Text>Læse: Meget god</Text>
            <Text>Skrive: Meget god</Text>
          </RightColumn>
        </Row>
        <Row>
          <LeftColumn>
            <Label>Svensk/Norsk tale</Label>
          </LeftColumn>
          <RightColumn>
            <Text>Samtale: Øvet</Text>
            <Text>Præsentation: Begynder</Text>
          </RightColumn>
        </Row>
        <Row>
          <LeftColumn>
            <Label>Svensk/Norsk skrift</Label>
          </LeftColumn>
          <RightColumn>
            <Text>Læse: Øvet</Text>
            <Text>Skrive: Begynder</Text>
          </RightColumn>
        </Row>
        <SpaceRow />
        <Row>
          <LeftColumn>
            <LabelBold>Sociale færdigheder og kompetencer</LabelBold>
          </LeftColumn>
        </Row>
        <Row>
          <LeftColumn>
            <Label>Socialt</Label>
          </LeftColumn>
          <RightColumn>
            <Text>
              {data.profile.skills.social}
            </Text>
          </RightColumn>
        </Row>
        <SpaceRow />
        <Row>
          <LeftColumn>
            <Label>Faglige kompetencer</Label>
          </LeftColumn>
          <RightColumn>
            <Text>
              {data.profile.skills.professional.frontend}
            </Text>
            <br />
            <Text>
              {data.profile.skills.professional.backend}
            </Text>
            <br />
            <Text>
              {data.profile.skills.professional.databases}
            </Text>
          </RightColumn>
        </Row>
        <SpaceRow />
        <Row>
          <LeftColumn>
            <LabelBold>Yderligere info</LabelBold>
          </LeftColumn>
        </Row>
        <Row>
          <LeftColumn>
            <Label>
              Fritidsinteresser
            </Label>
          </LeftColumn>
          <RightColumn>
            <Text>{data.profile.interests}</Text>
          </RightColumn>
        </Row>
      </Container>
    );
  }
}

export default App;
