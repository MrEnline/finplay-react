import { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import { AuthResponse } from "../models/response/AuthResponse";
import axios from "axios";

export default class Store {
    //user = {} as IUser;
    user = "";
    isAuth = false;
    isLoading = false;

    // constructor() {
    //     makeAutoObservable(this);
    // }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: string) {
        this.user = user;
    }

    async login(username: string, password: string) {
        try {
            const response = await AuthService.login(username, password);
            console.log(response);
            //localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("username", response.data.username);
            this.setAuth(true);
            this.setUser(response.data.username);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setUser("");
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        const username = localStorage.getItem("username");
        if (username) {
            this.setAuth(true);
            this.setUser(username);
        }
    }
}
