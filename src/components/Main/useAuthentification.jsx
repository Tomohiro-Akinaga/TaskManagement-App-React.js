import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function useAuthentification(user) {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    return currentUser;
}
