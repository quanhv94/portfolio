import React from 'react'
import { closePage } from './../util'
import { Tooltip } from 'react-tippy';
import jsImg from './../access/image/js.png'
import cssImg from './../access/image/css.png'
import htmlImg from './../access/image/html.png'
import rubyImg from './../access/image/ruby.png'
import mysqlImg from './../access/image/mysql.png'
import reactImg from './../access/image/react.png'

export default () => (
  <div className="skill-page" id="skill_page">
    <div className="container">
      <div className="roof">My Skills</div>
      <div className="ground"></div>
      <div className="animation-container">
        <div className="brick-list">
          <div className="brick">
            <div className="tree">
              <Tooltip title="Javascript: 80%" style={{ top: 40 * 2 }}>
                <img src={jsImg} className="hvr-grow" alt="Javascript" />
              </Tooltip>
            </div>
          </div>
          <div className="brick">
            <div className="tree">
              <Tooltip title="HTML: 80%" style={{ top: 40 * 2 }}>
                <img src={htmlImg} className="hvr-grow" alt="HTML" />
              </Tooltip>
            </div>
          </div>
          <div className="brick">
            <div className="tree">
              <Tooltip title="CSS: 80%" style={{ top: 40 * 2 }}>
                <img src={cssImg} className="hvr-grow" alt="CSS" />
              </Tooltip>
            </div>
          </div>
          <div className="brick">
            <div className="tree">
              <Tooltip title="Ruby: 70%" style={{ top: 40 * 3 }}>
                <img src={rubyImg} className="hvr-grow" alt="Ruby" />
              </Tooltip>
            </div>
          </div>
          <div className="brick">
            <div className="tree">
              <Tooltip title="MySQL: 80%" style={{ top: 40 * 2 }}>
                <img src={mysqlImg} className="hvr-grow" alt="MySQL" />
              </Tooltip>
            </div>
          </div>
          <div className="brick">
            <div className="tree">
              <Tooltip title="ReactJS: 70%" style={{ top: 40 * 3 }}>
                <img src={reactImg} className="hvr-grow" alt="ReactJS" />
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="character">
          <span></span>
        </div>
      </div>
      <div className="close" onClick={closePage.bind(null, 'skill_page')}>×</div>
    </div>
  </div>
)
