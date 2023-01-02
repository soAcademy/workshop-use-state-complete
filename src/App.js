import logo from './logo.svg'
import './App.css'

import { UseStateComponent } from './UseStateComponent/UseStateComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UseStateComponent />
      </header>
    </div>
  )
}

export default App
