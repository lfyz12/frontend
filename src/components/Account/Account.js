import React, { useContext, useEffect } from 'react';
import { Context } from '../..';

const Account = () => {
    const {user} = useContext(Context)

    const getUserDetail = async () => {
        await user.customUserDetail()
    }

    useEffect(() => {
        getUserDetail()
    }, [user.user.id])

    return (
        <div>
            Аккаунт
        </div>
    );
};

export default Account;