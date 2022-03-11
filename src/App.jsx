import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./components/Main/Main.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";

function App() {
    const [user, setUser] = useState(false);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main user={user}/>} />
                    <Route path="signup" element={<SignUp setUser={setUser} />} />
                    <Route path="signin" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
