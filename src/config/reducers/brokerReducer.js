import {ADDING_BROKER_DETAIL} from '../constants'

const initialState = {
  data : [
  {
    sekuritas: 'Indo Premier Sekuritas',
    kode_broker:'PD',
    aplikasi: 'IPOT',
    fee_beli: 0.0019,
    fee_jual: 0.0029,
    fee_beli_intra: 0.001,
    fee_jual_intra:0.002
  },
  {
    sekuritas: 'Mirae Asset Sekuritas',
    kode_broker:'YP',
    aplikasi: 'Neo HOTS',
    fee_beli: 0.0015,
    fee_jual: 0.0025,
    fee_beli_intra: 0.0008,
    fee_jual_intra:0.0018
  },
  {
    sekuritas: 'PT Mandiri Sekuritas',
    kode_broker:'CC',
    aplikasi: 'MOST Mobile',
    fee_beli: 0.0018,
    fee_jual: 0.0028,
    fee_beli_intra: 0.001526,
    fee_jual_intra:0.002526
  },
  {
    sekuritas: 'PT Phillip Sekuritas Indonesia',
    kode_broker:'KK',
    aplikasi: 'POEMS ID',
    fee_beli: 0.0018,
    fee_jual: 0.0028,
    fee_beli_intra: 0.001,
    fee_jual_intra:0.002
  },
  {
    sekuritas: 'BNI Sekuritas',
    kode_broker:'NI',
    aplikasi: 'BIONS Mobile',
    fee_beli: 0.0017,
    fee_jual: 0.0027,
    fee_beli_intra: 0.0015,
    fee_jual_intra:0.0025
  },
  {
    sekuritas: 'PT Sinarmas Sekuritas',
    kode_broker:'DH',
    broker: 'Stockbit',
    fee_beli: 0.0015,
    fee_jual: 0.0025,
    fee_beli_intra: 0.00125,
    fee_jual_intra:0.00225,
  },
]};

const brokerReducer = (state = initialState, action) => {
  switch(action.type){
    case ADDING_BROKER_DETAIL:
      return{
        ...state,
        data: [...state.data, action.payload]
      }
    default:
      return state;
  }
}

export default brokerReducer;