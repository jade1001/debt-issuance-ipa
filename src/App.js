import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DebtIssuance from './components/DebtIssuance'
import DashboardMain from './components/DashboardMain'
import LoginNavBar from './components/LoginNavBar'
import Login from './components/Login'

function App() {
  return (
    <div className='App'>
      <Login />
      {/* <DebtIssuance /> */}
    </div>
  )
}

export default App
