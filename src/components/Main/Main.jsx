// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import SignOut from "./Main-SignOutButton/SignOut.jsx";
import auth from "../../firebaseConfig.js";

function Main(props) {
    console.log(props);
    // const [uid, setUid] = useState();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     props.user ? setUid(props.user.uid) : setUid();
    // }, [props.user]);

    // useEffect(() => {
    //     uid ? console.log("correct") : console.log("wrong");;
    // }, [uid]);

    return (
        <>
            <h1>Hello, World</h1>
            <SignOut />
        </>
    );
}

// Main.propTypes = {
//     user: PropTypes.object,
// };

export default Main;
