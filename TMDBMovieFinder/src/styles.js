import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  headerText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    margin: 10
  },
  toolbar: {
    backgroundColor: '#01d277',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '10%',
    width: '100%'
  },
  logoTMDB: {
    height: 130,
    width: 150
  },
  textTitle: {
    color: '#073554',
    fontSize: 15,
    margin: 5
  },
  aboutBox: {
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    padding: 5,
    width: '100%'
  },
  aboutText: {
    fontSize: 20,
    width: '75%'
  },
  scoreMovie : {
    color: 'rgba(10,200,150,0.8)'
  },
  loadingIcon: {
    alignItems: 'center',
    paddingTop: '60%',
    marginBottom: '5%',
    height: 100
  }
})