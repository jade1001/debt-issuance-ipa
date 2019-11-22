import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DebtIssuance from './components/DebtIssuance'
import DashboardMain from './components/DashboardMain'

function App() {
  return (
    <div className='App'>
      <DashboardMain />
      {/* <DebtIssuance /> */}
    </div>
  )
}

export default App
