import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Card, Grid, Col } from 'react-native-elements';

const styles = {
  container: {
    width: '100%',
    height: '50%',
  },
  cardContainer: {
    width : '96%',
    height :'60%',
    marginTop:5,
    flexDirection: 'row',
  },
  cardColl: {
    width:"55%",
    margin: 2,
    height: '100%',
  }
};

const HomeInfo = props => {
  const { location, current } = props.weathers;
  if (!location) {
   return (<Text>Please Wait..</Text>)
  }
  return (
    <View style={styles.container}>
      <Card
        title={location.name}
        containerStyle={{ margin: 0 ,height:'100%'}}
        wrapperStyle={{ alignItems: 'center' }}
      >
      <Text>{current.last_updated}</Text>
      <View style={styles.cardContainer}>
        <View style={styles.cardColl}>
          <Image source={{ uri: `https:${current.condition.icon}` }}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View>
          <Text>Temp : {current.temp_c} celcius</Text>
          <Text>Wind : {current.wind_kph} kph</Text>
          <Text>Humidity : {current.humidity}</Text>
        </View>
      </View>
      </Card>
    </View>
 )
}
const mapStateToprops = state => ({ weathers: state.weathers });
export default connect(mapStateToprops, null)(HomeInfo);
