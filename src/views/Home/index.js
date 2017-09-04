import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import style from './style.css'

import * as LoginActions from '../../actions/login'

class App extends Component {
  render () {
    console.warn(style)
    return (
      <div>
        <h1 className={style.title}>Hola mundo</h1>
        extends!
        <Link to='/test'>/app</Link>
        <button onClick={_ => this.props.actions.getRepos()}>Bum!</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
