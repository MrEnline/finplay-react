import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";

function App() {
    return (
        <Router>
            <div className="App">
                <Login />
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </Router>
        // <Login />
    );
}

export default App;
