import React from 'react'

const StarMeButton = ({ url }) => {
  return (
    <a className="btn" id="star-button" href={url}>
      <span className="octicon octicon-octoface" />
      {' '}
      Star on GitHub
    </a>
  )
}

export default StarMeButton
