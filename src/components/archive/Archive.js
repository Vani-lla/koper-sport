import React, { Component } from 'react';
import './Archive.css';

export default class Archive extends Component {
   render() {
      return (
         <h1 className="test">Not done yet</h1>
      )
   }

   componentDidMount() {
      document.getElementById('ar').className = "nav-sub active"
   }

   componentWillUnmount() {
      document.getElementById('ar').className = "nav-sub"
   }
}
