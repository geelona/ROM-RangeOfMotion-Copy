import "./Logo.scss";

import logo from "../../assets/images/logo.png";

function Logo() {
    return (
        <>
            <div className="logo-wrapper">
                <img src={logo} alt="logo" />
            </div>
        </>
    );
}

export default Logo;
