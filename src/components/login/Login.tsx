import React from "react";
import styles from "./Login.module.css";
import Logo from "../assets/img/finnplay-logo.svg";

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.loginform}>
                <img className={styles.logo} src={Logo} alt="finnplay-logo" />
                <input type="text" />
            </div>
        </div>
    );
};

export default Login;
