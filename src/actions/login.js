/* global fetch */

export const getRepos = (username = 'iddar') => async dispatch => {
  let repos = await fetch(`https://api.github.com/users/${username}/repos`).then(r => r.json())
  let names = repos.map(repo => repo.name)
  dispatch({type: 'repos', payload: names})
}

export const getBio = (username = 'iddar') => async dispatch => {
  let repos = await fetch(`https://api.github.com/users/${username}/`).then(r => r.json())
  let names = repos.map(repo => repo.name)
  dispatch({type: 'get bio', payload: names})
}
