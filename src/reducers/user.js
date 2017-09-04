
import { handleActions } from 'redux-actions'

const initialState = {
  name: 'user name'
}

export default handleActions({
  'clear' (state, action) {
    return {
      name: 'empty'
    }
  }
}, initialState)
