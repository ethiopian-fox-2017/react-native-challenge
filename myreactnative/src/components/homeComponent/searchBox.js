import React from 'react';
import {
  View,
} from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions';

const styles = {
  container: {
    width: '100%',
    height: '16%',
  },
};

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  search(text) {
    this.props.fetchWeathers(text);
    this.setState({ text: '' });
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          inputStyle={styles.input}
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          placeholder="Type Here..."
        />
        <Button
          small
          raised
          buttonStyle={{ marginLeft: 0, marginRight: 0 }}
          icon={{name: 'search'}}
          title='Search'
          onPress={() => this.search(this.state.text)} />

      </View>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchWeathers: city => dispatch(fetchWeather(city)),
});
export default connect(null, mapDispatchToProps)(SearchBox);
