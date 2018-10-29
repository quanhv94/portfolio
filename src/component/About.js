import React from 'react'
import { closePage } from './../util'

export default () => (
  <div className="about-page" id="about_page">
    <div className="close" onClick={closePage.bind(null, 'about_page')}>×</div>
  </div>
)
