const initialState = []

const bookingReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "FETCH_BOOKING": {
      console.log('masuk store ', payload);
      let newState = [...payload]
      return newState
    }
    default : {
      return state
    }
  }
}
export default bookingReducer
