import React from 'react'
import {StatusBar, View, Text, StyleSheet} from 'react-native'
import ToolbarAndroid from 'ToolbarAndroid'


var toolbarActions = [
  {title: 'Tambah Data'},
  {title: 'List Data'},
];

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#FFB300',
    height: 56,
  }
})

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      actionText : '',
      toolbarSwitch : '',
      colorProps : {
        titleColor : '',
        subtitleColor : '',
      }
    }
  }
  getInitialState() {
    return {
      actionText: 'Example app with toolbar component',
      toolbarSwitch: false,
      colorProps: {
      titleColor: '#3b5998',
      subtitleColor: '#6a7180',
      },
    };
  }

  render(){
    return (
      <View>
      <ToolbarAndroid
        actions={toolbarActions}
        onActionSelected={this._onActionSelected}
        onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
        style={styles.toolbar}
        title="Cari Makan" />
      </View>
    )
  }

  _onActionSelected(position) {
    console.log('ada',position);
  }
}

export default Header
