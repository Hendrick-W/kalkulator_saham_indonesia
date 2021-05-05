import {
  ADDING_BROKER_DETAIL, DEFAULT_BROKER_DETAIL, DELETE_BROKER
} from '../constants'

export function addBrokerDetail(params) {
  const {aplikasi, sekuritas, feeBeli, feeJual, feeBeliIntra, feeJualIntra} = params
  let aplikasiValue = aplikasi
  let sekuritasValue = sekuritas.trim()
  let feeBeliValue = feeBeli === '.' ? 0 : parseFloat(feeBeli)
  let feeJualValue = feeJual ==='.' ? 0 : parseFloat(feeJual)
  let feeBeliIntraValue = feeBeliIntra === '' || feeBeliIntra ==='.' ? 0 : parseFloat(feeBeliIntra)
  let feeJualIntraValue = feeJualIntra === '' || feeJualIntra ==='.' ? 0 : parseFloat(feeJualIntra)

  return {
    type:ADDING_BROKER_DETAIL,
    payload:{aplikasiValue, sekuritasValue, feeBeliValue, feeJualValue, feeBeliIntraValue, feeJualIntraValue}
  }
}

export function defaultsBrokerDetail(){
  return {
    type:DEFAULT_BROKER_DETAIL,
  }
}

export function deleteBroker(params) {
  return {
    type:DELETE_BROKER,
    payload:params,
  }
}
