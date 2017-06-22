/**
 * Created by out_xu on 17/3/16.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

import logo from '../images/logo.svg'

import './app.less'
class AppComponent extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Link to="demo">
            欢迎使用!请查看代码，结合自己所学知识开始你的React之旅！
          </Link>
        </p>
        {this.props.children}
      </div>
    )
  }
}

export default AppComponent
