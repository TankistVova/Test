import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UseContext } from "../Contract/Context";
import Web3 from "web3"; 
import img_profil from "../icons/img_profil.png"
import {useEffect} from "react"
import "../Css_files/Page_8.css"


/////////////////////////////////////////////////Продавец////////////

    const Page_8 =()=>{
        const history = useHistory()
        const {web3,Contract} = UseContext()

        const [shop, setShop] = useState('')
        const [role, setRole] = useState('')
        const [shopR, setShopR] = useState('')

        const [content, setContent] = useState('')
        const [rate, setRate] = useState('')
        const [answer, setAnswer] = useState('')

        const address = sessionStorage.getItem("address")
        const login = sessionStorage.getItem("login")
        const [balance, getBalance] = useState("");
        const [fio, getFio] = useState("");


        async function checeBalance() {
            let balance = await Contract.methods.getBalance(address).call()
            getBalance(balance/(10**18))
        }
       
        async function checkFio(){
            let fio = await Contract.methods.getFio(address).call()
            getFio(fio)
        }
    
        useEffect(()=>{
            checkFio(); 
            checeBalance();
            console.log(address)
        }, 
        [])


   

        
        async function Role(e){
            e.preventDefault(); 
            try{
               await Contract.methods.upRoles(role, shop).call();
                console.log(1)
                alert('Запрос отправлен')
            }
            catch(e){
                alert('Запрос не отпраален')
            }
        }

        async function Review(){

        }

        const [roleR, setRoleR] = useState();
        const [max_role, setMax_role] = useState();
        const [shopr, setShopr]= useState(); 

        const [addr, setAddr] = useState();
       
     

      
        async function changeRole(e) {
            e.preventDefault();
            try{
            await Contract.methods.changeRole(addr, 1, "", 2).send({from: address})
            alert("Вы успешно сменили роль пользователя.")
            }
            catch(e) {
            alert(e)
            }
            }

                return(
                    <>
                
                <div className="right_panel">
                        <img className="img_profil" src={img_profil}></img><br/><br/><br/>
                        <hr></hr>
                        <p>Логин {login}</p>
                        <p>ФИО {fio}</p>
                        <p>Баланс {balance}</p>
                        <hr></hr>
                    </div>

                    <div className="header_panel">
                    <p><strong>Продавец</strong></p>
                    </div>

                    
                    <div className = "Role">
                       <h3>Подать заявку на понижение</h3>
                       <input className="input_numberRole" required placeholder="Введите номер роли" value={role} onChange={(e) => setRole(e.target.value)}></input>
                       <input className="input_selectShop" required placeholder="Введите магазин" value={shop} onChange={(e) => setShop(e.target.value)}></input><br/>
                        <button className="button_role" onClick={Role}>Подать заявку</button>
                    </div>

                    <div className="Review">
                        <h3>Оставьте комментарий</h3>
                        <input className="input_Shop1" required placeholder="Выберете магазин" value={shopR} onChange={(e)=> setShopR(e.target.value)}></input><br></br>
                        <input className="input_content" required placeholder="Напишите комментарий" value={content} onChange={(e)=> setContent(e.target.value)}></input><br></br>
                        <input className="input_rate" required placeholder="Оставьте оценку" value={rate} onChange={(e)=> setRate(e.target.value)}></input><br></br>
                        <button className="button_review" onClick={Review}>Оставить комментарий</button>
                    </div>

                            
                        <div className="function_changeRole">
                        <input className="input_changeRole" placeholder="Адрес" onChange={(e) => setAddr(e.target.value)}></input>
                        <button className="button_changeRole" onClick={changeRole}>Сменить</button>
                        </div>


                    </>
                )
    }
export default Page_8