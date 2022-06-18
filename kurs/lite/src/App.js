import React, {useState} from "react"
import {Context} from "./Contract/Context"
import {UserList} from "./Contract/UserList"
import { BrowserRouter as Router} from "react-router-dom"
import Web3 from "web3"
import Routers from "./router"

const App = () => {
  const [web3] = useState (new Web3("http://127.0.0.1:8545"))
  const Addr = "0x1659a11450A2931292f97FD2B265aAA78f902b88" // Адрес контракта 
  const [Contract] = useState(new web3.eth.Contract(UserList, Addr))

  return (
    <Router>
        <Context.Provider value= {{web3, Contract}}>
        <Routers/>
      </Context.Provider>
    </Router>
  ) 
}
export default App;