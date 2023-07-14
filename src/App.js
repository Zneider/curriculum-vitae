import React, { Component } from 'react'
import styled from 'styled-components'
import {
  LeftColumnFirst,
  LeftColumn,
  RightColumn,
} from './components/atoms/Column'
import Row from './components/atoms/Row'
import { Label, LabelBold } from './components/atoms/Label'
import Text from './components/atoms/Text'
import Work from './components/Work/Work'
import { Header, SubHeader } from './components/atoms/Header'
import Education from './components/Education/Education'
import SpaceRow from './components/molecules/SpaceRow'
import data from './data.json'

const Container = styled.article`
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
`

class App extends Component {
  render() {
    return (
      <Container>
        <Row as="header">
          <LeftColumnFirst>
            <Header>Curriculum Vitae</Header>
          </LeftColumnFirst>
        </Row>
        <section>
          <Row>
            <LeftColumn>
              <SubHeader as="h2">Personal information</SubHeader>
            </LeftColumn>
          </Row>
          {data.profile.fields.map((field) => (
            <Row key={`profile_${field.key}`}>
              <LeftColumn>
                <Label>{field.key}</Label>
              </LeftColumn>
              <RightColumn>
                <Text>{field.value}</Text>
              </RightColumn>
            </Row>
          ))}
        </section>
        <section>
          <SpaceRow />
          <Row>
            <LeftColumn>
              <SubHeader as="h2">Work experience</SubHeader>
            </LeftColumn>
          </Row>
          {data.workExperience.map((work, idx) => (
            <Work key={`work_${idx}`} work={work} />
          ))}
        </section>
        <section>
          <Row>
            <LeftColumn>
              <SubHeader as="h2">Education</SubHeader>
            </LeftColumn>
          </Row>
          {data.education.map((education, idx) => (
            <Education key={`work_${idx}`} education={education} />
          ))}
        </section>
        <section>
          <Row>
            <LeftColumn>
              <SubHeader as="h2">Personal skills and competencies</SubHeader>
            </LeftColumn>
          </Row>
          <Row>
            <LeftColumn>
              <LabelBold>Language</LabelBold>
            </LeftColumn>
          </Row>
          <Row>
            <LeftColumn>
              <Label>English spoken</Label>
            </LeftColumn>
            <RightColumn>
              <Text>Conversation: Proficient</Text>
              <Text>Presentation: Above average</Text>
            </RightColumn>
          </Row>
          <Row>
            <LeftColumn>
              <Label>English written</Label>
            </LeftColumn>
            <RightColumn>
              <Text>Reading: Proficient</Text>
              <Text>Writing: Proficient</Text>
            </RightColumn>
          </Row>
          <Row>
            <LeftColumn>
              <Label>Swedish/Nowegian spoken</Label>
            </LeftColumn>
            <RightColumn>
              <Text>Conversation: Some experience</Text>
              <Text>Presentation: Beginner</Text>
            </RightColumn>
          </Row>
          <Row>
            <LeftColumn>
              <Label>Swedish/Nowegian written</Label>
            </LeftColumn>
            <RightColumn>
              <Text>Reading: Some experience</Text>
              <Text>Writing: Beginner</Text>
            </RightColumn>
          </Row>
          <SpaceRow />
          <Row>
            <LeftColumn>
              <LabelBold>Social skills and competencies</LabelBold>
            </LeftColumn>
          </Row>
          <Row>
            <LeftColumn>
              <Label>Socially</Label>
            </LeftColumn>
            <RightColumn>
              <Text>{data.profile.skills.social}</Text>
            </RightColumn>
          </Row>
        </section>
        <SpaceRow />
        <section>
          <Row>
            <LeftColumn>
              <Label>Professional skills</Label>
            </LeftColumn>
            <RightColumn>
              <Text>{data.profile.skills.professional.frontend}</Text>
              <br />
              <Text>{data.profile.skills.professional.backend}</Text>
              <br />
              <Text>{data.profile.skills.professional.databases}</Text>
            </RightColumn>
          </Row>
        </section>
        <SpaceRow />
        <section>
          <Row>
            <LeftColumn>
              <LabelBold>Additional info</LabelBold>
            </LeftColumn>
          </Row>
          <Row>
            <LeftColumn>
              <Label>Spare time interests</Label>
            </LeftColumn>
            <RightColumn>
              <Text>{data.profile.interests}</Text>
            </RightColumn>
          </Row>
        </section>
      </Container>
    )
  }
}

export default App
