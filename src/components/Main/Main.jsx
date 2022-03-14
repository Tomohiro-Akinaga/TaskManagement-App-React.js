import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import SignOut from "./Main-SignOutButton/SignOut.jsx";

function Main({ user }) {
    const navigate = useNavigate();
    useEffect(() => {
        user ? navigate("/") : navigate("/signin");
    }, [user]);

    return (
        <>
            <h1>Hello, World</h1>
            <SignOut />
        </>
    );
}

Main.propTypes = {
    user: PropTypes.object,
};

export default Main;
