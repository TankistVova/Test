import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UseContext } from "../Contract/Context";
import Web3 from "web3"; 
import "../Css_files/Page_5.css"
import img_profil from "../icons/img_profil.png"
import {useEffect} from "react"


/////////////////////////////////////////////////Админ///////

    const Page_5 =()=>{
        const history = useHistory()
        const {web3,Contract} = UseContext()
        const [sity, setSity] = useState('')
        const [sity1, setSity1] = useState('')
        const [addressO, setAddressO] = useState('')

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

        async function newMag(e){
            e.preventDefault(); 
            try{
                await Contract.methods.newShop(sity, addressO).send({from: address});
                console.log(1)
                alert('Магазин успешно добавлен')
            }
            catch(e){
                alert(e)
            }
        }

        async function getReq(e){
            e.preventDefault(); 
            try{
                const array= await Contract.methods.getReq().call();
                console.log(array)
                alert(array)
            }
            catch(e){
                alert('Запросов нет')
            }
        }

        async function delMag(e){
            e.preventDefault(); 
            try{
                await Contract.methods.delShop(sity1).send({from: address});
                alert('Магазин удалён')
            }
            catch(e){
                alert('Магазина не существует')
            } 
        }

        async function getSeller(e){
            e.preventDefault(); 
            try{
                const array = await Contract.methods.getSellers().call(); 
                console.log(array)
                alert(array[0])
           }
            catch(e){
                alert(e)
            }
        }


        const [addr, setAddr] = useState();
       
     

            async function changeRole(e) {
            e.preventDefault();
            try{
            await Contract.methods.changeRole(addr, 1, "", 0).send({from: address})
            alert("Вы успешно сменили роль пользователя.")
            }
            catch(e) {
            alert(e)
            }
            }

            async function SellerRole(e) {
                e.preventDefault();
                try{
                await Contract.methods.changeRole(addr, 1, "", 2).send({from: address})
                alert("Вы успешно сменили роль продавца.")
                }
                catch(e) {
                alert(e)
                }
                }

                async function BuyerRole(e) {
                    e.preventDefault();
                    try{
                    await Contract.methods.changeRole(addr, 2, "", 1).send({from: address})
                    alert("Вы успешно сменили роль покупателя.")
                    }
                    catch(e) {
                    alert(e)
                    }
                    }
    


            async function newAdmin(e) {
                e.preventDefault();
                try{
                await Contract.methods.changeRole(addr, 0, "", 1).send({from: address})
                alert("Администратор добавлен.")
                }
                catch(e) {
                alert(e)
                }
                }


//-------------------------------->>>>>ГЛАВНАЯ СТРАНИЦА<<<<<<-------------------------

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
                    <p><strong>Админ</strong></p>
                    </div> 
                     
                    <div className = "newMag">
                       <h3>Добавить магазин</h3>
                       <input className="input_addr" required placeholder="Введите адрес владельца" value={addressO} onChange={(e) => setAddressO(e.target.value)}></input><br></br>
                       <input className="input_gor" required placeholder="Введите город" value={sity} onChange={(e) => setSity(e.target.value)}></input><br></br>
                        <button className="button_newMag" onClick={newMag}>Добавить</button>
                    </div>

                    <div className = "delMag">
                        <h3>Удалить магазин</h3> 
                        <input className="input_delMag" required placeholder="Введите город" value={sity1} onChange={(e) => setSity1(e.target.value)}></input><br></br>
                        <button className="button_delMag" onClick={delMag}>Ок</button><br></br>
                    </div>

                    <div className="getReq">
                        <h3>Посмотреть все запросы</h3>
                        <button className="button_getReq" onClick={getReq}>Посмотреть</button>
                    </div> 

                    <div className="function_ChRole">
                    <h3>Сменить свою роль</h3>
                        <input className="input_changeRole" placeholder="Адрес" onChange={(e) => setAddr(e.target.value)}></input><br/><br/>
                        <button className="button_changeRole" onClick={changeRole}>Сменить</button>
                        </div>

                        <div className="function_SRole">
                    <h3>Сменить  роль продавца </h3>
                        <input className="input_SRole" placeholder="Адрес" onChange={(e) => setAddr(e.target.value)}></input><br/><br/>
                        <button className="button_SRole" onClick={SellerRole}>Сменить</button>
                        </div>

                        <div className="function_BRole">
                    <h3>Сменить  роль  покупателя</h3>
                        <input className="input_BRole" placeholder="Адрес" onChange={(e) => setAddr(e.target.value)}></input><br/><br/>
                        <button className="button_BRole" onClick={BuyerRole}>Сменить</button>
                        </div>

                        <button className="button_checkS" onClick={getSeller}>Посмотреть всех продавцовп</button>

                        <div className="function_newAdmin">
                        <h3>Добавить администратора</h3>
                        <input className="input_newdmin" placeholder="Адрес" onChange={(e) => setAddr(e.target.value)}></input><br/><br/>
                        <button className="button_newAdmin" onClick={newAdmin}>Сменить</button>
                        </div>

                    </>


                )
    }
export default Page_5