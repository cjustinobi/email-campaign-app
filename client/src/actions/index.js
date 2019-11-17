import axios from 'axios'
import { FETCH_USER } from './types'

export const fetchUser = () => async dispath => {
  const { data } =await axios.get('/api/current_user')
  dispath({ type: FETCH_USER, payload: data })
}

