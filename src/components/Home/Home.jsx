import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "./Header/Header.jsx";
import Main from "../Home/Main/Main.jsx";
import HomeStyle from "./Home.module.scss";
import { useState } from "react";

function Home({ user }) {
    const [important, setImportant] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        user ? navigate("/") : navigate("/signin");
    }, [user]);

    return (
        <div className={HomeStyle.container}>
            <Header important={important} setImportant={setImportant} />
            <Main important={important} />
        </div>
    );
}

Home.propTypes = {
    user: PropTypes.object,
};

export default Home;
