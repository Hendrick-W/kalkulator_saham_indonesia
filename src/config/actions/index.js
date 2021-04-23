import {
  ADDING_BROKER_DETAIL, DEFAULT_BROKER_DETAIL
} from '../constants'

export function addBrokerDetail(params) {
  return {
    type:ADDING_BROKER_DETAIL,
    payload:params
  }
}

export function defaultsBrokerDetail(){
  return {
    type:DEFAULT_BROKER_DETAIL,
  }
}