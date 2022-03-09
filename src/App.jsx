import { useState } from "react";
import PropTypes from "prop-types";
import SignUp from "./components/SignUp/SignUp.jsx";
import Header from "./components/Header/Header.jsx";
import AppStyle from "./App.module.scss";

function App() {
    const [user, setUser] = useState();

    return (
        <div className={AppStyle.container}>
            {!user && <SignUp setUser={setUser} />}
            <Header />
        </div>
    );
}

App.propTypes = {
    setUser: PropTypes.object,
};

export default App;
