import React, { useState } from "react";
import srmlogo2 from "../../assets/srmlogo2.webp";
import "./auth.css";

const Auth = () => {
    const [SRMid, setSRMid] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setSRMid(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="authentication-page">
            <img src={srmlogo2} style={{ width: "200px" }} />
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        SRMid:
                        <input type="text" value={SRMid} onChange={handleUsernameChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Auth;
