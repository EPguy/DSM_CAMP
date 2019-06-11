import React from 'react';
import LoginContainer from 'Containers/LoginContainer';
import classNames from 'classnames/bind';
import styles from './LoginPage.scss';

const cx = classNames.bind(styles);

const LoginPage = () => {
    return (
        <div>
            <div className={cx("Login_Container")}>
                <LoginContainer/>
            </div>
        </div>
    );
};

export default LoginPage;