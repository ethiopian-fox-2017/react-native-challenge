import {StyleSheet} from 'react-native'

export const urls = {
  restaurants : 'https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city',
  bookings : 'http://810290ec.ngrok.io/bookings'
}

export const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
    marginTop : -200
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 0,
  },
  appContainer : {
    flex : 1,
    backgroundColor : '#FFFF8D'
  },
  content : {
    width : '100%',
    backgroundColor : '#FFCA28',
    marginTop: 0,
    marginBottom : 5,
    paddingTop : 0,
    paddingBottom : 5,
  },
  title : {
    fontWeight : 'bold',
    fontSize : 17,
    marginLeft : 12,
    color : '#FFFDE7',
  },
  location : {
    fontWeight : 'normal',
    fontSize : 14,
    marginLeft : 10,
    color : '#FFF'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  }
};
