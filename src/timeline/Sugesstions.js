import {Avatar} from "@mui/material";
import React from 'react';
import "./Sugesstions.css";

function Sugesstions() {
  return <div className="sugessions">
      <div className="suggestions__title">Sugesstions for you</div>
      <div className="sugesstions__usernames">


          <div className= "sugesstion__username">
          
            <div className="username__left">
              <span className="avatar">
                <Avatar>R</Avatar>
              </span>
              <div className="username__info">
                <span className="username">redian</span>
                <span className="relation">New to instagram</span>
              </div>
            </div>


            <button className="follow__button">Follow</button>
          </div>

          <div className= "sugesstion__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>R</Avatar>
              </span>
              <div className="username__info">
                <span className="username">redian</span>
                <span className="relation">New to instagram</span>
              </div>
            </div>
            <button className="follow__button">Follow</button>
          </div>

          <div className= "sugesstion__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>R</Avatar>
              </span>
              <div className="username__info">
                <span className="username">redian</span>
                <span className="relation">New to instagram</span>
              </div>
            </div>
            <button className="follow__button">Follow</button>
          </div>

          <div className= "sugesstion__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>R</Avatar>
              </span>
              <div className="username__info">
                <span className="username">redian</span>
                <span className="relation">New to instagram</span>
              </div>
            </div>
            <button className="follow__button">Follow</button>
          </div>
      </div>
  </div>
  
}

export default Sugesstions;
