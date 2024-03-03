import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {API_URL} from "../../index";
const Home = () => {
    const [cursList, setCursList] = useState([])
    const getCursList = (data) => {
        axios.get(API_URL).then(res => setCursList([res]))
    }

    useEffect(() => {
        getCursList()
    }, [])
    console.log(cursList)
    return (
        <div>

        </div>
    );
};

export default Home;