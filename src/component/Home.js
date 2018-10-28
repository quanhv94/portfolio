import React from 'react'
import { goToPage } from './../util'

export default () => (
  <div className="home-page active" id="home_page">
    <div className="cloud"></div>
    <div className="grass"></div>
    <div className="ground"></div>
    <h2 className="top">Hello. My name is Quan <br /> I am a full-stack web developer</h2>
    <div className="top">
      <a href="javascript:void(0)" onClick={goToPage.bind(null, 'skill_page')}>Skill</a>
      <a href="javascript:void(0)" onClick={goToPage.bind(null, 'experience_page')}>Experience</a>
      <a href="javascript:void(0)" onClick={goToPage.bind(null, 'about_page')}>About</a>
    </div>
  </div>
)
