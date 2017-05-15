const initialState = []

const restaurantReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "FETCH_RESTAURANT": {
      let newState = [...payload]
      return newState
    }
    default : {
      return state
    }
  }
}
export default restaurantReducer
