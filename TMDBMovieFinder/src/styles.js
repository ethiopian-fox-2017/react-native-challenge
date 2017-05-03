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
    backgroundColor: '#60E83B',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '15%',
    width: '100%'
  },
  logoTMDB: {
    height: 50,
    width: 130
  },
  textTitle: {
    color: '#073554',
    fontSize: 25,
    margin: 5
  },
  itemBox: {
    backgroundColor: '#4DFB70',
    alignItems: 'center',
    padding: 5,
    width: '100%'
  },
  loadingIcon: {
    alignItems: 'center',
    paddingTop: '60%',
    marginBottom: '5%',
    height: 100
  }
})