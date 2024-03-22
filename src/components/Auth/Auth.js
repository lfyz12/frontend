import { useContext, useEffect, useState } from "react";
import React from 'react';
import { Context } from "../..";
import {useLocation, useNavigate} from 'react-router-dom'
import { ACCOUNT_ROUTE } from "../../utils/consts";

const Auth = () => {
    const {user} = useContext(Context)
    const [login, setLogin] = useState(false)
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const checkPath = () => location.pathname === '/login' ? setLogin(true) : setLogin(false)

    useEffect(() => {
        checkPath()
    }, [location.pathname])

    const registCreate = async () => {
        await user.registCreate(username, name, email, password1, password2)
        // navigate(ACCOUNT_ROUTE)
    }

    return (
        <div>
            {login ? 
            <div>
                <input 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                placeholder="Логин"/>
                <input 
                value={password1} 
                onChange={e => setPassword1(e.target.value)}
                placeholder="Пароль"/>
            </div> :
             <div>
                <input 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                placeholder="Логин"/>
                <input 
                value={name} 
                onChange={e => setName(e.target.value)}
                placeholder="Имя"/>
                <input 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="Почта"/>
                <input 
                value={password1} 
                onChange={e => setPassword1(e.target.value)}
                placeholder="Пароль"/>
                <input 
                value={password2} 
                onChange={e => setPassword2(e.target.value)}
                placeholder="Повторите пароль"/>
            </div>}
            <button onClick={registCreate}>{login ? 'Войти' : 'Зарегистрироваться'}</button>
        </div>
    );
};

export default Auth;