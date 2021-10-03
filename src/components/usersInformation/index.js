import React, {useState,useEffect} from 'react'
import UserHeader from '../informationHeader'
import UserStatus from '../userStatus'
import UserStats from '../userStats'
import {Octocat} from '../../assets'
import Axios from 'axios'

const UserInformation = () => {
  const [img,setImg] = useState();

  useEffect(()=>{
    Axios.get("https://api.github.com/users/princesp").then(res=>{
      console.log(res.data);
      setImg(res.data.avatar_url)
    })
    .catch(err=>console.log(err))
  })

  const nulls = img==null;

  const style = {
    imgCont: {
      width:'110px',
      height:'110px',
      background: nulls ? 'lightblue' : 'none',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    imgs:{
      height:nulls?'80px':'120px',
      width:nulls?'120px':'120px',
      borderRadius: nulls ? '0' : '50%',
    }
  }


  return (
    <div className='user-informations'>
      <div>
        <UserHeader/>
        <UserStatus/>
        <UserStats/>
      </div>
      <div style={style.imgCont}>
        <img style={style.imgs} src={nulls ? Octocat : img} alt="user profile pic"/>
      </div>
    </div>
  )
}

export default UserInformation
