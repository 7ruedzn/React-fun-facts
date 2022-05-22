import React from "react";
import Header from './components/Header/Header'
import Facts from './components/Facts/Facts'
import './AppStyle.scss'

function App(){
  return (
    <div className="card">
      <Header />
      <Facts />
    </div>
  )
}

export default App