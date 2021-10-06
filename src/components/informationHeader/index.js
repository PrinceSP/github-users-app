import React from 'react'

const UserHeader = ({name='the octocat',dateJoin='date should be here',username='@octocat',bio='This profile has no bio',color}) => {
  return (
    <div className="users-header-section">
      <div className='header-section-one'>
        <h1 className={color}>{name==null ? 'Null' : name}</h1>
        <p className={color}>{`Joined ${dateJoin}`}</p>
      </div>
      <p>{username}</p>
      <p>{bio === null ? 'This profile has no bio' : bio}</p>
    </div>
  )
}

export default UserHeader
