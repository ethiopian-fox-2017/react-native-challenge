import axios from 'axios'

export const fetchRestaurant = () => {
  return (dispatch) => {
    //console.log('https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city');

    axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city',{
      headers : {
        'user-key' : 'f4f50b62bf70bdec559f026ec56b2dff'
      }
    }).then(response => {
                  console.log(response.data.restaurants);
                  dispatch({
                          type : 'FETCH_RESTAURANT',
                          payload : response.data.restaurants
                          })
                        })
      .catch(err => console.log(err))
  }
}

export const fetchBooking = () => {
  return (dispatch) => {
    axios.get('https://943c1b3f.ngrok.io/bookings')
         .then(response => {
            console.log('response bookings', response.data)
            dispatch({
              type : 'FETCH_BOOKING',
              payload : response.data
            })
          })
         .catch(err => console.log(err))
  }
}
