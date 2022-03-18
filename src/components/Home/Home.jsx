import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "./Header/Header.jsx";
import Main from "../Home/Main/Main.jsx";
import HomeStyle from "./Home.module.scss";
import { useState } from "react";
import { auth } from "../../firebaseConfig.js";
import Loading from "../Loading/Loading.jsx";

function Home({ user }) {
    const [important, setImportant] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        user ? navigate("/") : navigate("/signin");
    }, [user]);

    if (!auth.currentUser) {
        return null;
    }
    const userEmail = auth.currentUser.email;

    return (
        <div className={HomeStyle.container}>
            {loading && <Loading />}
            <Header important={important} setImportant={setImportant} />
            <Main
                important={important}
                userEmail={userEmail}
                setLoading={setLoading}
            />
        </div>
    );
}

Home.propTypes = {
    user: PropTypes.object,
};

export default Home;
