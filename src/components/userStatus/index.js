import React from 'react'

const UserStatus = ({repos='8',following='8987',followers='90'}) => {
  return (
    <div className="user-status">
      <div>
        <p>Repos</p>
        <h3>{repos}</h3>
      </div>
      <div>
        <p>Followers</p>
        <h3>{following}</h3>
      </div>
      <div>
        <p>Following</p>
        <h3>{followers}</h3>
      </div>
    </div>
  )
}

export default UserStatus
