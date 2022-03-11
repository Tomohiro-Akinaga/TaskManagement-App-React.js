import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Main(props) {
        const navigate = useNavigate();
        useEffect(() => {
            props.user ? navigate("/") : navigate("/signup");
        },[]);
    return <h1>Hello, World</h1>;
}
