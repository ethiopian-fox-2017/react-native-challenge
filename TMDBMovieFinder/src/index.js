import { StackNavigator } from 'react-navigation'

import Main from './components'
import About from './components/About'

const App = StackNavigator(
  {
    Main: { screen: Main },
    About: { screen: About }
  },
  {
    headerMode: 'none'
  }
)

export default App