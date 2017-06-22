import React, { Component } from 'react'

class ReduxDemo extends Component {
  render () {
    //you can dispatch ation by using this.props.getDemo() or
    const {data, getDemo} = this.props

    return (
      <p> ation-> reducer-> store -> get data in container -> get data in Component</p>
    )
  }
}

ReduxDemo.propTypes = {}
ReduxDemo.defaultProps = {}

export default ReduxDemo
