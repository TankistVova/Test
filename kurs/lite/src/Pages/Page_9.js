import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css_files/Page_9.css"
import { UseContext } from "../Contract/Context";
import Web3 from "web3";


/////////////////////////////////////////////////

const Page_9 = () => {
    const history = useHistory()

    const { web3, Contract } = UseContext()
    const [comments, setComments] = useState([])
    console.log(comments)
    const nameShop = localStorage.getItem("nameShop")
    const address = sessionStorage.getItem("address")

    async function checkAllComments() {
        const tmp = await Contract.methods.getShopReviews(nameShop).call()
        tmp.forEach(async (i) => {
            const comm = await Contract.methods.getReview(i).call()
            console.log(comm)
            setComments((prevComments) => [
                ...prevComments,
                {
                    sender: comm[3],
                    comments: comm[6]
                }
            ])
        }
        )
    }
    useEffect(() => {
        checkAllComments()
        console.log( )
    }, [])

    function ListComments() {
        return (<>
            <div className='MainComments'>
                {comments.map((comments, index) => (
                    <li key={index}>
                        <div className='Comments' >
                            <div className="BlockForProduct">
                                {comments.sender} <br />
                                {comments.comments} <br />
                            </div>
                        </div>
                    </li>
                ))}
            </div>
        </>
        )
    }

    function ListOtwet() {
        return (<>
            <div className='MainOtvet'>


            </div>
        </>)
    }

    function visibalityForm() {
        // let e1 = document.querySelector(".formAnswer")
        // let e2 = document.querySelector(".btnVisible")
        let e1 = document.getElementsByClassName(".formAnswer")
        let e2 = document.getElementsByClassName(".btnVisible")
        // e1.style.visibility = "visible"
        // e2.style.visibility = "hiden"
        console.log(e1)
        // console.log(e2)
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [otwet, setOtwet] = useState()
    const [NameShop, setNameShop] = useState();
    const [otwetContent, setOtwetContent] =useState();
    

    async function Review(e) {
        e.preventDefault();
        try {
           console.log(NameShop)
           console.log(otwetContent)
           await Contract.methods.NewOtwet(NameShop, otwetContent).send({from: address})
           console.log(1)
           alert("Вы успешно ответили на комментарий")
        }
        catch (e) {
            alert(e)
        }
    }

    const [namberOtwet, setNamberOtwet] = useState();

    async function checkOtwet(e) {
        e.preventDefault();
        try{
            const Otwets = await Contract.methods.getOtwet(namberOtwet).call()
            alert("Ответил: " + Otwets[1] + "\nОтвет: " + Otwets[2]);
        }
        catch(e) {
            alert(e)
        }
    }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 





    //-------------------------------->>>>>ГЛАВНАЯ СТРАНИЦА<<<<<<-------------------------
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    return (
        <>
            {<ListComments />}

            <div className="OtwetForm">
                <p><strong>Ответ</strong></p>
                <input className="input_NameShop" placeholder="Название магазина" onChange={(e)=> setNameShop(e.target.value)}></input><br/>
                <input className="input_OtwetContent" placeholder="Ответ" onChange={(e)=> setOtwetContent(e.target.value)}></input><br/>
                <button className="button_OtwetForm" onClick={Review}>Ответить</button>
            </div>

            <div className="CheckOtwet">
                <p><strong>Просмотреть ответы</strong></p>
                <input className="" placeholder="id ответа" onChange={(e) => setNamberOtwet(e.target.value)}></input><br/>
                <button className="" onClick={checkOtwet}>Просмотреть</button>

            </div>
        </>
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    )
}
export default Page_9