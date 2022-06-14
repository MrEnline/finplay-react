import React from "react";
import styles from "./Login.module.css";
import Logo from "../assets/img/finnplay-logo.svg";
import VisiblePassword from "../assets/img/visible-password.svg";

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.loginform}>
                <img
                    className={styles.loginform__logo}
                    src={Logo}
                    alt="finnplay-logo"
                />
                <div className={styles.inputs__textfield}>
                    <div className={styles.textfield_content}>
                        <input type="text" name="login" id="login" required />
                        <label htmlFor="login">Логин</label>
                    </div>
                </div>
                <div className={styles.inputs__textfield}>
                    <div className={styles.textfield_content}>
                        <input type="password" name="pass" id="pass" required />
                        <label htmlFor="pass">Пароль</label>
                    </div>
                    <img
                        className={styles.icons__showpassword}
                        src={VisiblePassword}
                        alt="visible-password"
                    />
                </div>
                <button className={styles.loginform__button}>Login</button>
            </div>
        </div>
    );
};

export default Login;
