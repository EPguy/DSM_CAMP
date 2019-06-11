import React from 'react';
import classNames from 'classnames/bind';
import styles from './Login.scss';

const cx = classNames.bind(styles);

const Login = ({isSignUp, handleChange, handleChangeSignUp, handleLogin, handleSignUp}) => {
    const Login_Form = () => {
        return (
            <React.Fragment>
                <input type="text" onChange={handleChange} className={cx("text","ID")} name="id" placeholder="아이디"/>
                <input type="password" onChange={handleChange} className={cx("text","Password")} name="password" placeholder="비밀번호"/>
                <div className={cx("Register_Button")} onClick={handleChangeSignUp}>아이디가 없으십니까?</div>
                <button onClick={handleLogin} className={cx("button","login")}>로그인</button>
            </React.Fragment>
        );
    }
    const SignUp_Form = () => {
        return (
            <React.Fragment>
                <input type="text" onChange={handleChange} className={cx("text","name")} name="name" placeholder="이름"/>
                <input type="text" onChange={handleChange} className={cx("text","ID")} name="id" placeholder="아이디"/>
                <input type="password" onChange={handleChange} className={cx("text","Password")} name="password" placeholder="비밀번호"/>
                <div className={cx("Register_Button")} onClick={handleChangeSignUp}>로그인을 하시겠습니까?</div>
                <button onClick={handleSignUp} className={cx("button","login")}>회원가입</button>
            </React.Fragment>
        );
        
    }
    return (
        <div className={cx("Login_Wrapper")}>
            <div className={cx("Login_Title")}>
                { isSignUp ? "회원가입" : "로그인" }
            </div>
            <div className={cx("Login_Form")}>
                {isSignUp ? SignUp_Form() : Login_Form()}
            </div>
        </div>
    );
};

export default Login;