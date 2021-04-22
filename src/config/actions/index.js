import {CHANGE_BROKER_DETAIL} from '../constants'

export function changeBrokerDetail(params) {
  return {
    type:CHANGE_BROKER_DETAIL,
    payload:params
  }
}