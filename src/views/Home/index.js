import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as LoginActions from '../../actions/login'
import style from './style.css'


class App extends Component {
  render () {
    return (
      <div>
        <h1 className={style.title}>Hola <span>mundo</span></h1>
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
