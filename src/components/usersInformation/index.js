import React from 'react'
import UserHeader from '../informationHeader'
import UserStatus from '../userStatus'
import {Octocat} from '../../assets'

const UserInformation = () => {
  return (
    <div className='user-informations'>
      <div>
        <UserHeader/>
        <UserStatus/>
      </div>
      <div className='img-cont'>
        <img src={Octocat}/>
      </div>
    </div>
  )
}

export default UserInformation
