import React from 'react'
import '../../index.css'
import { Icon } from '@iconify/react';
import crescentMoon from '@iconify/icons-emojione-monotone/crescent-moon';
import sunIcon from '@iconify/icons-emojione/sun';

const style={
  btn:{
    background:'none',
    height:'inherit',
    width:'inherit'
  },
  div:{minWidth:'90px',height:'30px',display:'flex',alignItems:'center',justifyContent:'space-between',cursor:'pointer'}
}

const Header = ({onColor,text})=>{
  return(
    <div className = 'header'>
      <h1 className={text===true?'dark-text':'light-text'}>devfinder</h1>
      <div style={style.div} onClick={onColor}>
        <p className={text===true?'dark-text':'light-text'}>{text===true?'Dark':'Light'}</p>
        <button type="button" style={style.btn}>{
            text===true?<Icon icon={crescentMoon} height='30' style={{color:"#777", transform:'rotate(-23deg)'}}/>
          : <Icon icon={sunIcon} color="#ccc" height="30"/>
          }</button>
      </div>
    </div>
  )
}

export default Header;
