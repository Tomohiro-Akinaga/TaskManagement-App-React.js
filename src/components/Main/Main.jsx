import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "./Header/Header.jsx";
import SignOut from "../Main/Header/Header-SignOutButton/SignOut.jsx";

function Main({ user }) {
    const navigate = useNavigate();
    useEffect(() => {
        user ? navigate("/") : navigate("/signin");
    }, [user]);

    return (
        <>
            <Header />
            {/* <SignOut /> */}
        </>
    );
}

Main.propTypes = {
    user: PropTypes.object,
};

export default Main;
