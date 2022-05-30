import React, { useEffect, useState } from 'react'
import Campaign from '../../components/Campaign/Campaign'
import Sidebar from '../../components/Sidebar/Sidebar';
import Slider from '../../components/Slider/Slider'
import "./home.scss"
function Home() {
  // const [sidebar, setSidebar] = useState()
 
  // const sidebarAdded = () => {
  //   if (window.scrollY >= 66) {
  //     setSidebar(true);
  //   } else {
  //     setSidebar(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", sidebarAdded);
  // });
  return (
    <div className='home'>
      {/* {sidebar ? <Sidebar/> : ""} */}
      <Slider />
      <Campaign />
    </div>
  )
}

export default Home