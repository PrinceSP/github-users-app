import React from 'react'
import UserHeader from '../informationHeader'
import UserStatus from '../userStatus'
import UserStats from '../userStats'
import {Octocat} from '../../assets'
import Axios from 'axios'

const UserInformation = () => {


  return (
    <div className='user-informations'>
      <div>
        <UserHeader/>
        <UserStatus/>
        <UserStats/>
      </div>
      <div className='img-cont'>
        <img src={Octocat}/>
      </div>
    </div>
  )
}

export default UserInformation
