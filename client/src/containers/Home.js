import React, { useState } from 'react';
import Header from "../components/Header";
import Content from "../components/Content";
import LoginForm from '../components/LoginForm';

const Home = () => {
    const [onClickLogin, setOnClickLogin] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(true);

    const onLoginButtonClick = (value) => {
        setOnClickLogin(value)
    };

    return (
        <div>
            <Header onLoginButtonClick={onLoginButtonClick} />
            <Content />
            {onClickLogin ? <LoginForm openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} /> : <></>}
        </div >
    );
}

export default Home;
