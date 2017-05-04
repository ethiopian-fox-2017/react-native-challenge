import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import HourForcast from './hourForcast';

const styles = {
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
};

const ForcastView = props => (
  <View style={{ width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap' }} >
    <View style={{ width: '50%', height: '35%'}} >
      <Image source={{ uri: `https:${props.weather.day.condition.icon}` }}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
    <View style={{ width: '50%', height: '35%', justifyContent: 'center' }} >
      <View style={{ alignItems: 'center' }} >
        <Text style={styles.text}>{props.weather.date }</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }} >{props.weather.day.condition.text} C</Text>
        <Text style={styles.text}>Temp: {props.weather.day.avgtemp_c} C</Text>
        <Text style={styles.text}>Humidity: {props.weather.day.avghumidity} C</Text>
      </View>
      <View style={{ flexDirection: 'row' }} >
        <View style={{ width: '50%', alignItems: 'center' }} >
          <Text>Sunrise</Text>
          <Text>{props.weather.astro.sunrise}</Text>
        </View>
        <View style={{ width: '50%', alignItems: 'center' }} >
          <Text>Sunset</Text>
          <Text>{ props.weather.astro.sunset }</Text>
        </View>
      </View>
    </View>
    <View style={{ width: '100%', height: ' 57%', justifyContent: 'flex-start', flexDirection: 'row', flexWrap: 'wrap'  }} >
      <View style={{ width: '25%', height: '25%' }} >
        <HourForcast hour={props.weather.hour[0]} />
      </View>
      {props.weather.hour.map((hour,index) =>{
        if ((index+1)%3 === 0) {
          return(
            <View style={{ width: '25%', height: '25%', marginBottom:10}} >
              <HourForcast key={index} hour={hour} />
            </View>
          )
        }
      })}

    </View>
  </View>
);

export default ForcastView;
