import DisplayTime from "./Header-DisplayTime/DisplayTime.jsx";
import ImportantButton from "./Header-ImportantButton/ImportantButton.jsx";
import SignOut from "./Header-SignOutButton/SignOut.jsx";
import HeaderStyle from "./Header.module.scss";
export default function Header() {
    return (
        <header className={HeaderStyle.header}>
            <DisplayTime />
            <div className={HeaderStyle.right}>
                <ImportantButton />
                <SignOut />
            </div>
        </header>
    );
}
