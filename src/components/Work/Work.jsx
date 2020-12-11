import React from 'react'
import ContentRow from '../molecules/ContentRow'
import NameAndAddressRow from '../molecules/NameAndAddressRow'
import SpaceRow from '../molecules/SpaceRow'

const DateRow = ({ startDate, endDate }) => (
  <ContentRow label="Dato" text={`${startDate} - ${endDate || 'nu'}`} />
)

const Position = ({ title }) => <ContentRow label="Stilling" text={title} />

const PrimaryTasks = ({ primaryTasks }) => (
  <ContentRow label="Primære opgaver" text={primaryTasks} />
)

const Description = ({ description }) => (
  <ContentRow label="" text={description} />
)

const Tools = ({ techStack }) => (
  <ContentRow label="Sprog, tools og libraries" text={techStack} />
)

const Work = ({ work }) => {
  const { address, name } = work.company
  const {
    title,
    startDate,
    endDate,
    primaryTasks,
    description,
    techStack,
  } = work.position

  return (
    <React.Fragment>
      <DateRow startDate={startDate} endDate={endDate} />
      <Position title={title} />
      <PrimaryTasks primaryTasks={primaryTasks} />
      <Description description={description} />
      <Tools techStack={techStack.join(', ')} />
      <NameAndAddressRow name={name} address={address} />
      <SpaceRow />
    </React.Fragment>
  )
}

export default Work
