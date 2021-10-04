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
  const [media,setMedia] = useState();
  const mediaQuery = window.matchMedia('(max-width:768px)');

  useEffect(()=>{
    setImg(pic)
    setName(names)
    setUsername(uName)
    setBio(bios)
    setMedia(mediaQuery)
  },[pic,names,uName,bios,mediaQuery,media])

  const nulls = img==null;

  const style = {
    imgCont: {
      width:mediaQuery.matches?'90px':'120px',
      height:mediaQuery.matches?'90px':'120px',
      background: nulls ? 'lightblue' : 'none',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    imgs:{
      height:mediaQuery.matches ? nulls?'75px':'80px' : nulls?'80px':'120px',
      width:mediaQuery.matches ?  nulls?'85px':'85px' : nulls?'110px':'120px',
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
      <div style={style.imgCont} className='imgCont'>
        <img style={style.imgs } src={nulls ? Octocat : img} alt="user profile pic"/>
      </div>
    </div>
  )
}

export default UserInformation
