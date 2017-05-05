import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  CameraRoll,
  Platform,
  Dimensions,
  Alert
} from 'react-native';
import { Card } from 'react-native-elements';
import RNFetchBlob from 'react-native-fetch-blob';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = {
  itemStyle: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageStyle: {
    width: deviceWidth,
    height: deviceHeight * 0.6
  },
  detailStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#66BB6A'
  },
  saveButton: {
    alignSelf: 'center',
    color: 'pink',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'pink',
    padding: 10,
    margin: 10,
  },
  cardStyle: {
    alignItems: 'center'
  },
  fullWidth: {
    width: '100%'
  }
}


class DetailItem extends React.Component {

  constructor(props){
    super(props);

  }

  static navigationOptions = { title: 'Detail' };

  // handleSaveImage(){
  //   let uri = this.props.navigation.state.params.item.image_url[1];
  //   console.log('saveImage',uri);
  //   let promise = CameraRoll.saveImageWithTag(uri);
  //   promise.then(function(result) {
  //     console.log('save succeeded ' + result);
  //   }).catch(function(error) {
  //     console.log('save failed ' + error);
  //   });
  // }

  saveToCameraRoll = () => {
    let uri = this.props.navigation.state.params.item.image_url[1];
    if (Platform.OS === 'android') {
      RNFetchBlob
      .config({
        fileCache : true,
        appendExt : 'jpg'
      })
      .fetch('GET', uri)
      .then((res) => {
        CameraRoll.saveToCameraRoll(res.path())
          .then(Alert.alert('Success', 'Photo added to camera roll!'))
          .catch(err => console.log('err:', err))
      })
    } else {
      CameraRoll.saveToCameraRoll(uri)
        .then(Alert.alert('Success', 'Photo added to camera roll!'))
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    const title = params.item.id + ' | '+ params.item.name;
    return (
      <View style={styles.itemStyle}>
          <Image style={styles.imageStyle} source={{uri: params.item.image_url[1]}} />

        <ScrollView style={styles.fullWidth}>
        <Card style={styles.cardStyle}
          title={title}>
          <Text style={styles.detailStyle}> Camera : {params.item.camera ? params.item.camera : '-'} </Text>
          <Text style={styles.detailStyle}> Lens : {params.item.lens ? params.item.lens : '-'} </Text>
          <Text style={styles.detailStyle}> Photo By : {params.item.user.firstname} {params.item.user.lastname} </Text>
          <TouchableHighlight onPress={()=>this.saveToCameraRoll()}>
            <Text style={styles.saveButton}>Save</Text>
          </TouchableHighlight>
        </Card>
        </ScrollView>
      </View>

    )
  }
}


export default DetailItem;
