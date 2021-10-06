import React from 'react'
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import linkChain from '@iconify/icons-akar-icons/link-chain';
import locationMarker from '@iconify/icons-majesticons/location-marker';
import buildingIcon from '@iconify/icons-bi/building';
import '../../index.css'

const UserStats = ({loc='San Francisco',twit,company='@github',blog="https://github.blog",statColor}) => {
  return (
    <div className='stat-cont'>
      <div className="stat-item-cont">
        <Icon icon={locationMarker} color={!statColor && '#ccc'} height="20" />
        <p className={statColor}>{loc==null?'No location found':loc}</p>
      </div>
      <div className="stat-item-cont">
        <Icon icon={twitterFill} color={!statColor && '#ccc'} height="20" />
        <p className={statColor}>{twit==null?'Not Available':twit}</p>
      </div>
      <div className="stat-item-cont">
        <Icon icon={linkChain} color={!statColor && '#ccc'} height="20" />
        <p className={statColor}>{blog===(null||'')?'No blog url found':blog}</p>
      </div>
      <div className="stat-item-cont">
        <Icon icon={buildingIcon} color={!statColor && '#ccc'} height="20" />
        <p className={statColor}>{company==null?'Not found':company}</p>
      </div>
    </div>
  )
}

export default UserStats
