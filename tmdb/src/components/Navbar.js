import React from 'react'
import ToolbarAndroid from 'ToolbarAndroid'

export default class Navbar extends React.Component {
  render() {
    return (
      <ToolbarAndroid
        logo={require('../img/tmdb.png')}
        title="TMDB Movie Finder"
      />
    )
  }
}