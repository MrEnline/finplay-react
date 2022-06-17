import React, { FC, useContext, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import AdminPage from "./pages/AdminPage";
import PlayerPage from "./pages/PlayerPage";
import { Context } from "./index";
import { ADMIN, PLAYER } from "./utils/Constants";

function App() {
    const { store } = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            store.checkAuth();
        }
    }, []);

    const FirstPage: FC = () => {
        if (localStorage.getItem(ADMIN)) {
            return <Redirect to="/admin" />;
        }
        if (localStorage.getItem(PLAYER)) {
            return <Redirect to="/player" />;
        }
        return <Login />;
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/player" element={<PlayerPage />} />
                    <Route path="/">{FirstPage}</Route>
                </Routes>
            </div>
        </Router>
        // <Login />
    );
}

export default App;
