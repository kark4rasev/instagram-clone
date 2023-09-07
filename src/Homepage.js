import React from 'react'
import "./Homepage.css"
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'

function Homepage() {
  return (
    <div className= 'homepage'>
        <div className="homepage__nav">
            <Sidenav />
        </div>
        <div className="homepage__timeline"></div>
            <Timeline />
        </div>
  )
}

export default Homepage
