
import React, { Component } from 'react'
import style from './style.css'

export default class Base extends Component {
  render () {
    return (
      <div className={style.local}>
        Base component
      </div>
    )
  }
}
