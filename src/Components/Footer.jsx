import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import './Footer.css'


const Footer = () => {
  return (
    <div>
        <a class="glassIco" href="#"><MdLocationPin/></a>
        <a class="glassIco" href="#"><BsInstagram /></a>
        <a class="glassIco" href="#"><FaLinkedin /></a>
        <a class="glassIco" href="#"><BsTwitter /></a>
    </div>
  )
}

export default Footer