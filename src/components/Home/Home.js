import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import {API_URL, Context} from "../../index";
import Carusel from './Carusel';
const Home = () => {

    return (
        <div>
            <Carusel/>
        </div>
    );
};

export default Home;