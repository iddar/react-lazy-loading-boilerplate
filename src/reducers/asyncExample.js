
import { handleActions } from 'redux-actions'

const initialState = {
  bio: 'Bio user',
  name: 'test',
  lastname: 'bot'
}

const handle = handleActions({
  'get bio' (state, action) {
    return {
      name: 'empty'
    }
  },
  'delete bio' (state, action) {
    return {
      name: 'empty'
    }
  }
}, initialState)

handle.reducer = 'home'

export default handle
