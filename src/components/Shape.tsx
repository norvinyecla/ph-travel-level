import useAppStore from "../store/appStore";

const Shape = (props: ShapeProps) => {
    const setCurrentlySelected = useAppStore((state) => state.setCurrentlySelected);

    const handleShapeClick = () => {
        setCurrentlySelected(props.name);
    }

    return <>
        <div onClick={handleShapeClick}>
            <h3>Name: {props.name}</h3>

            <div>
                <p><label>Level of {props.name}</label></p>
            </div>
        </div>
    </>
}

type ShapeProps = {
    name: string
}
export default Shape;
