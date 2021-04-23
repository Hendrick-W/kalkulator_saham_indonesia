import {
  ADDING_BROKER_DETAIL, DEFAULT_BROKER_DETAIL
} from '../constants'

const initialState = {
  data : [
  {
    index: 0,
    sekuritas: 'Indo Premier Sekuritas',
    kode_broker:'PD',
    aplikasi: 'IPOT',
    fee_beli: 0.19,
    fee_jual: 0.29,
    fee_beli_intra: 0.1,
    fee_jual_intra:0.2
  },
  {
    index:1,
    sekuritas: 'Mirae Asset Sekuritas',
    kode_broker:'YP',
    aplikasi: 'Neo HOTS',
    fee_beli: 0.15,
    fee_jual: 0.25,
    fee_beli_intra: 0.08,
    fee_jual_intra:0.18
  },
  {
    index:2,
    sekuritas: 'PT Mandiri Sekuritas',
    kode_broker:'CC',
    aplikasi: 'MOST Mobile',
    fee_beli: 0.18,
    fee_jual: 0.28,
    fee_beli_intra: 0.1526,
    fee_jual_intra:0.2526
  },
  {
    index: 3,
    sekuritas: 'PT Phillip Sekuritas Indonesia',
    kode_broker:'KK',
    aplikasi: 'POEMS ID',
    fee_beli: 0.18,
    fee_jual: 0.28,
    fee_beli_intra: 0.1,
    fee_jual_intra:0.2
  },
  {
    index:4,
    sekuritas: 'BNI Sekuritas',
    kode_broker:'NI',
    aplikasi: 'BIONS Mobile',
    fee_beli: 0.17,
    fee_jual: 0.27,
    fee_beli_intra: 0.15,
    fee_jual_intra:0.25
  },
  {
    index:5,
    sekuritas: 'PT Sinarmas Sekuritas',
    kode_broker:'DH',
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
      return{
        ...state,
        data: [...state.data, action.payload]
      }
    case DEFAULT_BROKER_DETAIL:
      return {
        ...initialState,
      }
    default:
      return state;
  }
}

export default brokerReducer;