import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native';

const styles = {
  itemStyle: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageStyle: {
    width: '100%',
    height: '70%'
  },
  detailStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#66BB6A'
  }
}


class DetailItem extends React.Component {

  constructor(props){
    super(props);

  }

  static navigationOptions = { title: 'Detail' };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.itemStyle}>
          <Image style={styles.imageStyle} source={{uri: params.item.image_url[1]}} />

          <Text style={styles.detailStyle}>{params.item.id} | {params.item.name} </Text>
          <Text style={styles.detailStyle}> Camera : {params.item.camera ? params.item.camera : '-'} </Text>
          <Text style={styles.detailStyle}> Lens : {params.item.lens ? params.item.lens : '-'} </Text>
          <Text style={styles.detailStyle}> Photo By : {params.item.user.firstname} {params.item.user.lastname} </Text>

      </View>
    )
  }
}

export default DetailItem;
