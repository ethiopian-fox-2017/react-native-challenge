import React  from 'react'
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native'

 class SplashScreen extends React.Component {
  render(){
    return (
      <View style={styles.wrapper}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('./logo.png')}
          />
          <Text style={styles.title}>RestoMania App</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.container}>
            <TextInput
              placeholder="Username"
              underlineColorAndroid='transparent'
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              underlineColorAndroid='transparent'
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={styles.input}
            />
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  wrapper : {
    backgroundColor : '#FF5722',
   flex: 1
  },
  container : {
    padding : 20
  },
  title : {
    color : 'white',
    fontSize : 15,
    fontWeight : '200',
    textAlign : 'center',
    opacity : 0.9
  },
  subtitle : {
    color : 'white',
    fontWeight : '200',
    paddingBottom : 20
  },
  titleWrapper : {
    flex : 1,
    justifyContent : 'center'
  },
  logoContainer : {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent : 'center'
  },
  logo : {
    width: 64,
    height : 64
  },
  input : {
    height : 40,
    backgroundColor : 'rgba(255,255,255,0.2)',
    marginBottom : 20,
    color : '#FFF',
    paddingHorizontal : 10,
    borderColor : 'transparent',
    borderBottomColor: '#fff'
  },
  buttonContainer : {
    backgroundColor : '#BF360C',
    paddingVertical : 15
  },
  buttonText : {
    textAlign : 'center',
    color : '#fff'
  }
}

export default SplashScreen
