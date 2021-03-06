/* React */
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Component */
import Home from "./components/Home/Home.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
/* Firebase */
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig.js";

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
                <Route path="/" element={<Home user={user} />} />
                <Route path="signup" element={<SignUp user={user} />} />
                <Route path="signin" element={<SignIn user={user} />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
