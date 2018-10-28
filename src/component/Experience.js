import React from 'react'
import FontAwesome from 'react-fontawesome'
import { closePage } from './../util'

export default () => (
  <div className="experience-page" id="experience_page">
    <FontAwesome name='close' onClick={closePage.bind(null, 'experience_page')} />
  </div>
)
