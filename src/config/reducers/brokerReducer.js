import {
  ADDING_BROKER_DETAIL, DEFAULT_BROKER_DETAIL, DELETE_BROKER, EDIT_BROKER
} from '../constants'

const initialState = {
  data : [
  {
    index: 0,
    sekuritas: 'Indo Premier Sekuritas',
    aplikasi: 'IPOT',
    fee_beli: 0.19,
    fee_jual: 0.29,
    fee_beli_intra: 0.1,
    fee_jual_intra:0.2
  },
  {
    index:1,
    sekuritas: 'Mirae Asset Sekuritas',
    aplikasi: 'Neo HOTS',
    fee_beli: 0.15,
    fee_jual: 0.25,
    fee_beli_intra: 0.08,
    fee_jual_intra:0.18
  },
  {
    index:2,
    sekuritas: 'PT Mandiri Sekuritas',
    aplikasi: 'MOST Mobile',
    fee_beli: 0.18,
    fee_jual: 0.28,
    fee_beli_intra: 0.1526,
    fee_jual_intra:0.2526
  },
  {
    index: 3,
    sekuritas: 'PT Phillip Sekuritas Indonesia',
    aplikasi: 'POEMS ID',
    fee_beli: 0.18,
    fee_jual: 0.28,
    fee_beli_intra: 0.1,
    fee_jual_intra:0.2
  },
  {
    index:4,
    sekuritas: 'BNI Sekuritas',
    aplikasi: 'BIONS Mobile',
    fee_beli: 0.17,
    fee_jual: 0.27,
    fee_beli_intra: 0.17,
    fee_jual_intra:0.27
  },
  {
    index:5,
    sekuritas: 'PT Sinarmas Sekuritas',
    aplikasi: 'Stockbit',
    fee_beli: 0.15,
    fee_jual: 0.25,
    fee_beli_intra: 0.125,
    fee_jual_intra:0.225,
  },
]};

const brokerReducer = (state = initialState, action) => {
  switch(action.type){
    case ADDING_BROKER_DETAIL:
    {  const {aplikasiValue, sekuritasValue, feeBeliValue, feeJualValue, feeBeliIntraValue, feeJualIntraValue} = action.payload
      const data = [...state.data]
      data.push({
        index: state.data[state.data.length - 1].index + 1,
        sekuritas: sekuritasValue,
        aplikasi: aplikasiValue,
        fee_beli: feeBeliValue,
        fee_jual: feeJualValue,
        fee_beli_intra: feeBeliIntraValue,
        fee_jual_intra:feeJualIntraValue,
      })
      return{
        ...state,
        data
      }
    }
    case DEFAULT_BROKER_DETAIL:
      return {
        ...initialState,
      }
    case DELETE_BROKER:
      let dataFiltered = state.data.filter(item => item.index !== action.payload);
      return {
        ...state,
        data: dataFiltered
      }
    case EDIT_BROKER:
    {
      const {aplikasiValue, sekuritasValue, feeBeliValue, feeJualValue, feeBeliIntraValue, feeJualIntraValue, index} = action.payload
      const position = state.data.findIndex(data => data.index === index)
      const data = [...state.data]
      data[position].aplikasi = aplikasiValue
      data[position].sekuritas = sekuritasValue
      data[position].fee_beli = feeBeliValue
      data[position].fee_jual = feeJualValue
      data[position].fee_beli_intra = feeBeliIntraValue
      data[position].fee_jual_intra = feeJualIntraValue
      return {
        ...state,
        data
      }
    }
    default:
      return state;
  }
}

export default brokerReducer;