import { GET_DEMO_ERR, GET_DEMO_SUCC } from '../actions/type'

const init_state = {
  data: {} //放默认值
}

export default function demo (state = init_state, action) {
  switch (action.type) {
    case GET_DEMO_SUCC:
      return {
        ...state,
        data: action.payload
      }
    case GET_DEMO_ERR:
      return {
        ...state,
        data: {}
      }
    default:
      return state
  }
}
