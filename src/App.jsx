import { useState } from "react";
import SignUp from "./components/SignUp/SignUp.jsx";
import Header from "./components/Header/Header.jsx";
import AppStyle from "./App.module.scss";

function App() {
    const [member, setMember] = useState(false);
    const handleClick = () => {
        // setMember(true);
        console.log("submit");
    }
    return (
        <div className={AppStyle.container}>
            { !member && <SignUp onClick={handleClick}/>}
            <Header />
        </div>
    )
}

export default App;
