import InputStyle from "./Input.module.scss";

export default function Input() {
    return (
        <div className={InputStyle.container}>
            <button className={InputStyle.button}></button>
            <input type="text" className={InputStyle.input} />
        </div>
    )
}