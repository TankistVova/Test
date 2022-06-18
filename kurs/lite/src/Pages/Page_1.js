import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css_files/Page_1.css"
import { UseContext } from "../Contract/Context";
import Web3 from "web3"; 


/////////////////////////////////////////////////

    const Page_1 =()=>{
        const history = useHistory()

        const {web3,Contract} = UseContext()
        

            //Функция перехода на Page_2(Регистрация)
            async function perehod1(){
                history.push('/Page_2')
            }

                //Функцтя перехлда на Page_3(Авторизация)
            async function perehod2(){
                history.push('/Page_3')
            }


//-------------------------------->>>>>ГЛАВНАЯ СТРАНИЦА<<<<<<-------------------------

                return(
                    <>
                    <div className = "container">
                       <h3>Регистрация/Вход</h3>
                        <button className="button_reg" onClick={perehod1}>Регистрация</button>
                        <button  className="button_auto" onClick={perehod2}>Вход</button>
                    </div>
                    </>
                )
    }
export default Page_1