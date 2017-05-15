import React from 'react'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body , Form, Input, Label, Item} from 'native-base'
import HeaderNavigationDetail from './HeaderNavigationDetail'
import FBSDK, {LoginManager, AccessToken} from 'react-native-fbsdk'
import firebase from 'firebase'

var config = {
  apiKey : 'AIzaSyBpRjkVH8h7rnJIj5c6Q8Zrx6R47QMz-Vk',
  authDomain : 'auth-react-a47dc.firebaseapp.com/',
  databaseUrl : 'https://auth-react-a47dc.firebaseio.com/'
}

const firebaseRef = firebase.initializeApp(config)

class MainLogin extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user){
          this.props.navigation.navigate('Home')
        }else {
          console.log('belum login');
        }
      })
  }

  _fbAuth(){
    LoginManager.logInWithReadPermissions(['public_profile','email']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          console.log('masuk sini');
          AccessToken.getCurrentAccessToken()
                     .then((accessTokenData) => {
                       const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
                       firebase.auth().signInWithCredential(credential).then((result) => {
                          console.log('masuk',result);
                       },(error) => {
                         console.log(error)
                       })
                     }, (error => {
                       console.log('Error nih' + error);
                     }))
        }
      },
    function(error) {
      alert('Login fail with error: ' + error);
    }
  );
  }
  render(){
    return (
      <Container>
        <HeaderNavigationDetail navigation={this.props.navigation} titleNav={'Login'}/>
        <Content style={{height : '100%'}}>
        <Form>
            <Item floatingLabel>
                 <Label>Username</Label>
                <Input />
            </Item>
            <Item floatingLabel last>
                <Label>Password</Label>
                <Input />
            </Item>
            <Item>
            <Button iconRight primary>
                   <Text>Login</Text>
                   <Icon name='arrow-forward' />
               </Button>
               <Button onPress={this._fbAuth} style={{marginLeft: 5}}iconRight primary>
                      <Text>Login with facebook</Text>
                      <Icon name='facebook-with-circle' />
                  </Button>
            </Item>
        </Form>
        </Content>
      </Container>
    )
  }
}

export default MainLogin
