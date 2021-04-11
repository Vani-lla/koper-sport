import React, { Component } from 'react';
import './Navigation.css';
import logo from '../../static/logo.png';
import f_logo from '../../static/f_logo.png';
import i_logo from '../../static/i_logo.png';

export default function Navigation() {
   const navFS = 34;
   const dscFS = 22;
   const artFS = 23;
   const recFS = 30;

   const fontSizeChange = (m) => {
      let elements = []; let items = document.getElementsByClassName('nav-sub');
      for (let i=0; i<items.length; i++) { elements.push(items[i]) }
      elements.forEach((item, ind) =>    { item.style.fontSize = `${navFS*m}px` })
      
      elements = []; items = document.getElementsByClassName('description');
      for (let i=0; i<items.length; i++) { elements.push(items[i]) }
      elements.forEach((item, ind) =>    { item.style.fontSize = `${dscFS*m}px` })
      
      elements = []; items = document.getElementsByClassName('article-content-p');
      for (let i=0; i<items.length; i++) { elements.push(items[i]) }
      elements.forEach((item, ind) =>    { item.style.fontSize = `${artFS*m}px` })
      
      elements = []; items = document.getElementsByClassName('records');
      for (let i=0; i<items.length; i++) { elements.push(items[i]) }
      elements.forEach((item, ind) =>    { item.style.fontSize = `${recFS*m}px` })
   }

   return (
      <nav>
         <a href="http://www.kopernik.netus.pl/"><img src={logo} className="main-logo" alt="main-logo" /></a>
         <div className="nav-links">
            <div className="nav-icons">
               <a href="https://www.facebook.com/kopercieszyn">
                  <img src={f_logo} alt="f" className="nav-facebook" /></a>
               <a href="https://www.instagram.com/lo_koper/">
                  <img src={i_logo} alt="i" className="nav-instagram"/></a>
            </div>

            <div className="nav-subpages">
               <a href="/" id="ak" className="nav-sub">Aktualności</a>
               <a href="/records" id="rc" className="nav-sub">Rekordy</a>
            </div>

            <div className="nav-options">
               <button onClick={() => fontSizeChange(1)}   className="font-size-1">A</button>
               <button onClick={() => fontSizeChange(1.2)} className="font-size-2">A+</button>
               <button onClick={() => fontSizeChange(1.5)} className="font-size-3">A++</button>
               <button onClick={fontSizeChange}            className="contrast-switch">\f042</button>
            </div>
         </div>
      </nav>
   )
}
