import React, { useState } from "react";
import {useHistory,Link} from 'react-router-dom'
import { UseContext } from "../Contract/Context";
import Web3 from "web3"; 
import "../Css_files/Page_3.css"
import img_registr from "../icons/img_auto.png"




const Page_3 = () => {

/////////////////////////////////////////////////////////////////////////////////////////////
    const {web3, Contract} = UseContext()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [sword, setSword] = useState('')
    const history = useHistory()
/////////////////////////////////////////////////////////////////////////////////////////////

//--------------------------------->>>>>Авторизация<<<<<<-----------------------------------
    async function authorization (e)  {
        e.preventDefault();
        try{
            const address = await Contract.methods.getAddr(login).call()//обращение к контракту (функция getAddr )
            
                await web3.eth.personal.unlockAccount(address, password, 0)//обращение к гэсу (разблокировка аккаунта)
                const hashPW = Web3.utils.keccak256(password); 
                const hashSW = Web3.utils.keccak256(sword); 
                await Contract.methods.LogIn(login, hashPW, hashSW).send({from:address}); 
                const logged = await Contract.methods.logged(address).call(); 
				const UserRole = await Contract.methods.get_role().call({from: address}) 
                if(logged){
                    sessionStorage.setItem("address", address); 
                    sessionStorage.setItem("login", login);
					sessionStorage.setItem("role", UserRole);
						if(UserRole == "2") {
							history.push("/Page_8");
						}
							else if(UserRole == "0") {
								history.push("/Page_5");
							}
								else if(UserRole =="1") {
									history.push("/Page_6");
								}
                                else if(UserRole =="3") {
									history.push("/Page_7")
								}
                                else if(UserRole =="4") {
									history.push("/Page_4")
								}
									else {
										alert("Ты ошибка без роли :)");
									}
                }
            }
        catch(e) {
            alert(e) 
        }
    }
        return (
            <div className= "container_auto">
            <img className="icon_auto" src={img_registr}></img>
            <h3> Авторизация </h3>
            <input className="input_login_a" required placeholder='Ваш Логин' value={login} onChange={(e) => setLogin(e.target.value)}/>  <br/>
            <input className="input_password_a" required placeholder='Ваш Пароль' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br/>
            <input className="input_codeword_a" required placeholder='Ваше кодовое слово' value={sword} onChange={(e)=> setSword(e.target.value)}/><br/>
            <button className="button_auto_a" onClick={authorization}>Авторизация</button><br/>
            <Link to ="./Page_1"><button className = "button_back_a">Назад</button></Link>
            </div>
        )
}
export default Page_3