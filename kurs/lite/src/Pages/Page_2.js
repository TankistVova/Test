import React, { useState } from "react";
import {useHistory, Link} from 'react-router-dom'
import Web3 from "web3"
import { UseContext } from "../Contract/Context";
import "../Css_files/Page_2.css"
import img_registr from "../icons/img_registr.png"


const Page_2 = () => {

///////////////////////////////////////////////////////////////////////////////////////////
                                                                                            
    const {web3, Contract} = UseContext()                                                      
    const [login, setLogin] = useState('')                                                         
    const [password, setPassword] = useState('')
    const [FIO, setFIO] = useState('')   
    const [sword, setSword] = useState('')                                                   
    const history = useHistory()                                                                   
                                                    
                                                                                            
//////////////////////////////////////////////////////////////////////////////////////////


//---------------------------------->>>>>>>Регистрация<<<<<------------------------------
    async function Registration (e)  {
            e.preventDefault();
            const address = await web3.eth.personal.newAccount(password) 
            console.log(1)
            const accounts = await web3.eth.personal.getAccounts() 
            console.log(1)
            await web3.eth.personal.unlockAccount(accounts[0], "1234", 11111110)//обращение к гэсу (создание аккаунта)
            console.log(1)
            const hashPW = Web3.utils.keccak256(password);
            console.log(1)
            const hashSW = Web3.utils.keccak256(sword);
            console.log(1)
            try {
                await Contract.methods.newUser(address, login, FIO, hashPW , hashSW).send({ from: accounts[0]})
                console.log(1)
                await web3.eth.sendTransaction({
                    from: accounts[0],
                    to: address,
                    value: 10 ** 18
                    });
                    console.log(1)
                await web3.eth.personal.unlockAccount(address, password); 
                console.log(1)
                sessionStorage.setItem("address", address); 
                console.log(1)
                sessionStorage.setItem("login", login); 
                console.log(1)
                alert("Аккаунт создан")
                console.log(1)
                history.push('/Page_1')
            
        }
        catch(e) {
            alert(e)
            alert('Аккаунт не создан')
        }
    }
        return (
            <div className="container_registr">
            <img className="icon_registr" src={img_registr}></img>
            <h3> Регистрация </h3>
            <input className="input_login" required placeholder='Придумайте Логин' value={login} onChange={(e) => setLogin(e.target.value)}/>  <br/>
            <input className="input_fio" required placeholder='Введите ФИО' value={FIO} onChange={(e)=> setFIO(e.target.value)}/>
            <input className="input_password" required placeholder='Придумайте Пароль' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input className="input_codeword" required placeholder='Придумайте кодовое слово' value={sword} onChange={(e)=> setSword(e.target.value)}/>
            <button className="button_registr" onClick={Registration}>Зарегистрироваться</button><br/>
            <Link to="./Page_1"><button className="button_back">Назад</button></Link>

            </div>
        )
}
export default Page_2