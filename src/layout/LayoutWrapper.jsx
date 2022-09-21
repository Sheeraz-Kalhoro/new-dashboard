import React from 'react'
import Header from './header/Header'
import SideNav from './sideNav/SideNav'
import Footer from './footer/Footer'
import './layoutwrapper.css'

export default function LayoutWrapper(props) {
  return (
    <div className='layout'>
        <SideNav/>
        <Header/>
        {props.children}  
        {/* <Footer/> */}
    </div>
  )
}
