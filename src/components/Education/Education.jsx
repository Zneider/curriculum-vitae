import React from 'react'
import ContentRow from '../molecules/ContentRow'
import SpaceRow from '../molecules/SpaceRow'

const DateRow = ({ startDate, endDate }) => (
  <ContentRow label="Date" text={`${startDate} - ${endDate}`} />
)

const TitleRow = ({ title }) => <ContentRow label="Title" text={title} />

const SummaryRow = ({ summary }) => (
  <ContentRow label="Primary subjects" text={summary} />
)

const InstitutionRow = ({ institution }) => (
  <ContentRow label="Educational institution" text={institution} />
)

const Education = ({ education }) => {
  const { title, startDate, endDate, institution, summary } = education
  return (
    <React.Fragment>
      <DateRow startDate={startDate} endDate={endDate} />
      <TitleRow title={title} />
      {summary && <SummaryRow summary={summary} />}
      <InstitutionRow institution={institution} />
      <SpaceRow />
    </React.Fragment>
  )
}

export default Education
