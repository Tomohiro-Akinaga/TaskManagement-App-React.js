import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "./Header/Header.jsx";
import Main from "../Home/Main/Main.jsx";
import HomeStyle from "./Home.module.scss";

function Home({ user }) {
    const navigate = useNavigate();

    useEffect(() => {
        user ? navigate("/") : navigate("/signin");
    }, [user]);

    return (
        <div className={HomeStyle.container}>
            <Header />
            <Main />
        </div>
    );
}

Home.propTypes = {
    user: PropTypes.object,
};

export default Home;
