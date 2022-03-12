/* React */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
/* Component */
import Main from "./components/Main/Main.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
/* Firebase */
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebaseConfig.js";

function App() {
    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, () => {
            auth.currentUser ? setUser(auth.currentUser) : setUser();
        });
    }, [user]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="signup" element={<SignUp setUser={setUser} />} />
                <Route path="signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
