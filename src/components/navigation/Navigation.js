import React, { Component } from 'react';
import './Navigation.css';
import logo from '../../static/logo.png';
import f_logo from '../../static/f_logo.png';
import i_logo from '../../static/i_logo.png';

export default function Navigation() {
   return (
      <nav>
         <a href="http://www.kopernik.netus.pl/"><img src={logo} className="main-logo" alt="main-logo" /></a>
         <div className="nav-links">
            <div className="nav-icons">
               <a href="https://www.facebook.com/kopercieszyn">
                  <img src={f_logo} alt="f" className="nav-facebook" /></a>
               <a href="https://www.instagram.com/p/CASQzO7JiRw/">
                  <img src={i_logo} alt="i" className="nav-instagram"/></a>
            </div>

            <div className="nav-subpages">
               <a href="/" id="ak" className="nav-sub">Aktualności</a>
               <a href="/records" id="rc" className="nav-sub">Rekordy</a>
               <a href="/archive" id="ar" className="nav-sub">Archiwum</a>
            </div>

         </div>
      </nav>
   )
}
