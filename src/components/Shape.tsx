import {useState} from "react";

const Shape = (props: ShapeProps) => {
    const [level, setLevel] = useState(0);
    const [show, setShow] = useState(false);

    const incrementClickHandler = () => {
        setLevel((prevState) => prevState + 1);
    }

    const decrementClickHandler = () => {
        setLevel((prevState) => prevState - 1);
    }

    const showHideClickHandler = () => {
        setShow((prevState) => !prevState);
    }

    return <>
        <div>
            <h3>Name: {props.name}</h3>
            <p>{level}</p>
            <button onClick={incrementClickHandler}>Add</button>
            <button onClick={decrementClickHandler}>Decrement</button>
            <button onClick={showHideClickHandler}>Show/Hide</button>

            { show ? `Show` : ''}
        </div>
    </>
}

type ShapeProps = {
    name: string
}
export default Shape;
