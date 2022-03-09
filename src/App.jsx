import SignUp from "./components/SignUp/SignUp.jsx";
import AppStyle from "./App.module.scss";

function App() {

    return (
        <div className={AppStyle.container}>
            <SignUp />
        </div>
    )
}

export default App;
