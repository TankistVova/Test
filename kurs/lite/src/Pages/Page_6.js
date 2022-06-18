import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UseContext } from "../Contract/Context";
import Web3 from "web3";
import "../Css_files/Page_6.css"
import img_profil from "../icons/img_profil.png"
import { useEffect } from "react"

/////////////////////////////////////////////////Покупатель////////////

const Page_6 = () => {
    const history = useHistory()
    const { web3, Contract } = UseContext()

    const [shop, setShop] = useState('')
    const [shop1, setShop1] = useState('')
    const [role, setRole] = useState('')

    const [test, setTest] = useState([])
    const [content, setContent] = useState('')
    const [rate, setRate] = useState('')
    const [answer, setAnswer] = useState('')

    const address = sessionStorage.getItem("address")
    const login = sessionStorage.getItem("login")
    localStorage.setItem("nameShop", shop1)
    const [balance, getBalance] = useState("");
    const [fio, getFio] = useState("");


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
        console.log(address)
    },
        [])


    async function Role(e) {
        e.preventDefault();
        try {
            await Contract.methods.upRoles(role, shop).send({ from: address });
            console.log(1)
            alert('Запрос отправлен')
        }
        catch (e) {
            alert(e)
        }
    }


    async function Review(e) {
        e.preventDefault();
        try {
            await Contract.methods.newReview(shop1, content, rate, 0).send({ from: address });
            console.log(1)
            alert('Отзыв отправлен')
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
                <p><strong>Покупатель</strong></p>
            </div>

            <div className="Role">
                <h3>Подать заявку на повышение</h3>
                <input className="input_numberRole" required placeholder="Введите номер роли" value={role} onChange={(e) => setRole(e.target.value)}></input>
                <input className="input_selectShop" required placeholder="Введите магазин" value={shop} onChange={(e) => setShop(e.target.value)}></input><br />
                <button className="button_role" onClick={Role}>Подать заявку</button>
            </div>


            <div className="Review">
                <h3>Оставьте комментарий</h3>
                <form onSubmit={Review}>
                    <input className="input_Shop1" required placeholder="Выберете магазин" value={shop1} onChange={(e) => setShop1(e.target.value)}></input><br></br>
                    <input className="input_content" required placeholder="Напишите комментарий" value={content} onChange={(e) => setContent(e.target.value)}></input><br></br>
                    <input className="input_rate" required placeholder="Оставьте оценку" value={rate} onChange={(e) => setRate(e.target.value)}></input><br></br>
                    <button className="button_review">Оставить комментарий</button>
                </form>
                <button className="button_review1" onClick={pageComments}>Получить все отзывы</button>
            </div>





        </>
    )
}
export default Page_6