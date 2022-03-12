import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import SignOut from "./Main-SignOutButton/SignOut.jsx";
import auth from "../../firebaseConfig.js";

function Main(props) {
    const navigate = useNavigate();

    useEffect(() => {
        props.user ? navigate("/") : navigate("/signup");
    }, []);

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
