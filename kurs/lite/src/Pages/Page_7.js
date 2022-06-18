import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UseContext } from "../Contract/Context";
import Web3 from "web3"; 
import "../Css_files/Page_7.css"
import img_profil from "../icons/img_profil.png"
import {useEffect} from "react"

/////////////////////////////////////////////////Банк////////////

    const Page_7 =()=>{
        const history = useHistory()
        const {web3,Contract} = UseContext()

        const[shop, setShop] = useState('')
        const[city, setCity] = useState('')
        const[cityD, setCityD] = useState('')


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
        }, 
        [])
    

        async function MoneyA(e){
            e.preventDefault(); 
            try{
                const array= await Contract.methods.getMoneyRequests().call();
                console.log(array)
                alert(array)
            }
            catch(e){
                alert('Запросов нет')
            }
        }

        async function MoneyInfo(e){
            console.log(1)
            e.preventDefault(); 
            try{
               const array = await Contract.methods.getMoneyRequest(shop).call(); 
                console.log(array)
                alert(array[0] + '\n' + array[1] + '\n' + array[2] + '\n'  )
                console.log(2)
            }
            catch(e){
                alert(e)
            }
        }
    
       
        async function Request(e){
            e.preventDefault(); 
            try{
				const infoRequest = await Contract.methods.getMoneyRequest(city).call();
				console.log(1)
				console.log(infoRequest[2])
				await Contract.methods.approveMoneyRequest(city).send({from: address, value: infoRequest[2]}); 
				console.log(2)
				alert('Деньги отправлены')
            }
            catch(e){
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
                    <p><strong>Банк</strong></p>
                    </div>


                    <div className = "MoneyInfo"> 
                      <h3>Посмотреть информацию о запросе</h3>
                       <input className="input_Shop" required placeholder="Введите название магазина" value={shop} onChange={(e) => setShop(e.target.value)}></input><br/>
                        <button className="button_moneyInfo" onClick={MoneyInfo}>Посмотреть информацию</button>
                    </div>

                    <div className="MoneyA">
                        <h3>Посмотреть все запросы</h3>
                        <button className="button_moneyA" onClick={MoneyA}>Посмотреть</button>
                    </div> 
                    
                    <div className="Request">
                        <h3>Ответить на запрос</h3>
                        <input className="input_city" required placeholder="Введите магазин" value={city} onChange={(e)=> setCity(e.target.value)}></input><br/>
                       <button className="button_request" onClick={Request}>Отправить деньги</button>
                    </div>

            
                  
                    </>           
         
                )
    }
export default Page_7