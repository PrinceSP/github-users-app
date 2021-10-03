import React from 'react'
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import linkChain from '@iconify/icons-akar-icons/link-chain';
import locationMarker from '@iconify/icons-majesticons/location-marker';
import buildingIcon from '@iconify/icons-bi/building';
import '../../index.css'

const UserStats = () => {
  return (
    <div className="stat-cont">
      <div className="stat-item-cont">
        <Icon icon={locationMarker} color="#ccc" height="20" />
        <p>San Francisco</p>
      </div>
      <div className="stat-item-cont">
        <Icon icon={twitterFill} color="#ccc" height="20" />
        <p>Not Available</p>
      </div>
      <div className="stat-item-cont">
        <Icon icon={linkChain} color="#ccc" height="20" />
        <p>"https://github.blog"</p>
      </div>
      <div className="stat-item-cont">
        <Icon icon={buildingIcon} color="#ccc" height="20" />
        <p>@github</p>
      </div>
    </div>
  )
}

export default UserStats
