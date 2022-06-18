import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UseContext } from "../Contract/Context";
import Web3 from "web3";
import img_profil from "../icons/img_profil.png"
import { useEffect } from "react"
import "../Css_files/Page_4.css"


/////////////////////////////////////////////////Владелец магазина
const Page_4 = () => {
    const history = useHistory()
    const { web3, Contract } = UseContext()

    const address = sessionStorage.getItem("address")
    const login = sessionStorage.getItem("login")
    const [summ, getSumm] = useState("");
    const [balance, getBalance] = useState("");
    const [fio, getFio] = useState("");
    const [shop1, setShop1] = useState('')



    async function checeBalance() {
        let balance = await Contract.methods.getBalance(address).call()
        getBalance(balance / (10 ** 18))
    }

    async function checkFio() {
        let fio = await Contract.methods.getFio(address).call()
        getFio(fio)
    }


    useEffect(() => {
        checkFio();
        checeBalance();
    },
        [])

    async function getMoney(e) {
        e.preventDefault();
        try {
            await Contract.methods.newMoneyRequest(summ).send({ from: address });
            console.log(1)
            alert('Запрос отправлен')
        }
        catch (e) {
            alert(e)
        }
    }

    async function logOut() {
        try {
            await Contract.methods.logout().send({ from: address })
            await web3.eth.personal.lockAccount(address)
            history.push('/Page_1')
        } catch (e) {
            alert(e)
        }
    }

    async function pageComments() {
        try {
            history.push('/Page_9')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>

            <div className="right_panel">
                <img className="img_profil" src={img_profil}></img><br /><br /><br />
                <hr></hr>
                <p>Логин {login}</p>
                <p>ФИО {fio}</p>
                <p>Баланс {balance}</p>
                <button onClick={logOut}>Выход</button>
                <hr></hr>
            </div>

            <div className="header_panel">
                <p><strong>Владелец магазина</strong></p>
            </div>


            <div className="getMoney">
                <h3>Запросить деньги </h3>
                <input className="input_getMoney" required placeholder="Введите сумму" value={summ} onChange={(e) => getSumm(e.target.value)}></input><br></br>
                <button className="button_getMoney" onClick={getMoney}>Отправить</button><br></br>
            </div>
        </>
    )
}
export default Page_4