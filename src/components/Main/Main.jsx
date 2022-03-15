import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "./Header/Header.jsx";
import MainStyle from "./Main.module.scss";

function Main({ user }) {
    const navigate = useNavigate();
    useEffect(() => {
        user ? navigate("/") : navigate("/signin");
    }, [user]);

    return (
        <div className={MainStyle.container}>
            <Header />
        </div>
    );
}

Main.propTypes = {
    user: PropTypes.object,
};

export default Main;
