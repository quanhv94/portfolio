import React from 'react'
import FontAwesome from 'react-fontawesome'
import { closePage } from './../util'

export default () => (
  <div className="about-page" id="about_page">
    <FontAwesome name='close' onClick={closePage.bind(null, 'about_page')} />
  </div>
)
