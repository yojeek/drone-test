import React from 'react'
import Header from './Header'
import Toolbar from './Toolbar'

const App = ({ children }) => [
  <Header key='header' />,
  <div key='body' className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
    <button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
      <i className="la la-close"></i>
    </button>
    <Toolbar />
    <div className="m-grid__item m-grid__item--fluid m-wrapper">
      <div className="m-content">
        <div className="row">
          <div className="col-xl-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
]

export default App
