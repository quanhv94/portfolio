import React from 'react'
import { closePage } from './../util'

export default () => (
  <div className="experience-page" id="experience_page">
    <div className="close" onClick={closePage.bind(null, 'experience_page')}>×</div>
  </div>
)
