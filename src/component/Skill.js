import React from 'react'
import FontAwesome from 'react-fontawesome'
import { closePage } from './../util'

export default () => (
  <div className="skill-page" id="skill_page">
    <FontAwesome name='close' onClick={closePage.bind(null, 'skill_page')} />
  </div>
)
