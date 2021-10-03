import React, {useState,useEffect} from 'react'
import UserHeader from '../informationHeader'
import UserStatus from '../userStatus'
import UserStats from '../userStats'
import {Octocat} from '../../assets'

const UserInformation = ({pic,names,uName,dateJoin,bios,repos,following,followers,loc,twit,company,blog}) => {
  const [img,setImg] = useState();
  const [name,setName] = useState();
  const [username,setUsername] = useState();
  const [bio,setBio] = useState();

  useEffect(()=>{
    setImg(pic)
    setName(names)
    setUsername(uName)
    setBio(bios)
  },[pic,names,uName,bios])

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
        <UserHeader name={name}
          username={username}
          bio={bio}
          dateJoin={dateJoin}/>
        <UserStatus repos={repos}
          following={following}
          followers={followers}/>
        <UserStats loc={loc}
          twit={twit}
          company={company}
          blog={blog}/>
      </div>
      <div style={style.imgCont}>
        <img style={style.imgs} src={nulls ? Octocat : img} alt="user profile pic"/>
      </div>
    </div>
  )
}

export default UserInformation
