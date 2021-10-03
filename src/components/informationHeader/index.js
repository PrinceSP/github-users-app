import React from 'react'

const UserHeader = ({name,dateJoin}) => {
  return (
    <div className="users-header-section">
      <div className='header-section-one'>
        <h1>the octocat</h1>
        <p>date should be here</p>
      </div>
      <p>@octocat</p>
      <p>This profile has no bio</p>
    </div>
  )
}

export default UserHeader
