import {ADDING_BROKER_DETAIL} from '../constants'

export function addBrokerDetail(params) {
  return {
    type:ADDING_BROKER_DETAIL,
    payload:params
  }
}