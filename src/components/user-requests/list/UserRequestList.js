import React from 'react'
import { Link } from 'react-router-dom'

import MainContent from '../../common/MainContent'
import fromNow from '../../../helpers/fromNow'

export default ({ requests }) => (
  <MainContent className="small container double-padding">
    <Link className="btn block button-outline" to="/requests/add-project" style={{ marginBottom: '2em' }}>
      <span className="octicon octicon-plus" />
      {' '}
      ADD A PROJECT
    </Link>
    <div className="card">
      <div className="header">
        My requests
        {' '}
        <span className="counter">({requests.length})</span>
      </div>
      {requests.length === 0 ? (
        <div className="card-row inner">You have not created any request.</div>
      ) : (
        requests.map(request => <Issue issue={request} key={request.number} />)
      )}
    </div>
  </MainContent>
)

const Issue = ({ issue }) => (
  <a className="card-row link inner" href={issue.html_url} target="_blank">
    <div>
      <div style={{ float: 'right' }}>
        <StateIcon state={issue.state} />
      </div>
      {issue.title}
    </div>
    <div className="text-secondary">
      Opened {fromNow(issue.created_at)}
    </div>
  </a>
)

const StateIcon = ({ state }) => {
  const color = state === 'closed' ? '#bd2c00' : '#6cc644'
  const icon = state === 'closed' ? 'closed' : 'opened'
  return <span style={{ color }} className={`octicon octicon-issue-${icon}`} />
}
